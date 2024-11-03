import React, { useState } from "react";
import TechnologyPill from "./TechnologyPill";

export default function ExperienceCard({ experience }) {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="min-w-[200px] md:w-full ml-6 -mt-2.5 rounded-md border border-blue-800 p-4 md:p-6 bg-white/10 backdrop-blur-md">
      <h3 className="text-lg md:text-xl font-bold text-blue-200">
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
        className="text-blue-400 hover:text-blue-200 text-sm underline mb-4"
        onClick={toggleShowMore}
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
      <div>
        <strong>Technologies: </strong>
        <ul className="text-sm -ms-2">
          {experience.technologies.map((tech, index) => (
            <li key={index} className="inline-block m-2">
              <TechnologyPill technology={tech} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
