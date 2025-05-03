
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { AlertCircle, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="text-center max-w-md bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-gray-100">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center">
              <AlertCircle className="h-12 w-12 text-red-500" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-2">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved. Please check the URL or return to the home page.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/">
              <Button className="bg-quiz-primary hover:bg-quiz-primary/90 rounded-xl w-full sm:w-auto">
                <Home className="mr-2 h-4 w-4" />
                Return to Home
              </Button>
            </Link>
            <Button 
              variant="outline" 
              onClick={() => window.history.back()}
              className="border-gray-300 text-gray-700 hover:bg-gray-100 rounded-xl w-full sm:w-auto"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
