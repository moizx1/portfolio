import React from "react";
import ProjectCard from "../components/ProjectCard"; 
import projects from "../data/projectsData.json"; 

export default function Projects() {
  return (
    <div className="bubble relative min-h-screen flex flex-col items-center py-12 font-mono">
      <h1 className="text-5xl font-bold mb-16">Projects</h1>
      <div className="grid grid-cols-1 justify-items-center gap-6 px-8 sm:10 md:px-16 lg:px-24 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}