import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      
      if (response.data.success) {
        // Store user data in localStorage
        localStorage.setItem("user", JSON.stringify(response.data.user)); 
        
        alert("Login Successful!");
        navigate("/");  // Navigate to the homepage or a protected route
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Invalid credentials. Try again.");
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md p-8 bg-white shadow-2xl rounded-lg border-3 border-[#42b6b5]">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#1e293b]">
          Alumni Portal
        </h2>
        
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border-2 border-[#42b6b5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#42b6b5] focus:border-transparent"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border-2 border-[#42b6b5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#42b6b5] focus:border-transparent"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#42b6b5] text-white py-3 rounded-md hover:bg-[#457271] transition duration-300 font-medium text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#42b6b5]"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;