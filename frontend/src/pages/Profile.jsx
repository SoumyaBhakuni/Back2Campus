import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../components/Footer";
import { 
  FaEdit, 
  FaEnvelope, 
  FaSun, 
  FaMoon, 
  FaGithub, 
  FaLinkedin, 
  FaUserPlus, 
  FaCommentDots,
  FaGraduationCap,
  FaUniversity,
  FaPhone,
  FaBriefcase,
  FaCode
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ProfileCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [profile, setProfile] = useState({
    name: "Aryan Sharma",
    profilePhoto: "/photo.jpg",
    department: "Computer Science",
    degree: "B.Tech",
    university: "XYZ University",
    graduationYear: "2025",
    contact: "+91 9876543210",
    email: "aryan.sharma@example.com",
    role: "Student",
    skills: "HTML, CSS, JavaScript, React, Node.js",
    github: "https://github.com/aryansharma",
    linkedin: "https://linkedin.com/in/aryansharma",
    about: "I am a passionate computer science student with a keen interest in web development and AI. I love solving real-world problems through code and continuously improving my skills.",
    education: "B.Tech in Computer Science at XYZ University (2021-2025)",
    projects: [
      { name: "Portfolio Website", description: "Built with React and Tailwind CSS." },
      { name: "Chatbot", description: "AI-powered chatbot using Node.js and OpenAI API." }
    ]
  });
  const addProject = () => {
    setProfile({
      ...profile,
      projects: [...profile.projects, { name: "New Project", description: "Project description" }]
    });
  };

  const removeProject = (index) => {
    const updatedProjects = [...profile.projects];
    updatedProjects.splice(index, 1);
    setProfile({ ...profile, projects: updatedProjects });
  };

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...profile.projects];
    updatedProjects[index][field] = value;
    setProfile({ ...profile, projects: updatedProjects });
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({ ...profile, profilePhoto: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const colors = {
    primary: "#42b6b5",
    secondary: "#1e293b",
    darkBg: "#1e293b",
    lightBg: "white",
    darkText: "black",
    lightText: "white",
    darkCard: "#0f172a",
    lightCard: "#f8fafc",
    darkInput: "#334155",
    lightInput: "#f1f5f9"
  };

  return (

    <div className={`${darkMode ? "bg-[#1e293b]" : "bg-gray-100"} min-h-screen transition-colors duration-300`}>
    
      <Navbar/>
      {/* Theme Toggle Button */}
      <button 
        className={`fixed top-4 right-4 p-3 rounded-full ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"} hover:bg-opacity-80 transition-all z-10 shadow-lg`}
        onClick={() => setDarkMode(!darkMode)}
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        style={{ 
          boxShadow: darkMode ? "0 4px 12px rgba(0,0,0,0.3)" : "0 4px 12px rgba(0,0,0,0.1)" 
        }}
      >
        {darkMode ? <FaSun className="text-yellow-300" /> : <FaMoon className="text-gray-600" />}
      </button>
      
      <div className="container  mx-auto px-4 py-8 shadow-2xl">
        <div className="flex flex-col bg-[#1e293b] lg:flex-row gap-8">
          {/* Profile Card - Left Side */}
          <motion.div 
          className={`${darkMode ? colors.darkCard : colors.lightCard} rounded-2xl shadow-xl w-full lg:w-1/3 overflow-hidden border-3 border-[#42b6b5]`}

            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ 
              boxShadow: darkMode ? "0 10px 25px rgba(0,0,0,0.3)" : "0 10px 25px rgba(0,0,0,0.1)"
            }}
          >
            <div className="p-6 flex flex-col items-center">
              <div className="relative mb-6 group">
                <img 
                  src={profile.profilePhoto} 
                  alt={profile.name} 
                  className="w-32 h-32 rounded-full object-cover border-4 shadow-lg transition-all duration-300"
                  style={{ borderColor: colors.primary, boxShadow: `0 0 20px rgba(66, 182, 181, 0.3)` }}
                />
                {isEditing && (
                  <label htmlFor="profile-photo" className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-sm">Change Photo</span>
                    <input 
                      id="profile-photo" 
                      type="file" 
                      accept="image/*" 
                      className="hidden" 
                      onChange={handleImageChange}
                    />
                  </label>
                )}
              </div>
              {isEditing ? (
                <input 
                  type="text" 
                  name="name" 
                  value={profile.name} 
                  onChange={handleChange} 
                  className={`text-center ${darkMode ? `bg-${colors.darkInput} text-white` : `bg-${colors.lightInput} text-gray-800`} p-2 rounded-md w-full mb-2`}
                  style={{ backgroundColor: darkMode ? colors.darkInput : colors.lightInput }}
                />
              ) : (
                <h2 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-800"} mb-2 text-center`}>{profile.name}</h2>
              )}
              {isEditing ? (
                <input 
                  type="text" 
                  name="role" 
                  value={profile.role} 
                  onChange={handleChange} 
                  className={`text-center p-2 rounded-md w-full mb-3`}
                  style={{ 
                    backgroundColor: darkMode ? colors.darkInput : colors.lightInput,
                    color: darkMode ? "white" : "black"
                  }}
                />
              ) : (
                <p className="text-lg mb-3 text-center" style={{ color: darkMode ? "#94a3b8" : "#64748b" }}>{profile.role}</p>
              )}
              <div className="w-full space-y-3 mt-2">
                <div className="flex items-center p-3 rounded-lg" style={{ backgroundColor: darkMode ? "rgba(15, 23, 42, 0.8)" : "rgba(241, 245, 249, 0.8)" }}>
                  <FaBriefcase className="mr-3" style={{ color: colors.primary }} />
                  {isEditing ? (
                    <input 
                      type="text" 
                      name="department" 
                      value={profile.department} 
                      onChange={handleChange} 
                      className="w-full p-1 rounded"
                      style={{ 
                        backgroundColor: darkMode ? "rgba(51, 65, 85, 0.8)" : "white",
                        color: darkMode ? "white" : "black"
                      }}
                      placeholder="Department"
                    />
                  ) : (
                    <span style={{ color: darkMode ? "#e2e8f0" : "#334155" }}>{profile.department}</span>
                  )}
                </div>
                
                <div className="flex items-center p-3 rounded-lg" style={{ backgroundColor: darkMode ? "rgba(15, 23, 42, 0.8)" : "rgba(241, 245, 249, 0.8)" }}>
                  <FaGraduationCap className="mr-3" style={{ color: colors.primary }} />
                  {isEditing ? (
                    <input 
                      type="text" 
                      name="graduationYear" 
                      value={profile.graduationYear} 
                      onChange={handleChange} 
                      className="w-full p-1 rounded"
                      style={{ 
                        backgroundColor: darkMode ? "rgba(51, 65, 85, 0.8)" : "white",
                        color: darkMode ? "white" : "black"
                      }}
                      placeholder="Graduation Year"
                    />
                  ) : (
                    <span style={{ color: darkMode ? "#e2e8f0" : "#334155" }}>Class of {profile.graduationYear}</span>
                  )}
                </div>
                
                {/* Contact */}
                <div className="flex items-center p-3 rounded-lg" style={{ backgroundColor: darkMode ? "rgba(15, 23, 42, 0.8)" : "rgba(241, 245, 249, 0.8)" }}>
                  <FaPhone className="mr-3" style={{ color: colors.primary }} />
                  {isEditing ? (
                    <input 
                      type="text" 
                      name="contact" 
                      value={profile.contact} 
                      onChange={handleChange} 
                      className="w-full p-1 rounded"
                      style={{ 
                        backgroundColor: darkMode ? "rgba(51, 65, 85, 0.8)" : "white",
                        color: darkMode ? "white" : "black"
                      }}
                      placeholder="Contact"
                    />
                  ) : (
                    <span style={{ color: darkMode ? "#e2e8f0" : "#334155" }}>{profile.contact}</span>
                  )}
                </div>
                
                {/* Email */}
                <div className="flex items-center p-3 rounded-lg" style={{ backgroundColor: darkMode ? "rgba(15, 23, 42, 0.8)" : "rgba(241, 245, 249, 0.8)" }}>
                  <FaEnvelope className="mr-3" style={{ color: colors.primary }} />
                  {isEditing ? (
                    <input 
                      type="email" 
                      name="email" 
                      value={profile.email} 
                      onChange={handleChange} 
                      className="w-full p-1 rounded"
                      style={{ 
                        backgroundColor: darkMode ? "rgba(51, 65, 85, 0.8)" : "white",
                        color: darkMode ? "white" : "black"
                      }}
                      placeholder="Email"
                    />
                  ) : (
                    <span style={{ color: darkMode ? "#e2e8f0" : "#334155" }}>{profile.email}</span>
                  )}
                </div>
                
                {/* Skills */}
                <div className="flex items-center p-3 rounded-lg" style={{ backgroundColor: darkMode ? "rgba(15, 23, 42, 0.8)" : "rgba(241, 245, 249, 0.8)" }}>
                  <FaCode className="mr-3" style={{ color: colors.primary }} />
                  {isEditing ? (
                    <input 
                      type="text" 
                      name="skills" 
                      value={profile.skills} 
                      onChange={handleChange} 
                      className="w-full p-1 rounded"
                      style={{ 
                        backgroundColor: darkMode ? "rgba(51, 65, 85, 0.8)" : "white",
                        color: darkMode ? "white" : "black"
                      }}
                      placeholder="Skills"
                    />
                  ) : (
                    <span style={{ color: darkMode ? "#e2e8f0" : "#334155" }}>{profile.skills}</span>
                  )}
                </div>
              </div>
              
              {/* Social Links */}
              <div className="w-full mt-4">
                {isEditing ? (
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <FaGithub className="mr-3 text-gray-400" />
                      <input 
                        type="url" 
                        name="github" 
                        value={profile.github} 
                        onChange={handleChange} 
                        className="w-full p-2 rounded-md"
                        style={{ 
                          backgroundColor: darkMode ? "rgba(51, 65, 85, 0.8)" : "white",
                          color: darkMode ? "white" : "black"
                        }}
                        placeholder="GitHub URL"
                      />
                    </div>
                    <div className="flex items-center">
                      <FaLinkedin className="mr-3 text-gray-400" />
                      <input 
                        type="url" 
                        name="linkedin" 
                        value={profile.linkedin} 
                        onChange={handleChange} 
                        className="w-full p-2 rounded-md"
                        style={{ 
                          backgroundColor: darkMode ? "rgba(51, 65, 85, 0.8)" : "white",
                          color: darkMode ? "white" : "black"
                        }}
                        placeholder="LinkedIn URL"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-center space-x-6 mt-4">
                    <a 
                      href={profile.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-2xl transition-colors"
                      style={{ color: darkMode ? "#94a3b8" : "#64748b" }}
                      onMouseOver={(e) => e.currentTarget.style.color = colors.primary}
                      onMouseOut={(e) => e.currentTarget.style.color = darkMode ? "#94a3b8" : "#64748b"}
                      aria-label="GitHub Profile"
                    >
                      <FaGithub />
                    </a>
                    <a 
                      href={profile.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-2xl transition-colors"
                      style={{ color: darkMode ? "#94a3b8" : "#64748b" }}
                      onMouseOver={(e) => e.currentTarget.style.color = colors.primary}
                      onMouseOut={(e) => e.currentTarget.style.color = darkMode ? "#94a3b8" : "#64748b"}
                      aria-label="LinkedIn Profile"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                )}
              </div>
              
              {/* Action Buttons */}
              {!isEditing && (
                <div className="flex flex-col sm:flex-row gap-3 mt-6 w-full">
                  <button 
                    className="px-5 py-2 rounded-full transition-all flex items-center justify-center space-x-2 flex-1"
                    style={{ 
                      backgroundColor: darkMode ? "#334155" : "#e2e8f0",
                      color: darkMode ? "white" : "#334155"
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = darkMode ? "#475569" : "#cbd5e1";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = darkMode ? "#334155" : "#e2e8f0";
                    }}
                  >
                    <FaUserPlus /> <span>Connect</span>
                  </button>
                  <button 
                    className="px-5 py-2 rounded-full font-medium transition-all flex items-center justify-center space-x-2 flex-1"
                    style={{ 
                      backgroundColor: colors.primary,
                      color: "white"
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = "#38a3a2";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = colors.primary;
                    }}
                  >
                    <FaCommentDots /> <span>Message</span>
                  </button>
                </div>
              )}
            </div>
            
          </motion.div>
          
          {/* Content - Right Side */}
          <motion.div 
            className="w-full lg:w-2/3 bg-[#1e293b]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* About Me Section */}
            <div 
              className="p-6 rounded-2xl shadow-lg mb-6"
              style={{ 
                backgroundColor: darkMode ? colors.darkCard : colors.lightCard,
                boxShadow: darkMode ? "0 10px 15px rgba(0,0,0,0.3)" : "0 10px 15px rgba(0,0,0,0.1)"
              }}
            >
              <h3 className={`text-xl font-bold mb-4 pb-2 flex items-center`}
                  style={{ 
                    color: darkMode ? "white" : "#1e293b",
                    borderBottom: `2px solid ${colors.primary}`
                  }}
              >
                About Me
              </h3>
              {isEditing ? (
                <textarea 
                  name="about" 
                  value={profile.about} 
                  onChange={handleChange} 
                  className="w-full p-4 rounded-lg min-h-32 outline-none"
                  style={{ 
                    backgroundColor: darkMode ? "rgba(51, 65, 85, 0.8)" : "white",
                    color: darkMode ? "white" : "black",
                    border: `1px solid ${darkMode ? "#475569" : "#e2e8f0"}`,
                  }}
                />
              ) : (
                <p style={{ color: darkMode ? "#e2e8f0" : "#334155", lineHeight: "1.7" }}>{profile.about}</p>
              )}
            </div>
            
            {/* Education Section */}
            <div 
              className="p-6 rounded-2xl shadow-lg mb-6"
              style={{ 
                backgroundColor: darkMode ? colors.darkCard : colors.lightCard,
                boxShadow: darkMode ? "0 10px 15px rgba(0,0,0,0.3)" : "0 10px 15px rgba(0,0,0,0.1)"
              }}
            >
              <h3 className={`text-xl font-bold mb-4 pb-2 flex items-center`}
                  style={{ 
                    color: darkMode ? "white" : "#1e293b",
                    borderBottom: `2px solid ${colors.primary}`
                  }}
              >
                <FaUniversity className="mr-2" /> Education
              </h3>
              {isEditing ? (
                <input 
                  type="text" 
                  name="education" 
                  value={profile.education} 
                  onChange={handleChange} 
                  className="w-full p-4 rounded-lg outline-none"
                  style={{ 
                    backgroundColor: darkMode ? "rgba(51, 65, 85, 0.8)" : "white",
                    color: darkMode ? "white" : "black",
                    border: `1px solid ${darkMode ? "#475569" : "#e2e8f0"}`,
                  }}
                />
              ) : (
                <div 
                  className="p-4 rounded-xl"
                  style={{ backgroundColor: darkMode ? "rgba(15, 23, 42, 0.6)" : "rgba(241, 245, 249, 0.6)" }}
                >
                  <p style={{ color: darkMode ? "#e2e8f0" : "#334155" }}>{profile.education}</p>
                </div>
              )}
            </div>
            
            {/* Projects Section */}
            <div 
              className="p-6 rounded-2xl shadow-lg mb-6"
              style={{ 
                backgroundColor: darkMode ? colors.darkCard : colors.lightCard,
                boxShadow: darkMode ? "0 10px 15px rgba(0,0,0,0.3)" : "0 10px 15px rgba(0,0,0,0.1)"
              }}
            >
              <div className="flex justify-between items-center mb-4 pb-2"
                   style={{ borderBottom: `2px solid ${colors.primary}` }}
              >
                <h3 className={`text-xl font-bold flex items-center`}
                    style={{ color: darkMode ? "white" : "#1e293b" }}
                >
                  Projects
                </h3>
                {isEditing && (
                  <button 
                    onClick={addProject}
                    className="text-sm px-3 py-1 rounded-full transition-all"
                    style={{ 
                      backgroundColor: colors.primary,
                      color: "white"
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = "#38a3a2";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = colors.primary;
                    }}
                  >
                    + Add Project
                  </button>
                )}
              </div>
              
              <div className="space-y-4">
                <AnimatePresence>
                  {profile.projects.map((project, index) => (
                    <motion.div 
                      key={index} 
                      className="p-4 rounded-xl shadow-md relative"
                      style={{ backgroundColor: darkMode ? "rgba(15, 23, 42, 0.6)" : "rgba(241, 245, 249, 0.6)" }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, height: 0, marginBottom: 0, overflow: 'hidden' }}
                      transition={{ duration: 0.3 }}
                    >
                      {isEditing && (
                        <button 
                          onClick={() => removeProject(index)}
                          className="absolute top-2 right-2 text-red-500 hover:text-red-700 w-6 h-6 flex items-center justify-center rounded-full"
                          style={{ backgroundColor: darkMode ? "rgba(15, 23, 42, 0.8)" : "rgba(255, 255, 255, 0.8)" }}
                          aria-label="Remove project"
                        >
                          ×
                        </button>
                      )}
                      {isEditing ? (
                        <div className="space-y-2">
                          <input 
                            type="text" 
                            value={project.name} 
                            onChange={(e) => handleProjectChange(index, "name", e.target.value)} 
                            className="w-full p-2 rounded-md outline-none"
                            style={{ 
                              backgroundColor: darkMode ? "rgba(51, 65, 85, 0.8)" : "white",
                              color: darkMode ? "white" : "black",
                              border: `1px solid ${darkMode ? "#475569" : "#e2e8f0"}`,
                            }}
                          />
                          <textarea 
                            value={project.description} 
                            onChange={(e) => handleProjectChange(index, "description", e.target.value)} 
                            className="w-full p-2 rounded-md outline-none"
                            style={{ 
                              backgroundColor: darkMode ? "rgba(51, 65, 85, 0.8)" : "white",
                              color: darkMode ? "white" : "black",
                              border: `1px solid ${darkMode ? "#475569" : "#e2e8f0"}`,
                            }}
                            rows="2"
                          />
                        </div>
                      ) : (
                        <>
                          <h4 className="text-lg font-semibold mb-2" style={{ color: colors.primary }}>{project.name}</h4>
                          <p style={{ color: darkMode ? "#e2e8f0" : "#334155" }}>{project.description}</p>
                        </>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
            
            {/* Edit Button */}
            <div className="flex justify-end mt-4">
              <button 
                className="px-6 py-3 rounded-full font-medium transition-all flex items-center space-x-2 shadow-lg"
                style={{ 
                  backgroundColor: isEditing ? "#10b981" : colors.primary,
                  color: "white",
                  boxShadow: "0 4px 12px rgba(66, 182, 181, 0.3)"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = isEditing ? "#059669" : "#38a3a2";
                  e.currentTarget.style.boxShadow = "0 6px 15px rgba(66, 182, 181, 0.4)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = isEditing ? "#10b981" : colors.primary;
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(66, 182, 181, 0.3)";
                }}
                onClick={toggleEditMode}
              >
                <FaEdit /> <span>{isEditing ? "Save Profile" : "Edit Profile"}</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="">
      <Footer/>

      </div>
    </div>
  );
};

export default ProfileCard;
