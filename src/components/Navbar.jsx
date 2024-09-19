import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between bg-gradient-to-tr from-[#010b15] to-blue-900 px-auto py-4">
      <h1 className="text-indigo-100 text-2xl font-bold m-auto">Portfolio</h1>
      <div className="m-auto">
        <NavLink
          to="/"
          exact
          className="text-indigo-200 m-auto"
          activeClassName="hover:text-indigo-500"
        >
          Home
        </NavLink>
        {/* <NavLink
          to="/"
          exact
          className="text-gray-300 m-auto"
          activeClassName="hover:text-gray-300"
        >
          Projects
        </NavLink>
        <NavLink
          to="/"
          exact
          className="text-gray-300 m-auto"
          activeClassName="hover:text-gray-300"
        >
          Experience
        </NavLink>
        <NavLink
          to="/"
          exact
          className="text-gray-300 m-auto"
          activeClassName="hover:text-gray-300"
        >
          Education
        </NavLink> */}
      </div>
    </nav>
  );
}
