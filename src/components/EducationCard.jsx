import React, { useState } from "react";

export default function EducationCard({ education }) {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="mr-6 -mt-2 rounded-md border border-blue-400 p-4 md:p-6 bg-white/10 backdrop-blur-md shadow-lg">
      <h3 className="text-lg md:text-xl font-bold text-blue-400">
        {education.degree}
      </h3>
      <p className="font-semibold">
        {education.institution}, {education.location}
      </p>
      <p className="text-xs md:text-sm mb-2">
        {education.startDate} - {education.endDate}
      </p>
      <p className={`text-sm text-justify ${!showMore ? "line-clamp-3" : ""}`}>
        {education.description}
      </p>
      <button
        className="text-blue-400 text-sm underline mb-4"
        onClick={toggleShowMore}
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}
