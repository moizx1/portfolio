import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function HoverLinks() {
  return (
    <div className='fixed left-0 top-1/2 transform -translate-y-1/2 p-2 space-y-4 z-50  text-white'>
      <div className='flex flex-col items-center space-y-4 bg-gray-700 p-3 rounded-full shadow-lg hover:bg-gray-800'>
        <a href="https://github.com/moizx1" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
          <FaGithub size={24} />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  );
}
