import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [status, setStatus] = useState("Student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [gradYear, setGradYear] = useState("");
  const [department, setDepartment] = useState("Computer Science");
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const navigate = useNavigate(); // For navigation

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    
    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", {
        fullName,
        gradYear,
        department,
        status,
        email,
        password,
        company: status === "Alumni" ? company : "",
        jobTitle: status === "Alumni" ? jobTitle : "",
        linkedin: status === "Alumni" ? linkedin : "",
      });
  
      console.log(response.data);  // Debugging the response
  
      // Check if the response is successful
      if (response.status === 201 || response.data.success) {
        alert(response.data.message || "Signup successful!"); 
        navigate("/login"); // Redirect to login page
      } else {
        alert("Signup failed. Try again.");
      }
    } catch (error) {
      console.error("Signup Error:", error);
      alert(error.response?.data?.message || "Signup failed. Try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50">
      <div className="w-full max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg border-3 mt-5 border-[#42b6b5]">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-[#1e293b]">Register to Alumni Portal</h2>
          <p className="text-[#1e293b] mt-2">Create your account to connect with alumni network</p>
        </div>

        <form className="space-y-5" onSubmit={handleRegister}>
          <div>
            <label className="block text-sm font-medium text-[#1e293b] mb-1">Full Name</label>
            <input 
              type="text" 
              placeholder="Enter your full name" 
              className="w-full p-3 bg-[#42b6b5] placeholder-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#42b6b5]" 
              required 
              value={fullName} 
              onChange={(e) => setFullName(e.target.value)} 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1e293b]  mb-1">Graduation Year</label>
            <input 
              type="number" 
              placeholder="YYYY" 
              className="w-full p-3 bg-[#42b6b5] placeholder-white border text-white  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#42b6b5] " 
              required 
              value={gradYear} 
              onChange={(e) => setGradYear(e.target.value)} 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1e293b] mb-1">Department</label>
            <select 
              className="w-full p-3 border text-white bg-[#42b6b5] placeholder-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#42b6b5] " 
              value={department} 
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option>Computer Science</option>
              <option>Electronics</option>
              <option>Mechanical</option>
              <option>Civil</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1e293b] mb-1">Status</label>
            <select 
              className="w-full p-3 text-white bg-[#42b6b5] placeholder-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#42b6b5]" 
              value={status} 
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>Student</option>
              <option>Alumni</option>
            </select>
          </div>

          {status === "Alumni" && (
            <div className="space-y-5 pt-2 border-t border-gray-200">
              <div>
                <label className="block text-sm font-medium text-[#1e293b] mb-1">Company Name</label>
                <input 
                  type="text" 
                  placeholder="Where do you work?" 
                  className="w-full p-3 border text-white bg-[#42b6b5] placeholder-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#42b6b5]" 
                  required 
                  value={company} 
                  onChange={(e) => setCompany(e.target.value)} 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1e293b] mb-1">Job Title</label>
                <input 
                  type="text" 
                  placeholder="Your current position" 
                  className="w-full p-3 border bg-[#42b6b5] placeholder-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#42b6b5]" 
                  required 
                  value={jobTitle} 
                  onChange={(e) => setJobTitle(e.target.value)} 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1e293b] mb-1">LinkedIn Profile</label>
                <input 
                  type="url" 
                  placeholder="https://linkedin.com/in/yourprofile" 
                  className="w-full p-3 border bg-[#42b6b5] placeholder-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#42b6b5]" 
                  value={linkedin} 
                  onChange={(e) => setLinkedin(e.target.value)} 
                />
              </div>
            </div>
          )}

          <div className="pt-4 border-t border-gray-200">
            <label className="block text-sm font-medium text-[#1e293b] mb-1">Email Address</label>
            <input 
              type="email" 
              placeholder="you@example.com" 
              className="w-full p-3 border border-gray-300 rounded-md text-white bg-[#42b6b5] placeholder-white focus:outline-none focus:ring-2 focus:ring-[#42b6b5]" 
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1e293b] mb-1">Password</label>
            <input 
              type="password" 
              placeholder="Create a password" 
              className="w-full p-3 border text-white bg-[#42b6b5] placeholder-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#42b6b5]" 
              required 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1e293b] mb-1">Confirm Password</label>
            <input 
              type="password" 
              placeholder="Confirm your password" 
              className="w-full p-3 text-white bg-[#42b6b5] placeholder-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#42b6b5]" 
              required 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-[#04514f] text-white py-3 px-4 rounded-md hover:bg-[#1e293b] transition-colors duration-300 font-medium"
          >
            Create Account
          </button>
          
          <div className="text-center mt-4">
            <p className="text-gray-600">
              Already have an account? 
              <a href="/login" className="text-[#42b6b5] ml-1 hover:text-[#1e293b]">
                Log in
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;