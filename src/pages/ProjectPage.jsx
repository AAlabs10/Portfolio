// src/pages/ProjectsPage.jsx
import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "FitForge",
    image: "public/Fitforge.png",
    techStack: ["React", "Tailwind", "Node.js"],
    description: "A modern fitness website.",
    liveLink: "http://fit-forge-flax.vercel.app",
    githubLink: "https://github.com/AAlabs10/fitforge",
  },
];

export default function ProjectPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
     {projects.map((proj) => (
  <ProjectCard key={proj.title} project={proj} />
))}
    </div>
  );
}
