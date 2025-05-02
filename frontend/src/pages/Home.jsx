
import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Feed from "../Components/Feed";
import Trending from "../Components/Trending";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left sidebar - Profile information */}
          <div className="md:w-1/4">
            <Sidebar />
          </div>
          
          {/* Main content - Feed */}
          <div className="md:w-2/4">
            <Feed />
          </div>
          
          {/* Right sidebar - Trending */}
          <div className="md:w-1/4">
            <Trending />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default LandingPage;