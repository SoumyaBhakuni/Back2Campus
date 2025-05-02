import React, { useState } from "react";
import axios from "axios"; // ✅ Import axios

export default function AddEvents() {
  const [formData, setFormData] = useState({
    eventName: "",
    eventDate: "",
    eventTime: "",
    location: "",
    eventType: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/events/add", formData); // ✅ Corrected endpoint
      alert(response.data.message);
      setFormData({
        eventName: "",
        eventDate: "",
        eventTime: "",
        location: "",
        eventType: "",
        description: "",
      });
    } catch (error) {
      console.error("Error adding event:", error);
      alert("Error adding event. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen  p-6">
      <div className="max-w-xl w-full bg-[#42b6b5]  backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/10">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          🎉 Add New Event
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="eventName"
            placeholder="📌 Event Name"
            value={formData.eventName}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg bg-white/30 text-white placeholder-white focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg bg-white/30 text-white placeholder-white focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="time"
            name="eventTime"
            value={formData.eventTime}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg bg-white/30 text-white placeholder-white focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            name="location"
            placeholder="📍 Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg bg-white/30 text-white placeholder-white focus:ring-2 focus:ring-blue-400"
            required
          />
          <select
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg bg-white/30 text-white focus:ring-2 focus:ring-blue-400"
            required
          >

            <option value="" className="text-black">Select Event Type</option>
            <option value="Workshop" className="text-black">🛠️ Workshop</option>
            <option value="Seminar" className="text-black">🎤 Seminar</option>
            <option value="Internship" className="text-black">💼 Internship</option>
            <option value="Webinar" className="text-black">💻 Webinar</option>
            <option value="Networking" className="text-black">🤝 Networking</option>

          </select>
          <textarea
            name="description"
            placeholder="📝 Event Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg bg-white/30 text-white placeholder-white focus:ring-2 focus:ring-blue-400 h-24"
          />
          <button
            type="submit"
            className="w-full bg-[#0e6362] hover:bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            🚀 Add Event
          </button>
        </form>
      </div>
    </div>
  );
}