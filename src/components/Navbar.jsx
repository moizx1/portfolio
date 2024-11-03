import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const NAV_LINKS = [
  { to: "home", label: "Home" },
  { to: "skills", label: "Skills" },
  { to: "projects", label: "Projects" },
  { to: "experience", label: "Experience" },
  { to: "education", label: "Education" },
];

export default function Navbar({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const NavLinks = ({ mobile = false }) => (
    <>
      {NAV_LINKS.map((link) => (
        <button
          key={link.to}
          className={`transition-colors duration-300 px-6 py-2 rounded-full ${mobile ? "block w-full text-left" : ""}
            ${
              activeSection === link.to
                ? "bg-blue-600/70 hover:bg-blue-500 text-white"
                : "text-indigo-200 hover:bg-white hover:text-blue-600"
            }`}
          onClick={() => scrollToSection(link.to)}
        >
          {link.label}
        </button>
      ))}
    </>
  );

  return (
    <nav className="fixed top-0 left-0 w-full border-b border-slate-300/10 backdrop-blur py-4 z-40">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <h1 className="text-2xl font-bold text-indigo-100 pr-10">Portfolio</h1>

        <button
          className="lg:hidden text-indigo-200 hover:text-indigo-500 transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
        </button>

        <div className="hidden lg:flex space-x-6">
          <NavLinks />
        </div>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:hidden absolute top-full right-0 bg-gray-800/90 w-1/2 px-4 py-6 mt-2 mr-2 rounded-md border border-gray-600`}
      >
        <div className="space-y-2">
          <NavLinks mobile />
        </div>
      </div>
    </nav>
  );
}
