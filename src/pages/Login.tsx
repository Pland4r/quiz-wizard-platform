
import { ProfessorAuth } from "@/components/ProfessorAuth";
import { Navbar } from "@/components/Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  
  // Check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    
    if (token && user) {
      navigate("/dashboard");
    }
  }, [navigate]);
  
  const handleAuthSuccess = (token: string) => {
    navigate("/dashboard");
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-4">
        <ProfessorAuth onAuthSuccess={handleAuthSuccess} />
      </div>
    </div>
  );
};

export default Login;
