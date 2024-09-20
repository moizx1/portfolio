import React from "react";
import educationData from "../data/educationData.json"; // JSON file with education data
import EducationCard from "../components/EducationCard";

export default function Education() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <h1 className="text-5xl font-bold mt-14 mb-4 font-mono">Education</h1>
      <div className="border-e-[0.1235rem] border-blue-600 m-16 w-3/4 sm:w-2/3 md:w-2/4">
        {educationData.map((education, index) => (
          <div
            key={education.id}
            className={`${
              educationData.length - 1 === index ? "" : "mb-6"
            } flex flex-col items-end`}
          >
            {/* Timeline Dot and Date */}
            <div className="-me-[6.5px] ms-3 h-[12px] w-[12px] rounded-full bg-blue-400"></div>

            <EducationCard education={education} />
          </div>
        ))}
      </div>
    </div>
  );
}
