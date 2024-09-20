import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";

export default function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Python", icon: <FaPython className="text-blue-300" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-[#010b15] to-blue-900">
      <h1 className="text-5xl font-bold mt-14 mb-4 font-mono text-white">
        Skills
      </h1>

      <div className="w-3/4 flex flex-grow flex-wrap justify-center items-center gap-6 mt-6 mb-40">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-md border border-blue-400 p-4 md:p-6 bg-white/10 backdrop-blur-md"
          >
            <div className="text-6xl">{skill.icon}</div>
            <p className="text-sm font-semibold text-gray-300 mt-2">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
