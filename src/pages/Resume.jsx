import React from 'react';

const Resume = () => {
  return (
    <section className="min-h-screen px-6 py-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-full mx-auto">
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">My Resume</h1>

        {/* Summary */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Professional Summary</h2>
          <p className="text-gray-700 dark:text-gray-300">
            I’m a passionate Frontend Developer and UI/UX Designer with experience in building responsive, accessible, and user-focused interfaces. I specialize in React, Tailwind CSS, and JavaScript, blending design and code to create seamless digital experiences.
          </p>
        </div>

        {/* Skills */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Skills</h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
            <li>HTML, CSS, JavaScript (ES6+)</li>
            <li>React, Tailwind CSS, Next.js</li>
            <li>UI/UX Design – Figma</li>
            <li>Responsive & Mobile-First Design</li>
            <li>Version Control – Git & GitHub</li>
            <li>Design Systems & Prototyping</li>
          </ul>
        </div>

        {/* Experience */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Experience</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold">Frontend Developer — Freelance</h3>
            <p className="text-sm text-gray-500">Remote | 2022 – Present</p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
              <li>Developed responsive web applications using React and Tailwind CSS.</li>
              <li>Worked closely with clients to translate UI/UX mockups into production-ready code.</li>
              <li>Improved website accessibility and performance across devices.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">UI/UX Designer — Contract</h3>
            <p className="text-sm text-gray-500">Various Projects | 2021 – Present</p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
              <li>Designed user flows, wireframes, and high-fidelity prototypes using Figma.</li>
              <li>Collaborated with frontend teams to ensure pixel-perfect implementation.</li>
              <li>Conducted user research and usability testing to guide design decisions.</li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Education</h2>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Self-Taught / Aptech Osogobo</strong> – Completed several frontend development and UI/UX design courses via platforms like Udemy, FreeCodeCamp, and Coursera.
          </p>
        </div>

        {/* Download Button */}
        <div className="mt-6">
          <a
            href="/public/Adetoye CV.doc" // Replace with your actual resume file
            download
            className="inline-block bg-gray-800 text-white dark:bg-white dark:text-gray-900 px-6 py-3 rounded-md hover:bg-gray-700 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;

