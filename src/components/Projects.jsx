import React from "react";
import ProjectCard from "./ProjectCard"; // Import the ProjectCard component
import projects from "../data/projectsData.json"; // Import your projects data

export default function Projects() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl font-bold my-8 font-mono">Projects</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 justify-items-center">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
