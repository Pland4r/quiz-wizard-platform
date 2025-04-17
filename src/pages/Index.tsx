
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  const [examCode, setExamCode] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleExamAccess = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!examCode.trim()) {
      toast({
        title: "Error",
        description: "Please enter an exam code",
        variant: "destructive",
      });
      return;
    }
    
    navigate(`/exam/${examCode}`);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-quiz-primary text-white py-20 px-4">
          <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Create and Take Exams with <span className="text-quiz-accent">Ease</span>
              </h1>
              <p className="text-lg mb-8 max-w-xl">
                Quiz Wizard is a powerful platform for professors to create online exams and for students to take them seamlessly.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/login">
                  <Button className="w-full sm:w-auto bg-white text-quiz-primary hover:bg-gray-100">
                    Teacher Login
                  </Button>
                </Link>
                <Link to="#student-section">
                  <Button variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-quiz-primary">
                    Take an Exam
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <img
                src="/placeholder.svg"
                alt="Quiz Illustration"
                className="w-full max-w-lg mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
        
        {/* Features */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-quiz-primary">
              Powerful Features for Educators
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="quiz-card text-center p-6">
                <div className="w-16 h-16 bg-quiz-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Easy Exam Creation</h3>
                <p className="text-gray-600">
                  Create exams with multiple types of questions, add images, and set time limits.
                </p>
              </div>
              
              <div className="quiz-card text-center p-6">
                <div className="w-16 h-16 bg-quiz-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Timed Questions</h3>
                <p className="text-gray-600">
                  Set specific time limits for each question to better assess student knowledge.
                </p>
              </div>
              
              <div className="quiz-card text-center p-6">
                <div className="w-16 h-16 bg-quiz-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Automatic Grading</h3>
                <p className="text-gray-600">
                  Responses are automatically graded, saving you time and providing immediate feedback.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Student Section */}
        <section id="student-section" className="py-16 px-4 bg-gray-100">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-8 text-quiz-primary">
              Take an Exam
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
              Enter the exam code provided by your professor to access your exam.
            </p>
            
            <form onSubmit={handleExamAccess} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0">
                <Input
                  value={examCode}
                  onChange={(e) => setExamCode(e.target.value)}
                  placeholder="Enter exam code"
                  className="sm:rounded-r-none"
                />
                <Button 
                  type="submit" 
                  className="bg-quiz-secondary hover:bg-quiz-secondary/90 sm:rounded-l-none"
                >
                  Access Exam
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>
      
      <footer className="bg-quiz-primary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Quiz Wizard</h3>
              <p className="text-sm mt-1">© 2025 Quiz Wizard. All rights reserved.</p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="hover:text-quiz-accent transition-colors">
                About
              </a>
              <a href="#" className="hover:text-quiz-accent transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-quiz-accent transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-quiz-accent transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
