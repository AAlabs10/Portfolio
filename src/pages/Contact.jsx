import React from 'react';

const Contact = () => {
  return (
    <section className="min-h-screen px-6 py-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-full mx-auto">
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">Get in Touch</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Left: Contact Info */}
          <div className="space-y-4">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I’m open to freelance projects, collaborations, or any frontend and UI/UX design opportunities. Feel free to reach out!
            </p>

            <div className="space-y-2">
              <p><strong>Email:</strong> <a href="mailto:Adetoyeseadeniran25@gmail.com" className="text-blue-600 dark:text-blue-400">Adetoyeseadeniran25@gmail.com</a></p>
              <p><strong>Phone:</strong> +234-901-572-3473</p>
              <p><strong>Location:</strong> Lagos, Nigeria</p>
            </div>

            <div className="flex space-x-4 mt-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:underline">
                GitHub
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:underline">
                LinkedIn
              </a>
              <a href="https://dribbble.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Dribbble
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
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
                className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="message">Message</label>
              <textarea
                id="message"
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

