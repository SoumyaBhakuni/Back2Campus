import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in (using localStorage or session)
    const user = localStorage.getItem("user");
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear stored user data
    setIsAuthenticated(false);
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav className="bg-slate-800 shadow-md">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center py-2">
            <div className="rounded-md flex items-center justify-center overflow-hidden">
              <img src="/public/Vizion logoNOBG.png" alt="Vizion Logo" className="h-16 w-16 object-contain" />
            </div>
            <span className="ml-3 text-xl font-semibold text-white hidden sm:block">Vizion</span>
          </Link>

          <ul className="text-gray-200 hidden md:flex space-x-8">
            <li className="hover:text-white hover:border-b-2 hover:border-blue-400 pb-1 transition-all">
              <Link to="/internship" className="font-medium">Internship</Link>
            </li>
            <li className="hover:text-white hover:border-b-2 hover:border-blue-400 pb-1 transition-all">
              <Link to="/alumini" className="font-medium">Alumni Connect</Link>
            </li>
            <li className="hover:text-white hover:border-b-2 hover:border-blue-400 pb-1 transition-all">
              <Link to="/events" className="font-medium">Event Hub</Link>
            </li>
            <li className="hover:text-white hover:border-b-2 hover:border-blue-400 pb-1 transition-all">
              <Link to="/techtalks" className="font-medium">TechTalks</Link>
            </li>

            {isAuthenticated ? (
              <>
                <li className="hover:text-white hover:border-b-2 hover:border-blue-400 pb-1 transition-all">
                  <Link to="/profile" className="font-medium">Profile</Link>
                </li>
                <li className="hover:text-white hover:border-b-2 hover:border-blue-400 pb-1 transition-all cursor-pointer">
                  <button onClick={handleLogout} className="font-medium">Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="hover:text-white hover:border-b-2 hover:border-blue-400 pb-1 transition-all">
                  <Link to="/signup" className="font-medium">Sign Up</Link>
                </li>
                <li className="hover:text-white hover:border-b-2 hover:border-blue-400 pb-1 transition-all">
                  <Link to="/login" className="font-medium">Login</Link>
                </li>
              </>
            )}
          </ul>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-blue-400 hover:text-white transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-slate-700 rounded-md shadow-lg">
            <ul className="text-gray-200 flex flex-col py-2">
              <li className="hover:bg-slate-600 transition-colors">
                <Link to="/internship" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 font-medium">
                  Job/Internship Opportunities
                </Link>
              </li>
              <li className="hover:bg-slate-600 transition-colors">
                <Link to="/alumini" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 font-medium">
                  Alumni Connect
                </Link>
              </li>
              <li className="hover:bg-slate-600 transition-colors">
                <Link to="/events" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 font-medium">
                  Event Hub
                </Link>
              </li>
              <li className="hover:bg-slate-600 transition-colors">
                <Link to="/techtalks" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 font-medium">
                  TechTalks
                </Link>
              </li>

              {isAuthenticated ? (
                <>
                  <li className="hover:bg-slate-600 transition-colors">
                    <Link to="/profile" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 font-medium">
                      Profile
                    </Link>
                  </li>
                  <li className="hover:bg-slate-600 transition-colors">
                    <button onClick={handleLogout} className="block px-4 py-3 font-medium w-full text-left">
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="hover:bg-slate-600 transition-colors">
                    <Link to="/signup" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 font-medium">
                      Sign Up
                    </Link>
                  </li>
                  <li className="hover:bg-slate-600 transition-colors">
                    <Link to="/login" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 font-medium">
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
