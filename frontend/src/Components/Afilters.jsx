import React, { useState } from "react";

export default function Afilters({ applyFilters }) {
  const [filters, setFilters] = useState({
    graduationYear: "",
    department: "",
    jobRole: "",
    experienceLevel: "",
    techStack: "",
    organisation: "",
    availability: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prevFilters) => {
      const updatedAvailability = checked
        ? [...prevFilters.availability, name]
        : prevFilters.availability.filter((item) => item !== name);

      return { ...prevFilters, availability: updatedAvailability };
    });
  };

  const handleApplyFilters = () => {
    applyFilters(filters);
  };

  const handleReset = () => {
    const resetFilters = {
      graduationYear: "",
      department: "",
      jobRole: "",
      experienceLevel: "",
      techStack: "",
      organisation: "",
      availability: [],
    };
    setFilters(resetFilters);
    applyFilters(resetFilters);
  };

  return (
    <div className=" text-white p-6 rounded-lg bg-[#42b6b5]">
      <h2 className="text-xl font-bold mb-4 text-[#1e293b]">Filters</h2>

      <label className="block ">Graduation Year</label>
      <input
        type="number"
        name="graduationYear"
        value={filters.graduationYear}
        onChange={handleChange}
        className="w-full p-2 mb-3 rounded bg-white text-black"
        placeholder="Enter year"
      />

      <label className="block">Department</label>
      <input
        type="text"
        name="department"
        value={filters.department}
        onChange={handleChange}
        className="w-full p-2 mb-3 rounded bg-white text-black"
        placeholder="e.g., CSE, ECE"
      />

      <label className="block">Job Role</label>
      <input
        type="text"
        name="jobRole"
        value={filters.jobRole}
        onChange={handleChange}
        className="w-full p-2 mb-3 rounded bg-white text-black"
        placeholder="e.g., Software Engineer"
      />

      <label className="block">Experience Level</label>
      <select
        name="experienceLevel"
        value={filters.experienceLevel}
        onChange={handleChange}
        className="w-full p-2 mb-3 rounded bg-white text-black"
      >
        <option value="">Select</option>
        <option value="Entry-Level">Entry-Level</option>
        <option value="Mid-Level">Mid-Level</option>
        <option value="Senior-Level">Senior-Level</option>
      </select>

      <label className="block">Tech Stack</label>
      <input
        type="text"
        name="techStack"
        value={filters.techStack}
        onChange={handleChange}
        placeholder="e.g., React, Python"
        className="w-full p-2 mb-3 rounded bg-white text-black"
      />

      <label className="block">Organisation</label>
      <input
        type="text"
        name="organisation"
        value={filters.organisation}
        onChange={handleChange}
        className="w-full p-2 mb-3 rounded bg-white text-black"
      />

      <label className="block mb-2">Availability</label>
      <div className="mb-3">
        {["Open to Mentorship", "Open to Networking", "Open to Hiring", "Available for Guest Lectures"].map((option) => (
          <label key={option} className="flex items-center mb-2">
            <input
              type="checkbox"
              name={option}
              checked={filters.availability.includes(option)}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            {option}
          </label>
        ))}
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={handleApplyFilters}
          className="bg-[#1e293b] text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          Apply Filters
        </button>
        <button
          onClick={handleReset}
          className="bg-[#1e293b] text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
