import React, { useState } from 'react';
import axios from 'axios';
export default function CreateJobs() {
  const [formData, setFormData] = useState({
    companyName: '',
    experience: '',
    role: '',
    qualification: '',
    location: '',
    jobType: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/jobs", formData);
      alert(res.data.message);
      setFormData({
        companyName: '',
        experience: '',
        role: '',
        qualification: '',
        location: '',
        jobType: '',
        description: '',
      });
    } catch (error) {
      alert("Error adding job event.");
    }
  };


  return (
    <div className="flex justify-center items-center min-h-screen  p-6">
      <div className="max-w-lg w-full bg-[#42b6b5] backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/10">
        <h2 className="text-3xl font-bold text-center text-white mb-6">🚀 Add Internship/Job Opportunity</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            name="companyName" 
            placeholder="🏢 Company Name" 
            value={formData.companyName} 
            onChange={handleChange} 
            className="w-full p-3 border border-gray-300 rounded-lg bg-white/30 text-white placeholder-white focus:ring-2 focus:ring-[#406cb2]"
            required
          />
          <input 
            type="number" 
            name="experience" 
            placeholder="⏳ Years of Experience" 
            value={formData.experience} 
            onChange={handleChange} 
            className="w-full p-3 border border-gray-300 rounded-lg bg-white/30 text-white placeholder-white focus:ring-2 focus:ring-[#406cb2]"
            required
          />
          <input 
            type="text" 
            name="role" 
            placeholder="💼 Internship/Job Role" 
            value={formData.role} 
            onChange={handleChange} 
            className="w-full p-3 border border-gray-300 rounded-lg bg-white/30 text-white placeholder-white focus:ring-2 focus:ring-[#406cb2]"
            required
          />
          <input 
            type="text" 
            name="qualification" 
            placeholder="🎓 Qualification Required" 
            value={formData.qualification} 
            onChange={handleChange} 
            className="w-full p-3 border border-gray-300 rounded-lg bg-white/30 text-white placeholder-white focus:ring-2 focus:ring-[#406cb2]"
            required
          />
          <input 
            type="text" 
            name="location" 
            placeholder="📍 Job Location" 
            value={formData.location} 
            onChange={handleChange} 
            className="w-full p-3 border border-gray-300 rounded-lg bg-white/30 text-white placeholder-white focus:ring-2 focus:ring-[#406cb2]"
          />
          
          <select
  name="jobType"
  value={formData.jobType}
  onChange={handleChange}
  className="w-full p-3 border border-gray-300 rounded-lg bg-white/30 text-white placeholder-white focus:ring-2 focus:ring-[#406cb2] appearance-none"
  required
>
  <option className="text-black" value="">Select Job Type</option>
  <option className="text-black" value="Internship">Internship</option>
  <option className="text-black" value="Full-Time">Full-Time</option>
  <option className="text-black" value="Part-Time">Part-Time</option>
  <option className="text-black" value="Remote">Remote</option>
</select>

          <textarea 
            name="description" 
            placeholder="📝 Job Description" 
            value={formData.description} 
            onChange={handleChange} 
            className="w-full p-3 border border-gray-300 rounded-lg bg-white/30 text-white placeholder-white focus:ring-2 focus:ring-[#406cb2] h-24"
          />
          <button 
            type="submit" 
            className="w-full bg-[#1e293b] text-white py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            🚀 Add Event
          </button>
        </form>
      </div>
    </div>
  );
}