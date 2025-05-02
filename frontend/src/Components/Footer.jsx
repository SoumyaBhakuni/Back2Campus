import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-10 px-8 flex flex-col items-center text-center">
      <div className="container mx-auto flex flex-col items-center">
        {/* Content */}
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-300 mb-4">Connect with us through our social media channels.</p>

        {/* Social Media Icons */}
        <div className="flex space-x-5 mt-2">
          <a
            href="https://twitter.com/example"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors duration-300"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://linkedin.com/in/example"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/example"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://instagram.com/example"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-700 my-6 w-full max-w-6xl"></div>

      {/* Copyright */}
      <div className="text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Vizion. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;