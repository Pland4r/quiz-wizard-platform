import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
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
                  <img
                    src="https://images.unsplash.com/photo-1488190528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Student taking an online exam"
                    className="w-full rounded-3xl shadow-2xl object-cover aspect-[4/3]"
                  />
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
                      {[
                        { icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" },
                        { icon: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" },
                        { icon: "M12 2C6.477 2 2 6.484 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" },
                        { icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" },
                      ].map((social, index) => (
                        <a 
                          key={index}
                          href="#" 
                          className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 transition-colors hover:bg-quiz-primary hover:text-white"
                        >
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d={social.icon} clipRule="evenodd" />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-gradient-to-tr from-gray-900 to-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <span className="font-heading font-bold text-xl">Quiz Wizard</span>
              </div>
              <p className="text-white/70 mb-6">
                Revolutionizing the way educators create and administer exams with our smart examination platform.
              </p>
              <div className="flex space-x-4">
                {[
                  "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
                  "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
                  "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                ].map((icon, index) => (
                  <a key={index} href="#" className="text-white/60 hover:text-white transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d={icon} clipRule="evenodd" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { label: "Home", path: "/" },
                  { label: "About", path: "#about" },
                  { label: "Take Exam", path: "#student-section" },
                  { label: "Teacher Login", path: "/login" },
                  { label: "Contact", path: "#contact" }
                ].map((link, index) => (
                  <li key={index}>
                    <a href={link.path} className="text-white/70 hover:text-white transition-colors inline-flex items-center">
                      <ArrowRight className="h-3 w-3 mr-2" /> {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-6">Features</h3>
              <ul className="space-y-3">
                {[
                  "Exam Creation",
                  "Timed Questions",
                  "Automatic Grading",
                  "Analytics",
                  "Student Reports"
                ].map((feature, index) => (
                  <li key={index}>
                    <a href="#" className="text-white/70 hover:text-white transition-colors inline-flex items-center">
                      <ArrowRight className="h-3 w-3 mr-2" /> {feature}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-6">Legal</h3>
              <ul className="space-y-3">
                {[
                  "Privacy Policy",
                  "Terms of Service",
                  "Cookie Policy",
                  "GDPR Compliance",
                  "Accessibility"
                ].map((legal, index) => (
                  <li key={index}>
                    <a href="#" className="text-white/70 hover:text-white transition-colors inline-flex items-center">
                      <ArrowRight className="h-3 w-3 mr-2" /> {legal}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-white/60">
              © {new Date().getFullYear()} Quiz Wizard. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
