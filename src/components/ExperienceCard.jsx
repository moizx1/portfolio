import React, { useState } from "react";

export default function ExperienceCard({ experience }) {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="ml-6 -mt-2 rounded-md border border-blue-400 p-4 md:p-6 bg-white/10 backdrop-blur-md shadow-lg">
      <h3 className="text-lg md:text-xl font-bold text-blue-400">
        {experience.role}
      </h3>
      <p className="font-semibold">
        {experience.company}, {experience.location}
      </p>
      <p className="text-xs md:text-sm mb-2">{experience.date}</p>
      <p className={`text-sm text-justify ${!showMore ? "line-clamp-3" : ""}`}>
        {experience.description}
      </p>
      <button
        className="text-blue-400 text-sm underline mb-4"
        onClick={toggleShowMore}
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
      <ul className="text-sm">
        <strong>Technologies: </strong>
        {experience.technologies.map((tech, index) => (
          <li key={index} className="inline-block mr-2">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}
