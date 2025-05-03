
import { ProfessorAuth } from "@/components/ProfessorAuth";
import { Navbar } from "@/components/Navbar";
import { useNavigate } from "react-router-dom";
import { BookOpen, CheckCircle, ShieldCheck, Globe } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  
  const handleAuthSuccess = (token: string) => {
    navigate("/dashboard");
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      <div className="flex-1 grid lg:grid-cols-2 gap-8 p-6">
        <div className="hidden lg:flex flex-col justify-center items-center">
          <div className="max-w-lg">
            <div className="flex items-center justify-center bg-quiz-primary/10 rounded-full w-16 h-16 mb-6">
              <BookOpen className="h-8 w-8 text-quiz-primary" />
            </div>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Welcome to the <span className="gradient-text">next generation</span> of online examination
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Sign in to access your dashboard and manage your exams. Create, evaluate, and analyze student performance with ease.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-green-100 rounded-full p-1 mt-1">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Easy Exam Creation</h3>
                  <p className="text-gray-600">Create flexible exams with multiple question types in minutes.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-green-100 rounded-full p-1 mt-1">
                  <ShieldCheck className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Secure Testing</h3>
                  <p className="text-gray-600">Advanced security features to maintain academic integrity.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-green-100 rounded-full p-1 mt-1">
                  <Globe className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Accessible Anywhere</h3>
                  <p className="text-gray-600">Students can take exams from any device with internet access.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md">
              <div className="flex items-center gap-4">
                <div className="bg-quiz-primary/10 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <span className="font-semibold text-quiz-primary">AR</span>
                </div>
                <div>
                  <p className="text-gray-600 italic mb-1">
                    "Quiz Wizard has transformed how I assess my students. The comprehensive analytics help me identify knowledge gaps quickly."
                  </p>
                  <p className="font-medium text-gray-900">Dr. Amanda Rodriguez, Biology Professor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col justify-center items-center">
          <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
            <div className="flex justify-center mb-6 lg:hidden">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-quiz-primary to-quiz-secondary flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-6 text-center">Sign in to Quiz Wizard</h3>
            <ProfessorAuth onAuthSuccess={handleAuthSuccess} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
