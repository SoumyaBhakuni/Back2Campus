
// import React, { useState, useEffect } from "react";
// import { Search, Calendar, MapPin, User, Filter, RefreshCw } from "lucide-react";

// const Efilters = ({ onFilterChange }) => {
//   const [filters, setFilters] = useState({
//     search: "",
//     dateRange: "",
//     venue: "",
//     speaker: "",
//   });

//   const [isCollapsed, setIsCollapsed] = useState(false);

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
//   };

//   // Apply filters (now auto-applied on input change)
//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       onFilterChange(filters);
//     }, 300);

//     return () => clearTimeout(timeoutId);
//   }, [filters, onFilterChange]);

//   // Reset all filters
//   const resetFilters = () => {
//     const resetValues = { search: "", dateRange: "", venue: "", speaker: "" };
//     setFilters(resetValues);
//     onFilterChange(resetValues);
//   };

//   const venues = [
//     "Auditorium A",
//     "Lab 2",
//     "Hall 3",
//     "Main Hall",
//     "Room 101"
//   ];

//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden">
//       {/* Filter Header */}
//       <div 
//         className="bg-teal-500 p-4 text-white flex justify-between items-center cursor-pointer"
//         onClick={() => setIsCollapsed(!isCollapsed)}
//       >
//         <div className="flex items-center">
//           <Filter className="w-5 h-5 mr-2" />
//           <h2 className="text-lg font-bold">Event Filters</h2>
//         </div>
//         <span>{isCollapsed ? "+" : "-"}</span>
//       </div>

//       {/* Filter Body */}
//       <div className={`transition-all duration-300 ${isCollapsed ? "max-h-0 overflow-hidden" : "max-h-screen p-4"}`}>
//         {/* Search by Event Name */}
//         <div className="mb-5">
//           <label className="block mb-2 text-sm font-medium text-gray-700">
//             Search Event
//           </label>
//           <div className="relative">
//             <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
//             <input
//               type="text"
//               name="search"
//               placeholder="Enter event name..."
//               value={filters.search}
//               onChange={handleChange}
//               className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-700"
//             />
//           </div>
//         </div>

//         {/* Date Filter */}
//         <div className="mb-5">
//           <label className="block mb-2 text-sm font-medium text-gray-700">
//             Date
//           </label>
//           <div className="relative">
//             <Calendar className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
//             <input
//               type="date"
//               name="dateRange"
//               value={filters.dateRange}
//               onChange={handleChange}
//               className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-700"
//             />
//           </div>
//         </div>

//         {/* Venue Filter */}
//         <div className="mb-5">
//           <label className="block mb-2 text-sm font-medium text-gray-700">
//             Venue
//           </label>
//           <div className="relative">
//             <MapPin className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
//             <select
//               name="venue"
//               value={filters.venue}
//               onChange={handleChange}
//               className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-700 appearance-none"
//             >
//               <option value="">All Venues</option>
//               {venues.map((venue) => (
//                 <option key={venue} value={venue}>
//                   {venue}
//                 </option>
//               ))}
//             </select>
//             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//               <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//                 <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//               </svg>
//             </div>
//           </div>
//         </div>

//         {/* Speaker Filter */}
//         <div className="mb-5">
//           <label className="block mb-2 text-sm font-medium text-gray-700">
//             Speaker
//           </label>
//           <div className="relative">
//             <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
//             <input
//               type="text"
//               name="speaker"
//               placeholder="Enter speaker name..."
//               value={filters.speaker}
//               onChange={handleChange}
//               className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-700"
//             />
//           </div>
//         </div>

//         {/* Reset Button */}
//         <button
//           onClick={resetFilters}
//           className="w-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium p-2 rounded-md transition duration-300"
//         >
//           <RefreshCw className="w-4 h-4 mr-2" />
//           Reset Filters
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Efilters;


import React, { useState, useEffect } from "react";
import { Search, Calendar, MapPin, Briefcase, Filter, RefreshCw, GraduationCap, Clock } from "lucide-react";

const InternshipFilters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    search: "",
    duration: "",
    location: "",
    company: "",
    field: "",
  });

  const [isCollapsed, setIsCollapsed] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  // Apply filters (auto-applied on input change)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onFilterChange(filters);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [filters, onFilterChange]);

  // Reset all filters
  const resetFilters = () => {
    const resetValues = { search: "", duration: "", location: "", company: "", field: "" };
    setFilters(resetValues);
    onFilterChange(resetValues);
  };

  const locations = [
    "Remote",
    "New York",
    "San Francisco",
    "Boston",
    "Chicago"
  ];

  const fields = [
    "Software Development",
    "Data Science",
    "Marketing",
    "Finance",
    "Design"
  ];

  const durations = [
    "3 months",
    "6 months",
    "Summer",
    "Fall",
    "Year-round"
  ];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Filter Header */}
      <div 
        className="bg-[#42b6b5] p-4 text-white flex justify-between items-center cursor-pointer"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <div className="flex items-center">
          <Filter className="w-5 h-5 mr-2" />
          <h2 className="text-lg font-bold">Internship Filters</h2>
        </div>
        <span>{isCollapsed ? "+" : "-"}</span>
      </div>

      {/* Filter Body */}
      <div className={`transition-all duration-300 ${isCollapsed ? "max-h-0 overflow-hidden" : "max-h-screen p-4"}`}>
        {/* Search by Internship Title */}
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Search Internship
          </label>
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              name="search"
              placeholder="Enter keywords..."
              value={filters.search}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
            />
          </div>
        </div>

        {/* Duration Filter */}
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Duration
          </label>
          <div className="relative">
            <Clock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <select
              name="duration"
              value={filters.duration}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 appearance-none"
            >
              <option value="">All Durations</option>
              {durations.map((duration) => (
                <option key={duration} value={duration}>
                  {duration}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Location Filter */}
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Location
          </label>
          <div className="relative">
            <MapPin className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <select
              name="location"
              value={filters.location}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 appearance-none"
            >
              <option value="">All Locations</option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Company Filter */}
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Company
          </label>
          <div className="relative">
            <Briefcase className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              name="company"
              placeholder="Enter company name..."
              value={filters.company}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
            />
          </div>
        </div>

        {/* Field Filter */}
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Field
          </label>
          <div className="relative">
            <GraduationCap className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <select
              name="field"
              value={filters.field}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 appearance-none"
            >
              <option value="">All Fields</option>
              {fields.map((field) => (
                <option key={field} value={field}>
                  {field}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Reset Button */}
        <button
          onClick={resetFilters}
          className="w-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium p-2 rounded-md transition duration-300"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default InternshipFilters;