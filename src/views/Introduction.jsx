import React from "react";

export default function Introduction() {
  return (
    <>
      <div className="min-h-screen w-full flex flex-col-reverse md:flex-row items-center justify-center font-mono gap-8 md:gap-16 bg-gradient-to-br from-[#010b15] to-blue-900 px-4">
        <div className="flex flex-col items-center text-center md:text-left md:items-start justify-center">
          <span className="block text-lg md:text-xl font-semibold mb-2 md:mb-4">
            Hello, I am
          </span>
          <span className="text-3xl md:text-4xl lg:text-5xl text-white font-extrabold mb-2">
            ABDUL MUIZ
          </span>
          <span className="text-lg md:text-2xl mb-4">
            Full-Stack Software Engineer
          </span>
          <span className="text-sm md:text-lg">
            React, Flutter, Spring Boot
          </span>
        </div>
        <div>
          <img
            src="/path-to-your-avatar.svg" // Use the path to your avatar image
            alt="Your Avatar"
            className="flex justify-center items-center rounded-full border-4 border-white shadow-lg w-32 h-32 md:w-40 md:h-40"
          />
        </div>
      </div>
    </>
  );
}
