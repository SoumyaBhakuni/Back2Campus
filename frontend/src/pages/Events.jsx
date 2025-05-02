import React, { useState } from "react";
import Efilters from "../Components/Efilters";

import { Link } from 'react-router-dom';
import AddEvents from "./AddEvents";
import Navbar from "../Components/Navbar";
import Footer from "../components/Footer"; // Fixed capitalization for consistency

import { Calendar, MapPin, User, Clock } from "lucide-react";

export default function Events() {
  const mockEvents = [
    { id: 1, name: "Tech Summit 2025", venue: "Auditorium A", date: "2025-03-10", speaker: "Dr. John Doe" },
    { id: 2, name: "AI & ML Workshop", venue: "Lab 2", date: "2025-03-15", speaker: "Alice Smith" },
    { id: 3, name: "Startup Pitch Night", venue: "Hall 3", date: "2025-03-20", speaker: "Bob Johnson" },
    { id: 4, name: "Cybersecurity Conference", venue: "Main Hall", date: "2025-03-25", speaker: "Charlie Brown" },
    { id: 5, name: "Blockchain & Web3 Meetup", venue: "Room 101", date: "2025-03-30", speaker: "David White" },
  ];
  
  const [filteredEvents, setFilteredEvents] = useState(mockEvents);
  const [selectedEvent, setSelectedEvent] = useState(null);
  
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
  
  // Function to filter events
  const handleFilterChange = (filters) => {
    let filtered = mockEvents;

    if (filters.search) {
      filtered = filtered.filter(event =>
        event.name.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
    if (filters.dateRange) {
      filtered = filtered.filter(event => event.date === filters.dateRange);
    }
    if (filters.venue) {
      filtered = filtered.filter(event => event.venue === filters.venue);
    }
    if (filters.speaker) {
      filtered = filtered.filter(event =>
        event.speaker.toLowerCase().includes(filters.speaker.toLowerCase())
      );
    }
    setFilteredEvents(filtered);
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar - Fixed at top */}
      <Navbar className="sticky top-0 z-50 shadow-sm" />
      
      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-1">
        {/* Left Side - Filters Section */}
        <div className="w-full md:w-1/4 p-4 bg-white shadow-md">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Filters</h2>
          <Efilters onFilterChange={handleFilterChange} />
        </div>
        
        {/* Middle - Events Section */}
        <div className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Upcoming Events</h1>
            <div className="">
              <span className="bg-teal-500 mx-3 text-white px-3 py-1 rounded-full text-sm">
                {filteredEvents.length} Events Found
              </span>
              {/* button link */}
              <Link to="/addevents" className="bg-teal-500 text-white px-4 py-2 rounded-md">
                Add Events
              </Link>
            </div>
          </div>
          
          {/* Event Cards Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <div 
                  key={event.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className="bg-teal-500 h-1 w-full"></div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">{event.name}</h2>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{event.venue}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-600">
                        <User className="w-4 h-4 mr-2" />
                        <span>{event.speaker}</span>
                      </div>
                    </div>
                    
                    <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center">
                      Register Now
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12 bg-white rounded-lg shadow">
                <div className="text-gray-400 mb-2">
                  <Calendar className="w-12 h-12 mx-auto opacity-50" />
                </div>
                <p className="text-lg text-gray-500">No events match your search criteria</p>
                <button 
                  className="mt-4 text-teal-500 hover:text-teal-600"
                  onClick={() => handleFilterChange({})}
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Footer - Fixed at bottom */}
      <Footer className="mt-auto shadow-inner" />

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-screen overflow-auto">
            <div className="bg-teal-500 p-4 text-white flex justify-between items-center">
              <h3 className="text-xl font-bold">{selectedEvent.name}</h3>
              <button 
                onClick={() => setSelectedEvent(null)}
                className="text-white hover:text-gray-200"
              >
                ×
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-start">
                  <Calendar className="w-5 h-5 mr-3 text-teal-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-700">Date and Time</h4>
                    <p className="text-gray-600">{formatDate(selectedEvent.date)}</p>
                    <p className="text-gray-600">9:00 AM - 5:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-teal-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-700">Venue</h4>
                    <p className="text-gray-600">{selectedEvent.venue}</p>
                    <p className="text-gray-600">Main Campus, Floor 2</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <User className="w-5 h-5 mr-3 text-teal-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-700">Speaker</h4>
                    <p className="text-gray-600">{selectedEvent.speaker}</p>
                    <p className="text-gray-600">Senior Technology Expert</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-5 h-5 mr-3 text-teal-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-700">Duration</h4>
                    <p className="text-gray-600">8 hours</p>
                    <p className="text-gray-600">Includes lunch break</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-2">About This Event</h4>
                <p className="text-gray-600">
                  Join us for this exciting event where industry experts will share insights
                  and knowledge on the latest trends and innovations. This event is perfect for
                  professionals looking to expand their skills and network with peers.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4"> 
                <button className="flex-1 bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300">
                  Register Now
                </button>
                <button className="flex-1 border border-teal-500 text-teal-500 hover:bg-teal-50 font-medium py-3 px-6 rounded-md transition-colors duration-300">
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