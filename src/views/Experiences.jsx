import experiences from "../data/experienceData.json";
import ExperienceCard from "../components/ExperienceCard";

export default function ExperienceTimeline() {
  return (
    <div className="h-screen bg-gradient-to-br from-[#010b15] to-blue-900 font-mono mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Experience</h1>
      <div className="relative">
        {/* <div className="absolute left-4 md:left-6 top-0 bottom-0 w-1 bg-gray-300"></div> */}
        <div className="ml-10">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </div>
  );
}
