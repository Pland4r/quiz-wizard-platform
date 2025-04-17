
import { Button } from "@/components/ui/button";
import { User } from "@/types";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface NavbarProps {
  user?: User | null;
  onLogout?: () => void;
}

export const Navbar = ({ user, onLogout }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    navigate("/");
  };
  
  return (
    <nav className="bg-quiz-primary text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <span className="text-quiz-accent">Quiz</span>
          <span className="ml-1">Wizard</span>
        </Link>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className="hover:text-quiz-accent transition-colors">
            Home
          </Link>
          
          {user ? (
            <>
              {user.role === "PROFESSOR" && (
                <Link to="/dashboard" className="hover:text-quiz-accent transition-colors">
                  Dashboard
                </Link>
              )}
              <Button variant="outline" onClick={handleLogout} className="text-white border-white hover:bg-white hover:text-quiz-primary">
                Logout
              </Button>
            </>
          ) : (
            <Link to="/login">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-quiz-primary">
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-quiz-primary py-2 px-4 mt-2 animate-fade-in">
          <Link to="/" className="block py-2 hover:text-quiz-accent transition-colors">
            Home
          </Link>
          
          {user ? (
            <>
              {user.role === "PROFESSOR" && (
                <Link to="/dashboard" className="block py-2 hover:text-quiz-accent transition-colors">
                  Dashboard
                </Link>
              )}
              <button
                onClick={handleLogout}
                className="block w-full text-left py-2 hover:text-quiz-accent transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="block py-2 hover:text-quiz-accent transition-colors">
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};
