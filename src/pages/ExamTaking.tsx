
import { QuestionCard } from "@/components/QuestionCard";
import { StudentRegistration } from "@/components/StudentRegistration";
import { api } from "@/services/api";
import { Exam, Student, StudentResponse } from "@/types";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { useToast } from "@/components/ui/use-toast";

const ExamTaking = () => {
  const { examId } = useParams<{ examId: string }>();
  const [exam, setExam] = useState<Exam | null>(null);
  const [student, setStudent] = useState<Student | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<StudentResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [examCompleted, setExamCompleted] = useState(false);
  
  const navigate = useNavigate();
  const { toast } = useToast();
  
  useEffect(() => {
    const fetchExam = async () => {
      try {
        setIsLoading(true);
        const examData = await api.exams.getByAccessLink(examId!);
        setExam(examData);
      } catch (error) {
        toast({
          title: "Error",
          description: "Exam not found",
          variant: "destructive",
        });
        navigate("/");
      } finally {
        setIsLoading(false);
      }
    };
    
    if (examId) {
      fetchExam();
    }
  }, [examId, navigate, toast]);
  
  const handleStudentRegistration = async (email: string) => {
    try {
      setIsLoading(true);
      const studentData = await api.students.register(email, exam!.id!);
      setStudent(studentData);
      setIsLoading(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to register for the exam",
        variant: "destructive",
      });
    }
  };
  
  const handleAnswerSubmit = async (response: Omit<StudentResponse, "id" | "isCorrect" | "submittedAt">) => {
    try {
      const savedResponse = await api.responses.submit(response);
      setResponses([...responses, savedResponse]);
      
      if (currentQuestionIndex === exam!.questions.length - 1) {
        // Last question, calculate results
        await calculateResults();
      } else {
        // Move to next question
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit answer",
        variant: "destructive",
      });
    }
  };
  
  const calculateResults = async () => {
    try {
      await api.results.calculate(student!.id!, exam!.id!);
      setExamCompleted(true);
      navigate(`/exam-results/${exam!.id}?studentId=${student!.id}`);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to calculate results",
        variant: "destructive",
      });
    }
  };
  
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
  
  if (!exam) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <div className="flex-1 flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-quiz-primary mb-2">Exam Not Found</h1>
            <p className="text-gray-600 mb-4">The exam you're looking for doesn't exist or has expired.</p>
            <button
              onClick={() => navigate("/")}
              className="text-quiz-secondary hover:underline"
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  if (!student) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-1 container mx-auto py-8 px-4 flex items-center justify-center">
          <StudentRegistration exam={exam} onRegister={handleStudentRegistration} />
        </main>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-quiz-primary">{exam.name}</h1>
          <div className="flex justify-between items-center mt-2">
            <p className="text-gray-600">
              Question {currentQuestionIndex + 1} of {exam.questions.length}
            </p>
            <p className="text-gray-600">
              Student: {student.email}
            </p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
            <div
              className="bg-quiz-secondary h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / exam.questions.length) * 100}%` }}
            ></div>
          </div>
        </div>
        
        <QuestionCard
          question={exam.questions[currentQuestionIndex]}
          onAnswerSubmit={handleAnswerSubmit}
          studentId={student.id!}
          examId={exam.id!}
          isLastQuestion={currentQuestionIndex === exam.questions.length - 1}
        />
      </main>
    </div>
  );
};

export default ExamTaking;
