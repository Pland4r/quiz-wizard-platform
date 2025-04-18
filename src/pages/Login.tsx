
import { ProfessorAuth } from "@/components/ProfessorAuth";
import { Navbar } from "@/components/Navbar";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  
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
