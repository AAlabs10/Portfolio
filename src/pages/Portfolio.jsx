import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
  FaGithub,
} from 'react-icons/fa';

const Portfolio = () => {
  return (
    <section className="w-full min-h-screen bg-white text-gray-800 px-4 md:px-16 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          My Portfolio
        </h2>

        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">Tech Stack</h3>
          <div className="flex flex-wrap gap-8 text-5xl text-gray-700">
            <FaHtml5 title="HTML5" className="hover:text-orange-500 transition" />
            <FaCss3Alt title="CSS3" className="hover:text-blue-500 transition" />
            <FaJs title="JavaScript" className="hover:text-yellow-400 transition" />
            <FaReact title="React" className="hover:text-cyan-500 transition" />
            <FaGithub title="GitHub" className="hover:text-black transition" />
          </div>
        </div>

        {/* Design Tools */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">Design Tools</h3>
          <div className="flex gap-6 text-5xl text-gray-700">
            <FaFigma title="Figma" className="hover:text-purple-600 transition" />
            {/* Add other icons like Adobe XD, Sketch if needed */}
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="border rounded-lg p-6 shadow-sm bg-gray-50 hover:shadow-md transition">
              <h4 className="text-xl font-bold mb-2">Responsive Portfolio</h4>
              <p className="text-gray-600 mb-4">
                A clean portfolio built with React and Tailwind CSS showcasing my skills and projects.
              </p>
              <Link
                to="/projects"
                className="text-blue-600 hover:underline"
              >
                View Project →
              </Link>
            </div>

            {/* Project 2 */}
            <div className="border rounded-lg p-6 shadow-sm bg-gray-50 hover:shadow-md transition">
              <h4 className="text-xl font-bold mb-2">UI Dashboard Design</h4>
              <p className="text-gray-600 mb-4">
                A sleek UI dashboard for tracking analytics and stats — designed in Figma.
              </p>
              <Link
                to="/design"
                className="text-blue-600 hover:underline"
              >
                View Design →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
