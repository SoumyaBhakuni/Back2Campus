import React, { useState, useEffect } from "react";
import { Briefcase, Calendar, BookOpen, Code, Building, MessageCircle, ChevronLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../components/Footer";

// Dummy alumni data for demonstration - should match the data in Alumni.jsx
const alumniData = [
  { id: 1, name: "Alice Johnson", graduationYear: 2015, department: "CSE", jobRole: "Software Engineer", experienceLevel: "Mid-Level", techStack: "React, Node.js", organisation: "Google", availability: ["Open to Mentorship", "Open to Networking"] },
  { id: 2, name: "Bob Smith", graduationYear: 2018, department: "ECE", jobRole: "Data Scientist", experienceLevel: "Entry-Level", techStack: "Python, TensorFlow", organisation: "Amazon", availability: ["Open to Hiring"] },
  { id: 3, name: "Charlie Lee", graduationYear: 2016, department: "IT", jobRole: "Product Manager", experienceLevel: "Senior-Level", techStack: "Agile, UX", organisation: "Microsoft", availability: ["Open to Mentorship", "Available for Guest Lectures"] },
  { id: 4, name: "David Kim", graduationYear: 2017, department: "Mechanical", jobRole: "Robotics Engineer", experienceLevel: "Mid-Level", techStack: "ROS, C++", organisation: "Tesla", availability: ["Open to Mentorship"] },
  { id: 5, name: "Eva Green", graduationYear: 2014, department: "Civil", jobRole: "Project Manager", experienceLevel: "Senior-Level", techStack: "AutoCAD, PMP", organisation: "Siemens", availability: ["Available for Guest Lectures"] },
];

const AlumniProfile = () => {
  const { id } = useParams(); // Get the alumni ID from URL parameters
  const [alum, setAlum] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch with a small delay
    setTimeout(() => {
      const alumniId = parseInt(id);
      const foundAlumni = alumniData.find((a) => a.id === alumniId);
      setAlum(foundAlumni);
      setLoading(false);
    }, 300);
  }, [id]);

  const getExperienceBadgeColor = (level) => {
    switch (level) {
      case "Entry-Level":
        return "bg-emerald-100 text-emerald-800";
      case "Mid-Level":
        return "bg-blue-100 text-blue-800";
      case "Senior-Level":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Get initials for avatar
  const getInitials = (name) => {
    return name.split(' ').map(part => part[0]).join('');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar className="sticky top-0 z-50 shadow-sm" />
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-pulse text-xl">Loading profile...</div>
        </div>
        <Footer className="mt-auto shadow-inner" />
      </div>
    );
  }

  if (!alum) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar className="sticky top-0 z-50 shadow-sm" />
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="text-2xl font-bold text-red-500">Alumni Not Found</div>
          <p className="mt-2 text-gray-600">The profile you're looking for doesn't exist.</p>
          <Link to="/alumni" className="mt-4 bg-[#42b6b5] text-white px-4 py-2 rounded-lg">
            Back to Alumni List
          </Link>
        </div>
        <Footer className="mt-auto shadow-inner" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar - Fixed at top */}
      <Navbar className="sticky top-0 z-50 shadow-sm" />
      
      <div className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link to="/alumni" className="inline-flex items-center text-[#42b6b5] font-medium mb-6 hover:underline">
            <ChevronLeft size={20} className="mr-1" />
            Back to Alumni List
          </Link>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {/* Header */}
            <div className="bg-[#42b6b5] p-6 flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full text-[#42b6b5] font-bold text-2xl">
                  {getInitials(alum.name)}
                </div>
                <div className="ml-4">
                  <h1 className="text-2xl font-bold text-white">{alum.name}</h1>
                  <p className="text-white opacity-90">{alum.jobRole} at {alum.organisation}</p>
                </div>
              </div>
              <div className={`${getExperienceBadgeColor(alum.experienceLevel)} py-1 px-3 rounded-full text-sm font-medium`}>
                {alum.experienceLevel}
              </div>
            </div>

            {/* Main content */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left column - Professional Info */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Professional Information</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Briefcase className="text-[#42b6b5] mt-1 mr-3 flex-shrink-0" size={20} />
                      <div>
                        <span className="block text-sm text-gray-500">Current Role</span>
                        <span className="font-medium">{alum.jobRole}</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Building className="text-[#42b6b5] mt-1 mr-3 flex-shrink-0" size={20} />
                      <div>
                        <span className="block text-sm text-gray-500">Organization</span>
                        <span className="font-medium">{alum.organisation}</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Code className="text-[#42b6b5] mt-1 mr-3 flex-shrink-0" size={20} />
                      <div>
                        <span className="block text-sm text-gray-500">Tech Stack</span>
                        <div className="mt-1 flex flex-wrap gap-2">
                          {alum.techStack.split(', ').map((tech, index) => (
                            <span key={index} className="inline-block bg-gray-100 text-gray-800 px-2 py-1 rounded-md text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Right column - Academic Info */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Academic Background</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <BookOpen className="text-[#42b6b5] mt-1 mr-3 flex-shrink-0" size={20} />
                      <div>
                        <span className="block text-sm text-gray-500">Department</span>
                        <span className="font-medium">{alum.department}</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Calendar className="text-[#42b6b5] mt-1 mr-3 flex-shrink-0" size={20} />
                      <div>
                        <span className="block text-sm text-gray-500">Graduation Year</span>
                        <span className="font-medium">{alum.graduationYear}</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Availability Section */}
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Availability</h2>
                <div className="flex flex-wrap gap-2">
                  {alum.availability.map((item, index) => (
                    <div key={index} className="flex items-center bg-blue-50 text-[#42b6b5] px-3 py-2 rounded-lg">
                      <MessageCircle size={16} className="mr-2" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Button */}
              {/* <div className="mt-8 flex">
                <button className="flex-1 bg-[#42b6b5] hover:bg-[#38a3a2] text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200">
                  Connect with {alum.name.split(' ')[0]}
                </button>
              </div> */}

              {/* Contact Button */}
              <div className="mt-8 flex">
                <Link to = "/chat"> 
                  <button className="flex-1 bg-[#42b6b5] hover:bg-[#38a3a2] text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200">
                  Connect with {alum.name.split(' ')[0]}
                </button>
                </Link>
              </div>

              
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer - Fixed at bottom */}
      <Footer className="mt-auto shadow-inner" />
    </div>
  );
};

export default AlumniProfile;