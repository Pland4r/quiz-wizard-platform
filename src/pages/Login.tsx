
import { ProfessorAuth } from "@/components/ProfessorAuth";
import { Navbar } from "@/components/Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  
  // Check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    
    if (token && user) {
      navigate("/dashboard");
    }
    setIsLoading(false);
  }, [navigate]);
  
  const handleAuthSuccess = (token: string) => {
    navigate("/dashboard");
    toast({
      title: "Login successful",
      description: "You have been logged in successfully.",
    });
  };
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-quiz-primary"></div>
        </div>
      </div>
    );
  }
  
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
