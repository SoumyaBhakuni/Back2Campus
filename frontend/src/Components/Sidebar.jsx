
import React from "react";

const Sidebar = () => {
  return (
    <div className="space-y-4">
      {/* Profile card */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Teal header */}
        <div className="h-16 bg-[#42b6b5]"></div>
        
        <div className="relative px-4 pb-4">
          {/* Profile image overlapping header */}
          <img 
            src="/hero.png" 
            alt="Profile" 
            className="w-24 h-24 rounded-full border-4 border-white absolute -top-24 left-1/2 transform -translate-x-1/2" 
          />
          
          {/* Profile info */}
          <div className="mt-14 text-center">
            <h2 className="font-bold text-lg text-[#1e293b]">Arpit Joshi</h2>
            <p className="text-sm text-gray-500">Full Stack Developer | MERN Stack</p>
          </div>
          
          {/* Profile stats */}
          <div className="mt-4 border-t border-b border-gray-200 py-2">
            <div className="flex justify-between items-center py-1 hover:bg-gray-50 px-2 rounded">
              <span className="text-sm text-gray-500">Profile viewers</span>
              <span className="text-sm font-medium text-[#42b6b5]">92</span>
            </div>
            <div className="flex justify-between items-center py-1 hover:bg-gray-50 px-2 rounded">
              <span className="text-sm text-gray-500">Post impressions</span>
              <span className="text-sm font-medium text-[#42b6b5]">13</span>
            </div>
          </div>
          
          {/* My items section */}
          <div className="mt-4">
            <h3 className="font-medium text-sm mb-2">My items</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600 flex items-center hover:text-[#42b6b5]">
                <span className="mr-2">📑</span>
                <span>Saved posts</span>
              </li>
              <li className="text-sm text-gray-600 flex items-center hover:text-[#42b6b5]">
                <span className="mr-2">👥</span>
                <span>My network</span>
              </li>
              <li className="text-sm text-gray-600 flex items-center hover:text-[#42b6b5]">
                <span className="mr-2">📅</span>
                <span>Events</span>
              </li>
              <li className="text-sm text-gray-600 flex items-center hover:text-[#42b6b5]">
                <span className="mr-2">👥</span>
                <span>Groups</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;