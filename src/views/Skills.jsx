import React from "react";
import { FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiFlutter,
  SiSpringboot,
  SiFirebase,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";
import { DiJava } from "react-icons/di";

export default function Skills() {
  const skills = [
    { name: "ReactJS", icon: <FaReact className="text-blue-400" /> },
    { name: "SQL/MySQL", icon: <SiMysql className="text-blue-600" /> },
    { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
    { name: "Flutter", icon: <SiFlutter className="text-blue-400" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    { name: "Java", icon: <DiJava className="text-red-600" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col py-12 bg-gradient-to-br from-[#010b15] to-blue-900">
      <h1 className="text-5xl font-bold mb-16 text-center font-mono text-white">
        Skills
      </h1>
      <div className="flex flex-1 justify-center items-center pb-16">
        <div className="w-10/12 md:w-3/4 lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-md border border-blue-400 p-3 bg-white/10 backdrop-blur-md"
            >
              <div className="text-6xl">{skill.icon}</div>
              <p className="text-sm font-semibold text-gray-300 mt-2">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
