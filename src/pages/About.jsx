import React from 'react';

const About = () => {
  return (
    <section className="min-h-screen px-6 py-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-full mx-auto">
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">About Me</h1>

        {/* Intro */}
        <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
          <p>
            Hi, I'm <span className="font-semibold text-gray-900 dark:text-white">Adetoye Adeniran</span> — a passionate
            <span className="font-semibold"> Frontend Developer </span> and
            <span className="font-semibold"> UI/UX Designer</span> based in Nigeria.
          </p>

          <p>
            I specialize in crafting responsive, accessible, and visually appealing web interfaces using modern technologies like <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>JavaScript</strong>. With a strong foundation in both design and development, I’m able to transform ideas into seamless user experiences that are functional and beautiful.
          </p>

          <p>
            As a designer, I focus on user-first design, intuitive navigation, and clean layouts. As a developer, I love translating those designs into code that works across all devices and browsers. I’m constantly learning, adapting to new trends, and staying updated with the latest in web development and design.
          </p>

          <p>
            When I’m not coding or designing, I enjoy exploring UI inspiration, contributing to side projects, and learning new tools that help me grow creatively and technically.
          </p>
        </div>

        {/* Key Highlights */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">What I Do</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Build responsive and performant websites with React and Tailwind CSS</li>
            <li>Design user-centered interfaces and experiences in Figma</li>
            <li>Create wireframes, prototypes, and design systems</li>
            <li>Optimize for accessibility and mobile-first performance</li>
            <li>Collaborate with clients and developers to bring designs to life</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;

