// // src/components/ProjectCard.jsx
// import React from 'react';

// const ProjectCard = ({ project }) => {
//   return (
//     <div className="flex flex-col border border-zinc-600 bg-[#0f0f0f] hover:border-zinc-400 transition-colors duration-300 h-full">
      
//       {/* Image Container */}
//       <div className="h-56 overflow-hidden border-b border-zinc-800 relative group">
//         <img 
//           src={project.image} 
//           alt={project.title} 
//           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//         />
//         {/* Dark Overlay (Optional, for style) */}
//         <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
//       </div>

//       {/* Content Container */}
//       <div className="p-6 flex flex-col flex-grow">
        
//         {/* Tech Stack */}
//         <div className="mb-3">
//           <p className="text-zinc-400 text-sm font-mono tracking-wide">
//             {project.techStack}
//           </p>
//         </div>

//         {/* Title */}
//         <h3 className="text-2xl font-bold text-white mb-4">
//           {project.title}
//         </h3>

//         {/* Description */}
//         <p className="text-zinc-400 text-base leading-relaxed mb-8 flex-grow">
//           {project.description}
//         </p>

//         {/* Buttons */}
//         <div className="flex gap-4 mt-auto">
//           <a 
//             href={project.liveLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="border border-white px-5 py-2 text-white font-mono text-sm hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2"
//           >
//             Live <span>↔</span>
//           </a>
          
//           <a 
//             href={project.githubLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="border border-white px-5 py-2 text-white font-mono text-sm hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2"
//           >
//             Github <span>&gt;</span>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;