import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Introduction from "./views/Introduction";
import HoverLinks from "./views/HoverLinks";
import Skills from "./views/Skills";
import Projects from "./views/Projects";
import Experience from "./views/Experience";
import Education from "./views/Education";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }  // Section must be 50% visible to trigger
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div>
      <Navbar activeSection={activeSection} />
      <HoverLinks />
      <main>
        <section id="home">
          <Introduction />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="education">
          <Education />
        </section>
      </main>
    </div>
  );
}

export default App;
