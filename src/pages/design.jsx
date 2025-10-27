import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function Design() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-semibold mb-4">
        Doctor Appointment Website
      </h2>

      {/* Small Rectangle Preview */}
      <div
        onClick={handleOpen}
        className="cursor-pointer inline-block overflow-hidden rounded-xl shadow-lg border border-gray-200 hover:scale-105 transform transition duration-300"
      >
        <img
          src="/Appointment App.jpg"
          alt="Doctor Appointment Website Design"
          className="w-72 h-48 object-cover"
        />
      </div>

      {/* Modal (Expanded Image) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <div className="relative max-w-5xl mx-auto">
            <img
              src="/Appointment App.jpg"
              alt="Doctor Appointment Website Design"
              className="rounded-2xl shadow-2xl max-h-[95vh] w-70 mx-auto"
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
