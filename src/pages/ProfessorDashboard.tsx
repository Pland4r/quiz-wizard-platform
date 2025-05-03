
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Navbar } from "@/components/Navbar";
import { useToast } from "@/components/ui/use-toast";
import { api } from "@/services/api";
import { Exam, User } from "@/types";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Plus, Search, Edit, BarChart, Trash2, Copy } from "lucide-react";

const ProfessorDashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [exams, setExams] = useState<Exam[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();
  
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    
    if (!storedUser) {
      navigate("/login");
      return;
    }
    
    const parsedUser = JSON.parse(storedUser);
    
    if (parsedUser.role !== "PROFESSOR") {
      navigate("/");
      return;
    }
    
    setUser(parsedUser);
    
    const fetchExams = async () => {
      try {
        const examData = await api.exams.getAll(parsedUser.id);
        setExams(examData);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to load exams",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchExams();
  }, [navigate, toast]);
  
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };
  
  const handleDeleteExam = async (examId: string) => {
    try {
      await api.exams.delete(examId);
      setExams(exams.filter(exam => exam.id !== examId));
      toast({
        title: "Success",
        description: "Exam deleted successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete exam",
        variant: "destructive",
      });
    }
  };
  
  const filteredExams = exams.filter(exam => 
    exam.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar user={user} onLogout={handleLogout} />
      
      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Professor Dashboard</h1>
            <p className="text-gray-600">
              Manage your exams and view student results
            </p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <Link to="/create-exam">
              <Button className="bg-quiz-primary hover:bg-quiz-primary/90 rounded-xl">
                <Plus className="h-5 w-5 mr-2" />
                Create New Exam
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
          <div className="relative w-full md:w-auto md:flex-1 max-w-md">
            <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search exams..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 rounded-xl"
            />
          </div>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-quiz-primary"></div>
          </div>
        ) : filteredExams.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExams.map((exam) => (
              <Card key={exam.id} className="hover:shadow-lg transition-shadow rounded-xl overflow-hidden border-gray-100">
                <CardHeader className="bg-gradient-to-r from-quiz-primary to-quiz-secondary text-white rounded-t-xl">
                  <CardTitle className="text-xl">{exam.name}</CardTitle>
                  <CardDescription className="text-white/80">
                    {exam.questions.length} {exam.questions.length === 1 ? 'Question' : 'Questions'}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex flex-col space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Access Link</h4>
                      <div className="flex items-center mt-1">
                        <code className="bg-gray-50 px-3 py-1.5 rounded-lg text-sm flex-1 overflow-x-auto text-gray-700 border border-gray-200">
                          {exam.accessLink}
                        </code>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            navigator.clipboard.writeText(`${window.location.origin}/exam/${exam.accessLink}`);
                            toast({
                              title: "Link Copied",
                              description: "Exam link copied to clipboard",
                            });
                          }}
                          className="ml-2 text-gray-600 hover:text-quiz-primary hover:bg-quiz-primary/10"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <Button
                        variant="outline"
                        onClick={() => navigate(`/edit-exam/${exam.id}`)}
                        className="flex items-center justify-center gap-2 border-gray-200 text-gray-700 hover:border-quiz-primary hover:text-quiz-primary rounded-lg"
                      >
                        <Edit className="h-4 w-4" />
                        <span>Edit</span>
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => navigate(`/view-results/${exam.id}`)}
                        className="flex items-center justify-center gap-2 border-gray-200 text-gray-700 hover:border-quiz-primary hover:text-quiz-primary rounded-lg"
                      >
                        <BarChart className="h-4 w-4" />
                        <span>Results</span>
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => handleDeleteExam(exam.id!)}
                        className="flex items-center justify-center gap-2 border-gray-200 text-red-500 hover:border-red-300 hover:bg-red-50 rounded-lg"
                      >
                        <Trash2 className="h-4 w-4" />
                        <span>Delete</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="glass-card text-center py-10 px-6 rounded-2xl">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-6">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-2">No Exams Found</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              {searchTerm ? "No exams match your search criteria. Try adjusting your search term." : "You haven't created any exams yet. Get started by creating your first exam."}
            </p>
            {!searchTerm && (
              <Link to="/create-exam">
                <Button className="bg-quiz-primary hover:bg-quiz-primary/90 rounded-xl">
                  <Plus className="mr-2 h-4 w-4" />
                  Create Your First Exam
                </Button>
              </Link>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default ProfessorDashboard;
