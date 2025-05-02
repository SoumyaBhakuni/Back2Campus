import React, { useState } from "react";
import Afilters from "../Components/Afilters";
import Footer from "../components/Footer"; // Fixed capitalization for consistency
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

const alumniData = [
  { id: 1, name: "Alice Johnson", graduationYear: 2015, department: "CSE", jobRole: "Software Engineer", experienceLevel: "Mid-Level", techStack: "React, Node.js", organisation: "Google", availability: ["Open to Mentorship", "Open to Networking"] },
  { id: 2, name: "Bob Smith", graduationYear: 2018, department: "ECE", jobRole: "Data Scientist", experienceLevel: "Entry-Level", techStack: "Python, TensorFlow", organisation: "Amazon", availability: ["Open to Hiring"] },
  { id: 3, name: "Charlie Lee", graduationYear: 2016, department: "IT", jobRole: "Product Manager", experienceLevel: "Senior-Level", techStack: "Agile, UX", organisation: "Microsoft", availability: ["Open to Mentorship", "Available for Guest Lectures"] },
  { id: 4, name: "David Kim", graduationYear: 2017, department: "Mechanical", jobRole: "Robotics Engineer", experienceLevel: "Mid-Level", techStack: "ROS, C++", organisation: "Tesla", availability: ["Open to Mentorship"] },
  { id: 5, name: "Eva Green", graduationYear: 2014, department: "Civil", jobRole: "Project Manager", experienceLevel: "Senior-Level", techStack: "AutoCAD, PMP", organisation: "Siemens", availability: ["Available for Guest Lectures"] },
];

export default function Alumini() {
  const [Filters, setFilters] = useState({});
  const [filteredAlumni, setFilteredAlumni] = useState(alumniData);

  const applyFilters = (newFilters) => {
    setFilters(newFilters);

    if (Object.values(newFilters).every(value => value === "" || (Array.isArray(value) && value.length === 0))) {
      setFilteredAlumni(alumniData);
      return;
    }

    const filtered = alumniData.filter(alum => {
      return (
        (!newFilters.graduationYear || alum.graduationYear === parseInt(newFilters.graduationYear)) &&
        (!newFilters.department || alum.department.toLowerCase().includes(newFilters.department.toLowerCase())) &&
        (!newFilters.jobRole || alum.jobRole.toLowerCase() === newFilters.jobRole.toLowerCase()) &&
        (!newFilters.experienceLevel || alum.experienceLevel.toLowerCase() === newFilters.experienceLevel.toLowerCase()) &&
        (!newFilters.techStack || alum.techStack.toLowerCase().includes(newFilters.techStack.toLowerCase())) &&
        (!newFilters.organisation || alum.organisation.toLowerCase().includes(newFilters.organisation.toLowerCase())) &&
        (!newFilters.availability?.length || newFilters.availability.every(opt => alum.availability.includes(opt)))
      );
    });

    setFilteredAlumni(filtered);
  };

  // Get company logo initials
  const getOrgInitials = (org) => {
    return org.split(' ').map(word => word[0]).join('').toUpperCase();
  };

  // Experience level badge color
  const getExperienceBadgeColor = (level) => {
    switch(level) {
      case "Entry-Level": return "bg-emerald-100 text-emerald-800";
      case "Mid-Level": return "bg-blue-100 text-blue-800";
      case "Senior-Level": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar - Fixed at top */}
      <Navbar className="sticky top-0 z-50 shadow-sm" />
      
      {/* Main Content */}
      <div className="flex flex-1 p-6">
        {/* Left Side - Filters */}
        <div className="w-1/4 mr-6">
          <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
            <h2 className="text-xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-3">Filter Alumni</h2>
            <Afilters applyFilters={applyFilters} />
          </div>
        </div>

        {/* Right Side - Alumni List */}
        <div className="flex-1">
          <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-800">Alumni Network</h1>
              <p className="text-gray-500">{filteredAlumni.length} alumni found</p>
            </div>
            
            {filteredAlumni.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredAlumni.map((alum) => (
                  <div key={alum.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col">
                    {/* Card Header with Profile Info */}
                    <div className="p-6 flex items-start space-x-4">
                      {/* Avatar/Org Badge */}
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-full bg-[#42b6b5] flex items-center justify-center text-white font-bold text-xl">
                          {getOrgInitials(alum.organisation)}
                        </div>
                      </div>
                      
                      {/* Name and Basic Info */}
                      <div className="flex-1 min-w-0">
                        <h2 className="text-lg font-semibold text-gray-900 truncate">{alum.name}</h2>
                        <div className="flex items-center text-sm text-gray-500 mt-1 flex-wrap">
                          <span className="mr-2">{alum.department}</span>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className="mx-2">{alum.graduationYear}</span>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-medium ${getExperienceBadgeColor(alum.experienceLevel)}`}>
                            {alum.experienceLevel}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Card Body */}
                    <div className="px-6 pb-2 flex-1">
                      <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                        <div>
                          <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Job Role</p>
                          <p className="mt-1 font-medium text-gray-800">{alum.jobRole}</p>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Organisation</p>
                          <p className="mt-1 font-medium text-gray-800">{alum.organisation}</p>
                        </div>
                        <div className="col-span-2">
                          <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Tech Stack</p>
                          <div className="mt-1 flex flex-wrap gap-2">
                            {alum.techStack.split(', ').map((tech, index) => (
                              <span key={index} className="inline-block bg-gray-100 text-gray-800 px-2 py-1 rounded-md text-xs">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Card Footer */}
                    <div className="mt-4 border-t border-gray-100 bg-gray-50 px-6 py-4">
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Availability</p>
                      <div className="flex flex-wrap gap-2">
                        {alum.availability.map((item, index) => (
                          <span key={index} className="inline-block bg-blue-50 text-[#42b6b5] px-2 py-1 rounded-md text-xs font-medium">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Connect Button */}
                    <div className="px-6 py-4 bg-white border-t border-gray-100">
                      <Link to={`/aluminiProfile/${alum.id}`}>
                        <button 
                          className="w-full bg-[#42b6b5] text-white py-2 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-700 transition-colors duration-300 shadow-sm"
                        >
                          Connect with {alum.name.split(' ')[0]}
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 bg-gray-50 rounded-lg">
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p className="mt-4 text-lg text-gray-600 font-medium">No alumni match the selected filters.</p>
                <button 
                  onClick={() => applyFilters({})} 
                  className="mt-4 text-[#1e293b]-blue-600 font-medium hover:underline"
                >
                  Reset all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Footer - Fixed at bottom */}
      <Footer className="mt-auto shadow-inner" />
    </div>
  );
}