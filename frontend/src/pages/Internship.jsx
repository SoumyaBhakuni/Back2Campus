
import React, { useState } from "react";
import InternshipFilters from "../components/Ifilters";
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Briefcase, Clock, GraduationCap, DollarSign } from "lucide-react";
import CreateJobs from "./CreateJobs";
import Footer from "../components/Footer";
import Navbar from "../Components/Navbar";

export default function Internships() {
  const mockInternships = [
    { 
      id: 1, 
      title: "Frontend Developer Intern", 
      company: "TechCorp", 
      location: "Remote", 
      duration: "3 months", 
      field: "Software Development",
      deadline: "2025-03-25",
      stipend: "$2000/month"
    },
    { 
      id: 2, 
      title: "Data Science Intern", 
      company: "Analytics Pro", 
      location: "New York", 
      duration: "6 months", 
      field: "Data Science",
      deadline: "2025-04-10",
      stipend: "$2500/month"
    },
    { 
      id: 3, 
      title: "Marketing Intern", 
      company: "BrandBurst", 
      location: "Chicago", 
      duration: "Summer", 
      field: "Marketing",
      deadline: "2025-03-30",
      stipend: "$1800/month"
    },
    { 
      id: 4, 
      title: "Financial Analyst Intern", 
      company: "FinEdge", 
      location: "Boston", 
      duration: "Fall", 
      field: "Finance",
      deadline: "2025-04-15",
      stipend: "$2200/month"
    },
    { 
      id: 5, 
      title: "UX/UI Design Intern", 
      company: "CreativeMinds", 
      location: "San Francisco", 
      duration: "Year-round", 
      field: "Design",
      deadline: "2025-04-05",
      stipend: "$2300/month"
    },
  ];

  const [filteredInternships, setFilteredInternships] = useState(mockInternships);
  const [selectedInternship, setSelectedInternship] = useState(null);

  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  // Function to filter internships
  const handleFilterChange = (filters) => {
    let filtered = mockInternships;

    if (filters.search) {
      filtered = filtered.filter(internship =>
        internship.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        internship.company.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
    if (filters.duration) {
      filtered = filtered.filter(internship => internship.duration === filters.duration);
    }
    if (filters.location) {
      filtered = filtered.filter(internship => internship.location === filters.location);
    }
    if (filters.company) {
      filtered = filtered.filter(internship =>
        internship.company.toLowerCase().includes(filters.company.toLowerCase())
      );
    }
    if (filters.field) {
      filtered = filtered.filter(internship => internship.field === filters.field);
    }
    
    setFilteredInternships(filtered);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar/>
      <div className="flex flex-col md:flex-row flex-grow ">
        {/* Left Side - Filters Section */}
        <div className="w-full md:w-1/4 p-4 bg-white shadow-md">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Filters</h2>
          <InternshipFilters onFilterChange={handleFilterChange} />
        </div>

        {/* Middle - Internships Section */}
        <div className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Available Internships</h1>
            <div className="flex">
              <span className="bg-[#42b6b5] mx-3 text-white px-3 py-1 rounded-md text-sm">
                {filteredInternships.length} Internships Found
              </span>
              {/* button link */}
              <Link to="/CreateJobs" className="bg-[#42b6b5] text-white px-4 py-2 rounded-md">Add Jobs</Link>
            </div>
          </div>

          {/* Internship Cards Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredInternships.length > 0 ? (
              filteredInternships.map((internship) => (
                <div 
                  key={internship.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  onClick={() => setSelectedInternship(internship)}
                >
                  <div className="bg-[#42b6b5] h-1 w-full"></div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h2 className="text-xl font-semibold text-gray-800">{internship.title}</h2>
                      <span className="bg-blue-100 text-[#42b6b5] text-xs font-medium px-2.5 py-0.5 rounded">
                        {internship.field}
                      </span>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Briefcase className="w-4 h-4 mr-2" />
                        <span>{internship.company}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{internship.location}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{internship.duration}</span>
                      </div>

                      <div className="flex items-center text-gray-600">
                        <DollarSign className="w-4 h-4 mr-2" />
                        <span>{internship.stipend}</span>
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-500 mb-4">
                      Application Deadline: {formatDate(internship.deadline)}
                    </div>
                    
                    <button className="w-full bg-[#42b6b5] hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12 bg-white rounded-lg shadow">
                <div className="text-gray-400 mb-2">
                  <Briefcase className="w-12 h-12 mx-auto opacity-50" />
                </div>
                <p className="text-lg text-gray-500">No internships match your search criteria</p>
                <button 
                  className="mt-4 text-[#42b6b5] hover:text-blue-600"
                  onClick={() => handleFilterChange({})}
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Footer positioned correctly outside the content area */}
      <Footer />
      
      {/* Internship Detail Modal */}
      {selectedInternship && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-screen overflow-auto">
            <div className="bg-[#42b6b5] p-4 text-white flex justify-between items-center">
              <h3 className="text-xl font-bold">{selectedInternship.title}</h3>
              <button 
                onClick={() => setSelectedInternship(null)}
                className="text-white hover:text-gray-200"
              >
                ×
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-start">
                  <Briefcase className="w-5 h-5 mr-3 text-[#42b6b5] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-700">Company</h4>
                    <p className="text-gray-600">{selectedInternship.company}</p>
                    <p className="text-gray-600">Fortune 500 Company</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-[#42b6b5] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-700">Location</h4>
                    <p className="text-gray-600">{selectedInternship.location}</p>
                    <p className="text-gray-600">{selectedInternship.location === "Remote" ? "Work from anywhere" : "On-site"}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-5 h-5 mr-3 text-[#42b6b5] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-700">Duration</h4>
                    <p className="text-gray-600">{selectedInternship.duration}</p>
                    <p className="text-gray-600">Full-time</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <DollarSign className="w-5 h-5 mr-3 text-[#42b6b5] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-700">Stipend</h4>
                    <p className="text-gray-600">{selectedInternship.stipend}</p>
                    <p className="text-gray-600">Performance bonuses available</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Calendar className="w-5 h-5 mr-3 text-[#42b6b5] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-700">Deadline</h4>
                    <p className="text-gray-600">{formatDate(selectedInternship.deadline)}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <GraduationCap className="w-5 h-5 mr-3 text-[#42b6b5] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-700">Field</h4>
                    <p className="text-gray-600">{selectedInternship.field}</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-2">About This Opportunity</h4>
                <p className="text-gray-600">
                  This internship offers hands-on experience with real-world projects in a supportive
                  and collaborative environment. The ideal candidate should be passionate about 
                  {selectedInternship.field} and eager to learn. You'll work alongside 
                  industry professionals who will mentor you throughout your internship journey.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-2">Requirements</h4>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Currently pursuing a degree in a related field</li>
                  <li>Strong interest in {selectedInternship.field}</li>
                  <li>Excellent communication and teamwork skills</li>
                  <li>Ability to work {selectedInternship.location === "Remote" ? "remotely" : "on-site"} during the internship period</li>
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4"> 
                <button className="flex-1 bg-[#42b6b5] hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300">
                  Apply Now
                </button>
                <button className="flex-1 border border-[#42b6b5] text-[#42b6b5] hover:bg-blue-50 font-medium py-3 px-6 rounded-md transition-colors duration-300">
                  Save for Later
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}