import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfoilo';
import Web from './pages/Web';
import Design from './Design';

function App() {
  return (
    <Router>
      <div className="min-h-screen dark:min-h-screen overflow-visible flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        <main className="flex-grow flex">
          <Routes>
            <Route path="/" element={<Hero />} />
             <Route path="/about" element={<About/>} />
              <Route path="/contact" element={<Contact/>} />
               <Route path="/resume" element={<Resume/>} />
               <Route path="/portfoilo" element={<Portfolio/>} />
                 <Route path="/web" element={<Web/>} />
                 <Route path="design" element={<Design/>} />

          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
