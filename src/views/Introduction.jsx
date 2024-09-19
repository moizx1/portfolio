import React from "react";
import { FaCode } from "react-icons/fa";

export default function Introduction() {
  return (
    <div className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center font-mono gap-8 md:gap-16 bg-gradient-to-br from-[#010b15] to-blue-900 px-4 relative">
      <div className="flex flex-col items-center text-center md:text-left md:items-start justify-center z-10">
        <span className="block text-lg md:text-xl font-semibold mb-2 md:mb-4">
          Hello, I am
        </span>
        <span className="text-3xl md:text-4xl lg:text-5xl text-indigo-200 font-extrabold mb-2">
          ABDUL MUIZ
        </span>
        <span className="text-lg md:text-2xl mb-4">
          Full-Stack Software Engineer
        </span>
        <span className="text-sm md:text-lg">
          React, Flutter, Spring Boot
        </span>
      </div>
      {/* Icon Section */}
      <div className="flex justify-center items-center relative z-10">
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-full">
          <FaCode className="text-6xl text-white" />
        </div>
      </div>
      {/* Floating Dots Animation */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden z-0">
        <div className="floating-dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
}
