import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import TechnologyPill from "./TechnologyPill";

export default function ProjectCard({ project }) {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="flex flex-col justify-between w-auto overflow-hidden font-mono rounded-lg border border-blue-800 p-3 bg-white/10 backdrop-blur-md">
      <div className="p-6">
        <h1 className="text-blue-200 text-lg md:text-xl font-bold mb-4">
          {project.title}
        </h1>

        <div>
          <p className={`text-justify text-gray-300 text-sm ${!showMore ? "line-clamp-3" : ""}`}>
            {project.description}
          </p>
          <button className="text-blue-400 hover:text-blue-200 text-sm underline mb-4" onClick={toggleShowMore}>
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>

        <div className="mb-4">
          <strong className="text-gray-200">Technologies:</strong>
          <ul className="text-gray-400 text-sm -ms-2">
            {project.technologies.map((technology, index) => (
              <li key={index} className="inline-block m-2">
                <TechnologyPill technology={technology}/>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex items-center space-x-4 p-6 justify-between">
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-[#010b15] rounded-full text-white hover:bg-gray-800"
        >
          <FaGithub size={24} />
        </a>
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-900 text-white font-semibold rounded hover:bg-gray-500 transition"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}