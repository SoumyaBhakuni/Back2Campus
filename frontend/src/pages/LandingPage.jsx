import { useState, useEffect } from "react";
import { 
  Users, 
  Briefcase, 
  MessageSquare, 
  Calendar, 
  GraduationCap, 
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Clock,
  Award,
  Menu,
  X,
  ArrowRight,
  Star,
  Globe,
  Mail,
  MapPin,
  Twitter,
  Linkedin,
  Facebook,
  Github
} from "lucide-react";

export default function LandingPage() {
  // Feature carousel state
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const features = [
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: "Alumni Directory",
      description: "Search and connect with alumni based on industry, skills, or location to build your professional network."
    },
    {
      icon: <BookOpen className="w-12 h-12 text-indigo-500" />,
      title: "Mentorship Matching",
      description: "Get paired with mentors who match your career interests and technical skills through our intelligent matching algorithm."
    },
    {
      icon: <Briefcase className="w-12 h-12 text-sky-500" />,
      title: "Exclusive Job Board",
      description: "Access internships and job opportunities posted specifically for our technical education community."
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-teal-500" />,
      title: "Technical Forums",
      description: "Participate in discussions on emerging technologies, troubleshooting, and industry trends."
    },
    {
      icon: <Calendar className="w-12 h-12 text-violet-500" />,
      title: "Events & Webinars",
      description: "Attend virtual and in-person networking events, technical workshops, and alumni reunions."
    }
  ];

  // Auto-play feature carousel
  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        setActiveFeatureIndex((prev) => (prev + 1) % features.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, features.length]);

  const nextFeature = () => {
    setAutoPlay(false);
    setActiveFeatureIndex((prev) => (prev + 1) % features.length);
  };

  const prevFeature = () => {
    setAutoPlay(false);
    setActiveFeatureIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Computer Science Student",
      image: "/api/placeholder/80/80",
      text: "Through Back2Campus, I found a mentor who helped me land my first internship at a leading tech company. The guidance was invaluable!"
    },
    {
      name: "Sarah Chen",
      role: "Software Engineer & Alumni",
      image: "/api/placeholder/80/80",
      text: "As an alumna, I love giving back to my university community. I've mentored three students so far and even hired one for my team!"
    },
    {
      name: "Dr. Michael Rivera",
      role: "Department Chair, Engineering",
      image: "/api/placeholder/80/80",
      text: "Back2Campus has transformed how our department maintains relationships with alumni. The mentorship program has significantly improved student outcomes."
    }
  ];

  // Time-based greeting
  const [greeting, setGreeting] = useState("");
  
  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) setGreeting("Good morning");
      else if (hour < 18) setGreeting("Good afternoon");
      else setGreeting("Good evening");
    };
    
    updateGreeting();
    const interval = setInterval(updateGreeting, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Back2Campus</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
                <div className="ml-4 text-gray-600 flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span className="text-sm">{greeting}</span>
              </div>
              <div className="flex items-center space-x-3">
                <button className="group relative px-5 py-2.5 overflow-hidden rounded-lg bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                  <span className="relative z-10 font-medium">Log In</span>
                </button>
                <button className="group relative px-5 py-2.5 overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                  <span className="relative z-10 font-medium">Sign Up</span>
                </button>
              </div>
            </div>
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 p-2"
              >
                {mobileMenuOpen ? 
                  <X className="h-6 w-6" /> : 
                  <Menu className="h-6 w-6" />
                }
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 sm:px-6 lg:px-8 animate-fadeIn">
            <div className="space-y-3">
              <div className="pt-4 pb-2 border-t border-gray-100">
                <button className="w-full mb-3 py-2.5 px-5 rounded-lg bg-white border-2 border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition">Log In</button>
                <button className="w-full py-2.5 px-5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:from-blue-700 hover:to-indigo-700 transition">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600 py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-0 top-0 transform -translate-x-1/4 -translate-y-1/4">
            <div className="w-96 h-96 rounded-full bg-white"></div>
          </div>
          <div className="absolute right-0 bottom-0 transform translate-x-1/3 translate-y-1/3">
            <div className="w-96 h-96 rounded-full bg-white"></div>
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Connect, Learn, <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-300">Grow</span>
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
            Bridging the gap between technical education and industry. Connect with alumni for mentorship, career guidance, and more.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="group relative px-8 py-4 rounded-lg bg-white text-blue-600 font-medium hover:shadow-lg transition-shadow">
              <div className="flex items-center">
                Get Started 
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition" />
              </div>
            </button>
            <button className="group relative px-8 py-4 rounded-lg bg-blue-700 bg-opacity-40 backdrop-blur-sm text-white font-medium border border-white border-opacity-30 hover:bg-opacity-50 transition">
              Learn More
            </button>
          </div>
        </div>
      </header>

      {/* Enhanced About Us */}
      <section id="about" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-bl from-blue-100 to-transparent"></div>
          <div className="absolute left-0 bottom-0 w-1/3 h-full bg-gradient-to-tr from-indigo-100 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
  <div className="inline-block">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 relative">
      About Us
      <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
    </h2>
  </div>
  <div className="mt-8 text-lg text-gray-600 px-4 text-left">
    <p className="mb-4">
      Back2Campus was founded with a clear mission: to bridge the gap between educational institutions and their alumni by creating a vibrant, purpose-driven community.
    </p>
    <p className="mb-4">
      We believe that the most valuable resource any academic institution has is its people—past and present. Our platform empowers students to connect with alumni who have walked the same halls, faced similar challenges, and carved unique paths in the technical world.
    </p>
    <p>
      By facilitating mentorship, industry exposure, and collaborative learning opportunities, Back2Campus nurtures a culture of continuous growth, knowledge exchange, and mutual support. Whether you're a student seeking guidance or a graduate looking to give back, Back2Campus is where meaningful, lifelong professional relationships begin.
    </p>
  </div>
</div>


          {/* Mission and Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            <div className="group bg-gradient-to-br from-white to-blue-50 rounded-xl p-10 shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-400 to-blue-600"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To create a thriving ecosystem where technical education and industry expertise 
                converge, empowering the next generation of tech leaders through mentorship, 
                knowledge sharing, and community support.
              </p>
            </div>
            <div className="group bg-gradient-to-br from-white to-indigo-50 rounded-xl p-10 shadow-md hover:shadow-xl transition-all duration-300 border border-indigo-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To become the leading platform that bridges the gap between academic learning 
                and real-world application, creating pathways for career advancement and 
                innovation in the technical disciplines.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center">
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-4 rounded-lg mr-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div>
                  <p className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">5000+</p>
                  <p className="text-gray-500 font-medium">Active Alumni</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center">
                <div className="bg-gradient-to-br from-indigo-400 to-indigo-600 p-4 rounded-lg mr-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div>
                  <p className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">2000+</p>
                  <p className="text-gray-500 font-medium">Mentorships</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center">
                <div className="bg-gradient-to-br from-sky-400 to-sky-600 p-4 rounded-lg mr-6">
                  <Briefcase className="h-8 w-8 text-white" />
                </div>
                <div>
                  <p className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-teal-600">800+</p>
                  <p className="text-gray-500 font-medium">Job Opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Carousel */}
      <section id="features" className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute right-0 top-0 w-full h-full bg-gradient-to-bl from-blue-50 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 relative">
              Key Features
              <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
            </h2>
          </div>
          <p className="mt-8 text-xl text-gray-500 max-w-2xl mx-auto">
            Everything you need to foster meaningful professional connections
          </p>

          <div className="mt-16 relative">
            {/* Carousel Navigation */}
            <div className="absolute inset-0 flex items-center justify-between pointer-events-none z-10">
              <button 
                className="bg-white p-3 rounded-full shadow-lg pointer-events-auto flex items-center justify-center hover:bg-gray-50 transition-all duration-300 transform -translate-x-2 hover:scale-110"
                onClick={prevFeature}
              >
                <ChevronLeft className="w-6 h-6 text-blue-600" />
              </button>
              <button 
                className="bg-white p-3 rounded-full shadow-lg pointer-events-auto flex items-center justify-center hover:bg-gray-50 transition-all duration-300 transform translate-x-2 hover:scale-110"
                onClick={nextFeature}
              >
                <ChevronRight className="w-6 h-6 text-blue-600" />
              </button>
            </div>

            {/* Carousel Content */}
            <div className="overflow-hidden px-10">
              <div 
                className="transition-transform duration-500 ease-in-out flex"
                style={{ transform: `translateX(-${activeFeatureIndex * 100}%)` }}
              >
                {features.map((feature, index) => (
                  <div key={index} className="min-w-full">
                    <div className="max-w-lg mx-auto bg-white p-10 rounded-xl shadow-xl hover:shadow-2xl transition-shadow border border-gray-100">
                      <div className="mb-8 flex justify-center">
                        <div className="p-5 bg-gray-50 rounded-xl">
                          {feature.icon}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                      <p className="text-gray-600 text-lg">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex space-x-3 justify-center mt-10">
              {features.map((_, index) => (
                <button
                  key={index}
                  className={`h-3 w-10 rounded-full transition-all duration-300 ${
                    index === activeFeatureIndex ? "bg-blue-600" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={() => {
                    setAutoPlay(false);
                    setActiveFeatureIndex(index);
                  }}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 relative">
              Testimonials
              <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
            </h2>
          </div>
          <p className="mt-8 text-xl text-gray-500 max-w-2xl mx-auto">
            Hear from our community members
          </p>

          <div className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg border border-gray-200 hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-full blur-sm bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                    <img className="relative h-20 w-20 rounded-full border-2 border-white" src={testimonial.image} alt={testimonial.name} />
                  </div>
                </div>
                <div className="flex justify-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.text}"</p>
                <div className="text-center">
                  <p className="font-semibold text-gray-900 text-lg">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/3">
            <div className="w-96 h-96 rounded-full bg-white"></div>
          </div>
          <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/3">
            <div className="w-96 h-96 rounded-full bg-white"></div>
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Ready to Connect?</h2>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
            Join our growing community of students and alumni in technical disciplines
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="group relative px-8 py-4 rounded-lg bg-white text-blue-600 font-medium hover:shadow-lg transition-shadow">
              <div className="flex items-center">
                Sign Up Now
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition" />
              </div>
            </button>
            <button className="group relative px-8 py-4 rounded-lg bg-transparent border-2 border-white text-white font-medium hover:bg-white hover:bg-opacity-10 transition">
              Request Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <span className="ml-3 text-xl font-bold text-white">Back2Campus</span>
              </div>
              <p className="mt-4">Bridging the gap between technical education and industry.</p>
              <div className="mt-6 flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Team</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Connect</h3>
              <div className="mt-4">
                <p className="mb-4">Stay updated with our newsletter</p>
                <div className="flex">
                  <input type="email" placeholder="Enter your email" className="px-4 py-3 w-full text-gray-900 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-5 py-3 rounded-r-lg transition">
                    Subscribe
                  </button>
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-400 mr-3" />
                    <span>123 Tech Avenue, San Francisco, CA</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-400 mr-3" />
                    <span>contact@Back2Campus.edu</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-blue-400 mr-3" />
                    <span>www.Back2Campus.edu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
            <p>&copy; 2025 Back2Campus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}