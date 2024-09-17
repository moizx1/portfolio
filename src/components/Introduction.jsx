import React from "react";

export default function Introduction() {
  return (
    <>
      <div className="min-h-screen w-full flex flex-col-reverse md:flex-row items-center justify-center font-mono gap-16 md:gap-72 bg-gradient-to-br from-[#010b15] to-blue-900">
        <div className="text-3xl font-bold lg:text-[2rem]">
          <span className="block text-xl font-semibold mb-4">Hello, I am</span>
          <span className="block text-5xl text-white md:font-extrabold lg:text-[2.6rem] mb-2">
            ABDUL MUIZ
          </span>
          <span className="block mb-4">Full-Stack Software Engineer</span>
          <span className="block text-xl">React, Flutter, Spring Boot</span>
        </div>
        <div>
          <img
            src="/path-to-your-avatar.svg" // Use the path to your avatar image
            alt="Your Avatar"
            className="flex items-center justify-center rounded-full border-4 border-white shadow-lg w-40 h-40"
          />
        </div>
      </div>
    </>
  );
}
