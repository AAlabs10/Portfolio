import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const Hero = () => {
  return (
    <section className=" dark:min-w-full dark:min-h-screen  bg-white-800 dark:bg-gray-800 text-white-800 flex items-center justify-center px-4 md:px-10 py-16">
   <div className="dark: mx-auto grid grid-cols-1  md:grid-cols-2 gap-10 ml-3 items-center">

        
        {/* Left: Profile Image */}
        <div className="flex justify-center">
          <img
            src={"Adetoye.jpg"}
            alt="Adetoye"
            className="w-65 h-65 rounded-xl object-cover shadow-lg border border-gray-300"
          />
        </div>

        {/* Right: Introduction Content */}
        <div>
          <h1 className="text-4xl font-bold mb-4 text-white-900">Hi, I'm Adetoye Adeniran</h1>
          <p className="text-lg text-white-600 mb-4">
           I’m a Frontend Developer and UI/UX Designer passionate about building clean, responsive, and user-friendly interfaces.
            I combine design thinking with frontend tools like React, Tailwind CSS,
            and JavaScript to create seamless digital experiences that are both functional and visually engaging.
          </p>
          <p className="text--600 mb-6">
            I thrive on transforming design challenges into elegant, functional solutions through code.
             With a passion for both design and development, I bring ideas to life by crafting intuitive user interfaces and seamless user experiences —
              all while staying current with the latest trends and tools in modern web development
          </p>
          <Link
            to="/about"
            className="inline-block px-6 py-3 bg-gray-800 dark:bg-white text-white dark:text-gray-900 rounded-md hover:bg-gray-700 transition"
            ext-gray-900 dark:text-white
          >
            MORE ABOUT ME
          </Link>

          
        </div>

      </div>
    </section>
  );
};

export default Hero; 