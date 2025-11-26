import React, { useState } from "react";

export default function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!project) return null;

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="flex flex-col border border-zinc-600 bg-[#0f0f0f] hover:border-zinc-400 transition-colors duration-300 h-full">
      
      {/* Image Container */}
      <div
        className="h-56 overflow-hidden border-b border-zinc-800 relative group cursor-pointer"
        onClick={handleOpen}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col flex-grow">
        {project.techStack && (
          <div className="mb-3">
            <p className="text-zinc-400 text-sm font-mono tracking-wide">
              {project.techStack.join(", ")}
            </p>
          </div>
        )}

        <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>

        {project.description && (
          <p className="text-zinc-400 text-base leading-relaxed mb-8 flex-grow">
            {project.description}
          </p>
        )}

        <div className="flex gap-4 mt-auto">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-5 py-2 text-white font-mono text-sm hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2"
            >
              Live <span>↔</span>
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-5 py-2 text-white font-mono text-sm hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2"
            >
              GitHub <span>&gt;</span>
            </a>
          )}
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 overflow-auto p-4"
          onClick={handleClose}
        >
          <div
            className="relative w-full max-w-5xl max-h-[90vh] mx-auto my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-2xl shadow-2xl w-full h-auto max-h-[90vh] object-contain"
            />
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 bg-white rounded-full p-2 text-black font-bold shadow-md hover:bg-gray-200"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
