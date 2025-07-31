import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Contact = () => {
  return (
    <section className="min-h-screen px-6 py-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-full mx-auto ">
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">Get in Touch</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center">


          {/* Left: Contact Info */}
          <div className="space-y-4 px-1 md:px-8">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I’m open to freelance projects, collaborations, or any frontend and UI/UX design opportunities. Feel free to reach out!
            </p>

            <div className="space-y-2">
              <p><strong>Email:</strong> <a href="mailto:Adetoyeseadeniran25@gmail.com" className="text-blue-600 dark:text-blue-400">Adetoyeseadeniran25@gmail.com</a></p>
              <p><strong>Phone:</strong> +234-901-572-3473</p>
              <p><strong>Location:</strong> Lagos, Nigeria</p>
            </div>

            <div className="flex space-x-4 mt-4">
              <Link to="https://github.com/AAlabs10" target="_blank" rel="noopener noreferrer" className="hover:underline">
                GitHub
              </Link>
              <Link to="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:underline">
                LinkedIn
              </Link>
              <Link to="https://dribbble.com/adeniran-adetoyese" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Dribbble
              </Link>
               <Link to="https://behance.net/adeniranadetoye" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Behance
              </Link>
            </div>
          </div>

          {/* Right: Contact Form */}
   <form
  action="https://formsubmit.co/adetoyeseadeniran25@gmail.com"
  method="POST"
  className="space-y-4 px-4 md:px-8"
>
  <div>
    <label className="block mb-1 font-medium" htmlFor="name">Name</label>
    <input
      type="text"
      id="name"
      name="name"
      className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
      placeholder="Your Name"
      required
    />
  </div>
  <div>
    <label className="block mb-1 font-medium" htmlFor="email">Email</label>
    <input
      type="email"
      id="email"
      name="email"
      className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
      placeholder="your@email.com"
      required
    />
  </div>
  <div>
    <label className="block mb-1 font-medium" htmlFor="message">Message</label>
    <textarea
      id="message"
      name="message"
      rows="5"
      className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
      placeholder="Write your message..."
      required
    />
  </div>
  <button
    type="submit"
    className="px-6 py-3 bg-gray-800 text-white dark:bg-white dark:text-gray-900 rounded-md hover:bg-gray-700 transition"
  >
    Send Message
  </button>
</form>

        </div>
      </div>
    </section>
  );
};

export default Contact;

