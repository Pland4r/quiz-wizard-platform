
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Exam, ExamResult } from "@/types";
import { api } from "@/services/api";

const ViewResults = () => {
  const { examId } = useParams<{ examId: string }>();
  const [exam, setExam] = useState<Exam | null>(null);
  const [results, setResults] = useState<ExamResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const fetchExamResults = async () => {
      if (!examId) return;
      
      try {
        setIsLoading(true);
        
        // Get the logged-in professor's ID from localStorage
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        if (!user.id) {
          throw new Error("Not authenticated");
        }
        
        // Fetch exam details
        const examData = await api.exams.getById(examId);
        
        // Check if the exam belongs to the logged-in professor
        if (examData.professorId !== user.id) {
          throw new Error("Unauthorized to view these results");
        }
        
        setExam(examData);
        
        // Fetch results for this exam and professor
        const resultsData = await api.results.getByExamAndProfessor(examId, user.id);
        setResults(resultsData);
        
        setError(null);
      } catch (err) {
        console.error("Error fetching exam results:", err);
        let errorMessage = "Failed to load exam results. Please try again later.";
        if (err.message === "Unauthorized to view these results") {
          errorMessage = "You are not authorized to view these results.";
        }
        setError(errorMessage);
        toast({
          title: "Error",
          description: errorMessage,
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchExamResults();
  }, [examId, toast]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <div className="flex-1 flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-quiz-primary"></div>
        </div>
      </div>
    );
  }

  if (error || !exam) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <div className="flex-1 flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-quiz-primary mb-2">Error Loading Results</h1>
            <p className="text-gray-600 mb-4">{error || "Exam not found"}</p>
            <Button
              onClick={() => navigate("/")}
              className="bg-quiz-primary hover:bg-quiz-primary/90"
            >
              Return to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-quiz-primary">{exam.name} Results</h1>
          <p className="text-gray-600 mt-1">{exam.description}</p>
        </div>
        
        {results.length > 0 ? (
          <div className="space-y-6">
            {results.map((result, index) => (
              <Card key={index} className="shadow-md">
                <CardHeader className="bg-quiz-primary text-white">
                  <CardTitle className="flex justify-between items-center">
                    <span>Student: {result.studentId}</span>
                    <span className="text-xl">
                      Score: {Math.round(result.percentage)}%
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Completed on</p>
                      <p className="font-medium">
                        {new Date(result.completedAt).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Score</p>
                      <p className="font-medium">
                        {result.totalScore} / {result.maxScore} correct answers
                      </p>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => navigate(`/exam-results/${exam.id}?studentId=${result.studentId}`)}
                    className="w-full bg-quiz-primary hover:bg-quiz-primary/90"
                  >
                    View Detailed Results
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">No Results Found</h2>
            <p className="text-gray-500 mb-6">No students have completed this exam yet.</p>
            <Button
              onClick={() => navigate("/")}
              className="bg-quiz-primary hover:bg-quiz-primary/90"
            >
              Return to Home
            </Button>
          </div>
        )}
      </main>
    </div>
  );
};

export default ViewResults;
