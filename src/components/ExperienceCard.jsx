import React from "react";

export default function ExperienceCard({ experience }) {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start md:items-start mb-8">
      {/* Left: Dot */}
      <div className="relative flex items-start">
        <div className="w-3 h-3 bg-blue-700 rounded-full mt-1"></div>
        {/* Optionally, you can add a vertical line */}
        <div className="absolute left-1 top-6 h-48 w-1 bg-gray-300"></div>
      </div>

      {/* Right: Experience Details */}
      <div className="ml-4 md:ml-8 w-full md:w-1/2 rounded-md border border-blue-400 p-6 pt-4">
        <h3 className="text-xl font-bold text-blue-900">{experience.role}</h3>
        <p className="text-gray-600 font-semibold">
          {experience.company}, {experience.location}
        </p>
        <p className="text-sm text-gray-500 mb-2">{experience.date}</p>
        <p className="text-gray-700 mb-2">{experience.description}</p>
        <ul className="text-gray-600 text-sm">
          <strong>Technologies: </strong>
          {experience.technologies.map((tech, index) => (
            <li key={index} className="inline-block mr-2">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
