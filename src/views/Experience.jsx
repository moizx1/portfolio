import React from "react";
import experiences from "../data/experienceData.json";
import ExperienceCard from "../components/ExperienceCard";

export default function Experience() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <h1 className="text-5xl font-bold mt-14 mb-4">Experience</h1>

    <div className="border-s-[0.1235rem] border-blue-800 m-16 w-3/4 sm:w-2/3 md:w-2/4">
      {experiences.map((experience, index) => (
        <div key={experience.id} className={experiences.length-1 === index ? '' : 'mb-6'}>
          {/* Timeline Dot and Date */}
          <div className="-ms-[6.5px] me-3 h-[12px] w-[12px] rounded-full bg-blue-400"></div>
          
          <ExperienceCard experience={experience} />
        </div>
      ))}
    </div>
    </div>
  );
}
