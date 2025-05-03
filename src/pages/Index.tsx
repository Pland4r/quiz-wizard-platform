
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { 
  CheckCircle2, 
  BookOpen, 
  Clock, 
  Award, 
  ChevronDown, 
  ArrowRight,
  BarChart3,
  Users,
  Shield,
  Star,
  Sparkles,
  GraduationCap,
  MessagesSquare
} from "lucide-react";

const Index = () => {
  const [examCode, setExamCode] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);
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

  const scrollToStudentSection = () => {
    const studentSection = document.getElementById('student-section');
    if (studentSection) {
      studentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-quiz-primary/5 to-quiz-secondary/10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-quiz-primary/10 to-transparent pointer-events-none"></div>
          
          <div className="container mx-auto max-w-6xl px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-quiz-primary/10 text-quiz-primary rounded-full text-sm font-medium">
                  <Sparkles size={16} />
                  <span>Better Way to Assess Knowledge</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Create and Take Exams with 
                  <span className="relative">
                    <span className="relative z-10 ml-2 gradient-text">Intelligence</span>
                    <span className="absolute bottom-1 left-0 w-full h-3 bg-quiz-secondary/20 -rotate-1 rounded z-0"></span>
                  </span>
                </h1>
                
                <p className="text-lg text-gray-600 max-w-xl">
                  A modern examination platform for educators and students, designed to make testing 
                  seamless, secure, and insightful.
                </p>
                
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-2">
                  <Link to="/login">
                    <Button 
                      size="lg" 
                      className="w-full sm:w-auto bg-quiz-primary hover:bg-quiz-primary/90 shadow-lg shadow-quiz-primary/20 rounded-xl"
                    >
                      Teacher Login
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="w-full sm:w-auto border-quiz-primary text-quiz-primary hover:bg-quiz-primary/10 rounded-xl"
                    onClick={scrollToStudentSection}
                  >
                    Take an Exam
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="relative animate-slide-in">
                <div className="absolute -z-10 top-1/4 left-1/4 w-1/2 h-1/2 bg-quiz-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute -z-10 bottom-1/4 right-1/4 w-1/2 h-1/2 bg-quiz-secondary/20 rounded-full blur-3xl"></div>
                
                <div className="relative">
                  {/* Updated image implementation */}
                  <div className="w-full h-[320px] md:h-[380px] rounded-3xl shadow-2xl overflow-hidden bg-gray-100 border border-gray-200">
                    {!imageLoaded && (
                      <div className="w-full h-full flex items-center justify-center bg-gray-100 animate-pulse">
                        <BookOpen className="h-16 w-16 text-gray-300" />
                      </div>
                    )}
                    <img
                      src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=900&q=80"
                      alt="Student taking an online exam"
                      className={`w-full h-full object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                      loading="eager"
                      onLoad={() => setImageLoaded(true)}
                      onError={(e) => {
                        console.error("Image failed to load");
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=900&q=80";
                      }}
                    />
                  </div>
                  
                  <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-4 shadow-xl border border-gray-100 rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                        <CheckCircle2 size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Results Available</p>
                        <p className="text-xs text-gray-500">Instant feedback</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-6 -right-6 rounded-2xl bg-white p-4 shadow-xl border border-gray-100 -rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-quiz-primary/10 rounded-full flex items-center justify-center text-quiz-primary">
                        <Clock size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Time Saving</p>
                        <p className="text-xs text-gray-500">Automatic grading</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        </section>
        
        {/* Features */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-quiz-primary/10 text-quiz-primary rounded-full text-sm font-medium mb-4">
                <GraduationCap size={16} />
                <span>Why Choose Us</span>
              </div>
              <h2 className="section-title max-w-2xl mx-auto mb-4">
                Powerful Features for Modern Education
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our platform offers everything educators need to create, manage, and analyze exams effectively.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Easy Exam Creation",
                  description: "Create exams with multiple question types in minutes with our intuitive interface.",
                  icon: BookOpen
                },
                {
                  title: "Timed Assessments",
                  description: "Set time limits for individual questions or entire exams to better assess knowledge.",
                  icon: Clock
                },
                {
                  title: "Advanced Analytics",
                  description: "Gain insights with visual reports on student performance and knowledge gaps.",
                  icon: BarChart3
                },
                {
                  title: "Automatic Grading",
                  description: "Save time with instant automated grading and feedback for students.",
                  icon: Award
                }
              ].map((feature, index) => (
                <div key={index} className="group glass-card hover-lift p-6 transition-all duration-300 hover:bg-gradient-to-br hover:from-white hover:to-gray-50">
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-quiz-primary to-quiz-secondary rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="absolute h-16 w-16 bg-quiz-primary/20 rounded-2xl blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-quiz-primary transition-colors">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 bg-gradient-to-br from-quiz-primary/5 to-quiz-secondary/5 rounded-3xl p-8 border border-gray-100 shadow-sm">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Ready to transform your assessment process?</h3>
                  <p className="text-gray-600 mb-6">Join thousands of educators who have already streamlined their examination workflow.</p>
                  <Link to="/login">
                    <Button className="bg-quiz-primary hover:bg-quiz-primary/90 rounded-xl">
                      Get Started Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { count: "98%", label: "Satisfaction rate" },
                    { count: "15min", label: "Average setup time" },
                    { count: "1000+", label: "Active educators" },
                    { count: "24/7", label: "Customer support" }
                  ].map((stat, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
                      <p className="text-2xl font-bold text-quiz-primary">{stat.count}</p>
                      <p className="text-gray-600 text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-quiz-primary/10 text-quiz-primary rounded-full text-sm font-medium mb-4">
                <MessagesSquare size={16} />
                <span>Simple Process</span>
              </div>
              <h2 className="section-title max-w-2xl mx-auto mb-4">
                How Quiz Wizard Works
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our streamlined approach makes online examinations easy for both educators and students.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-transparent via-quiz-primary/30 to-transparent"></div>
              
              {[
                {
                  step: 1,
                  title: "Create an Exam",
                  description: "Design your exam with multiple question types, set time limits, and customize settings.",
                  forWho: "For Professors",
                  cta: "Get started",
                  link: "/login",
                  icon: BookOpen
                },
                {
                  step: 2,
                  title: "Share Access Code",
                  description: "Generate and share a unique exam code with your students through any channel.",
                  forWho: "For Professors",
                  cta: "Simple one-click sharing",
                  link: null,
                  icon: Users
                },
                {
                  step: 3,
                  title: "Take the Exam",
                  description: "Students enter the code, register with their details, and complete the questions.",
                  forWho: "For Students",
                  cta: "Enter exam code",
                  link: "#student-section",
                  icon: Shield
                }
              ].map((process, index) => (
                <div key={index} className="glass-card hover-lift p-8 relative">
                  <div className="absolute -top-6 left-6 w-12 h-12 bg-gradient-to-br from-quiz-primary to-quiz-secondary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {process.step}
                  </div>
                  
                  <div className="mt-6">
                    <div className="w-14 h-14 bg-quiz-primary/10 rounded-xl flex items-center justify-center mb-6">
                      <process.icon className="h-7 w-7 text-quiz-primary" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                    <p className="text-gray-600 mb-6">{process.description}</p>
                    
                    <div className="bg-white/70 p-4 rounded-xl mt-4 border border-white/80 shadow-sm">
                      <div className="text-sm text-gray-500">{process.forWho}</div>
                      {process.link ? (
                        <Link 
                          to={process.link} 
                          className="text-quiz-primary font-medium flex items-center mt-1 hover:underline"
                          onClick={process.link === "#student-section" ? scrollToStudentSection : undefined}
                        >
                          {process.cta}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      ) : (
                        <div className="text-quiz-primary font-medium flex items-center mt-1">
                          {process.cta}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Student Section */}
        <section id="student-section" className="relative py-24 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-quiz-primary to-quiz-secondary pointer-events-none"></div>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}></div>
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Take an Exam?
                </h2>
                <p className="text-white/80 mb-8 max-w-md">
                  Enter the exam code provided by your professor to begin. Our secure platform ensures a fair and efficient assessment experience.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: Shield, title: "Secure Testing", description: "Protected environment for academic integrity" },
                    { icon: Clock, title: "Timed Sessions", description: "Clear countdown for each question or exam" }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-white/20 rounded-lg p-2 mt-1">
                        <feature.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium text-white">{feature.title}</h3>
                        <p className="text-white/70 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <form onSubmit={handleExamAccess} className="bg-white rounded-3xl shadow-2xl p-8 border border-white/20 backdrop-blur-sm">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-quiz-primary/10 rounded-full flex items-center justify-center">
                      <BookOpen className="h-8 w-8 text-quiz-primary" />
                    </div>
                  </div>
                  <h3 className="text-gray-900 text-xl font-semibold mb-6 text-center">
                    Access Your Exam
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="examCode" className="block text-gray-700 font-medium mb-1">
                        Exam Code
                      </label>
                      <Input
                        id="examCode"
                        value={examCode}
                        onChange={(e) => setExamCode(e.target.value)}
                        placeholder="Enter the code from your professor"
                        className="w-full bg-gray-50 border-gray-200 focus:border-quiz-primary"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-quiz-primary hover:bg-quiz-primary/90 rounded-xl font-medium shadow-lg shadow-quiz-primary/20"
                    >
                      Start Exam
                    </Button>
                    <p className="text-center text-sm text-gray-500 mt-2">
                      First time? You'll be prompted to register.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-quiz-primary/10 text-quiz-primary rounded-full text-sm font-medium mb-4">
                <Star size={16} />
                <span>Success Stories</span>
              </div>
              <h2 className="section-title max-w-2xl mx-auto mb-4">
                What Educators Are Saying
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Hear from professors who have transformed their assessment process with our platform.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Quiz Wizard has revolutionized how I administer exams. The automatic grading saves me hours of work, and my students love the intuitive interface.",
                  name: "Dr. James Peterson",
                  role: "Biology Professor",
                  initials: "JP"
                },
                {
                  quote: "The ability to set timed questions has significantly improved how I assess my students' knowledge. The analytics provide valuable insights into areas where students are struggling.",
                  name: "Sarah Mitchell",
                  role: "Mathematics Professor",
                  initials: "SM"
                },
                {
                  quote: "Quiz Wizard made remote learning during the pandemic much easier. The platform is reliable, and the support team is responsive to any questions.",
                  name: "Dr. Robert Kim",
                  role: "Computer Science Professor",
                  initials: "RK"
                }
              ].map((testimonial, index) => (
                <div key={index} className="glass-card hover-lift relative">
                  <div className="absolute top-0 right-0 bg-gradient-to-bl from-quiz-primary/10 to-transparent w-32 h-32 rounded-tr-xl rounded-bl-3xl -z-10"></div>
                  
                  <div className="flex items-center space-x-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-quiz-primary/20 to-quiz-secondary/20 rounded-full flex items-center justify-center">
                      <span className="text-quiz-primary font-semibold">{testimonial.initials}</span>
                    </div>
                    <div className="ml-3">
                      <div className="font-medium text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section id="about" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-quiz-primary/10 text-quiz-primary rounded-full text-sm font-medium mb-4">
                <MessagesSquare size={16} />
                <span>FAQ</span>
              </div>
              <h2 className="section-title max-w-2xl mx-auto mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about our platform.
              </p>
            </div>
            
            <div className="space-y-5">
              {[
                {
                  question: "How do I create an exam?",
                  answer: "After logging in as a professor, navigate to the \"Create Exam\" page. You can add questions, set time limits, and customize other exam settings through our intuitive interface."
                },
                {
                  question: "Can students use notes during exams?",
                  answer: "This is entirely up to the professor. Quiz Wizard provides the platform, but professors set the rules for their exams and communicate them to students."
                },
                {
                  question: "How are exams graded?",
                  answer: "Multiple-choice questions are automatically graded. For direct answer questions, the system compares student responses with the correct answer, allowing for minor variations."
                },
                {
                  question: "Can I edit an exam after creating it?",
                  answer: "Yes, you can edit exams at any time before students begin taking them. Once a student has started an exam, you cannot edit it to maintain fairness."
                }
              ].map((faq, index) => (
                <div key={index} className="glass-card hover-lift p-6 transition-all duration-300">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">Still have questions? We're here to help.</p>
              <a href="#contact" className="inline-flex items-center text-quiz-primary font-medium hover:underline">
                Contact our support team
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-quiz-primary/10 text-quiz-primary rounded-full text-sm font-medium mb-4">
                <MessagesSquare size={16} />
                <span>Get In Touch</span>
              </div>
              <h2 className="section-title max-w-2xl mx-auto mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Have questions or feedback? We'd love to hear from you.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="glass-card hover-lift p-8">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <MessagesSquare className="mr-2 h-5 w-5 text-quiz-primary" />
                  Send Us a Message
                </h3>
                <form className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="w-full rounded-xl bg-gray-50 border-gray-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="w-full rounded-xl bg-gray-50 border-gray-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Your message"
                      className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-quiz-primary focus:border-transparent resize-none"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-quiz-primary hover:bg-quiz-primary/90 rounded-xl shadow-lg shadow-quiz-primary/10">
                    Send Message
                  </Button>
                </form>
              </div>
              
              <div className="glass-card hover-lift p-8">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <Users className="mr-2 h-5 w-5 text-quiz-primary" />
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "Email",
                      value: "support@quizwizard.com",
                      link: "mailto:support@quizwizard.com"
                    },
                    {
                      title: "Phone",
                      value: "+1 (555) 123-4567",
                      link: "tel:+15551234567"
                    },
                    {
                      title: "Address",
                      value: "123 Education Avenue, Suite 456, Knowledge City, KN 12345",
                      link: null
                    },
                    {
                      title: "Office Hours",
                      value: "Monday - Friday: 9:00 AM - 5:00 PM\nSaturday - Sunday: Closed",
                      link: null
                    }
                  ].map((contact, index) => (
                    <div key={index}>
                      <div className="font-medium text-gray-900 mb-2">{contact.title}</div>
                      {contact.link ? (
                        <a href={contact.link} className="text-quiz-primary hover:underline flex items-center">
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 whitespace-pre-line">
                          {contact.value}
                        </p>
                      )}
                    </div>
                  ))}
                  
                  <div className="pt-6 border-t border-gray-100">
                    <div className="font-medium text-gray-900 mb-3">Follow Us</div>
                    <div className="flex space-x-4">
                      {/* Social media icons - simplified to avoid SVG string issues */}
                      <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-quiz-primary/10 hover:text-quiz-primary transition-colors">
                        <span className="sr-only">Facebook</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-quiz-primary/10 hover:text-quiz-primary transition-colors">
                        <span className="sr-only">Twitter</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723 10.054 10.054 0 0 1-3.127 1.184 4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z"></path>
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-quiz-primary/10 hover:text-quiz-primary transition-colors">
                        <span className="sr-only">LinkedIn</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6S.02 4.881.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM5 8H0v16h5V8zm2.982 0h4.95v2.215h.07c.689-1.313 2.39-2.689 4.911-2.689 5.227 0 6.186 3.422 6.186 7.883v9.083h-5.026v-8.061c0-1.846-.038-4.228-2.591-4.228-2.594 0-2.994 2.013-2.994 4.087v8.202H7.982V8z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
