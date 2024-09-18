import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between bg-gradient-to-tr from-[#010b15] to-blue-900 px-auto py-4">
      <h1 className="text-white text-2xl font-bold">Portfolio</h1>
      <div>
        <NavLink
          to="/"
          exact
          className="text-gray-300"
          activeClassName="hover:text-gray-300"
        >
          Home
        </NavLink>
      </div>
    </nav>
  );
}
