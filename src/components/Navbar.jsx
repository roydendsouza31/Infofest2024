import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/infofestlogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center m-auto md:m-0">
            <img src={logo} alt="Logo" className="h-10 w-18" />
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link
              to="/"
              className="text-white text-center hover:bg-blue-700 px-3 py-2 rounded transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/event"
              className="text-white text-center hover:bg-blue-700 px-3 py-2 rounded transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Event
            </Link>
            <Link
              to="/ranking"
              className="text-white text-center hover:bg-blue-700 px-3 py-2 rounded transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Ranking
            </Link>
            <Link
              to="/schedule"
              className="text-white text-center hover:bg-blue-700 px-3 py-2 rounded transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Schedule
            </Link>
            <Link
              to="/rules"
              className="text-white text-center hover:bg-blue-700 px-3 py-2 rounded transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Rules
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleNavbar} className="text-gray-200 hover:text-white focus:outline-none">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-white text-center hover:bg-blue-700 px-3 py-2 rounded transition duration-300 block"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/event"
              className="text-white text-center hover:bg-blue-700 px-3 py-2 rounded transition duration-300 block"
              onClick={() => setIsOpen(false)}
            >
              Event
            </Link>
            <Link
              to="/ranking"
              className="text-white text-center hover:bg-blue-700 px-3 py-2 rounded transition duration-300 block"
              onClick={() => setIsOpen(false)}
            >
              Ranking
            </Link>
            <Link
              to="/schedule"
              className="text-white text-center hover:bg-blue-700 px-3 py-2 rounded transition duration-300 block"
              onClick={() => setIsOpen(false)}
            >
              Schedule
            </Link>
            <Link
              to="/rules"
              className="text-white text-center hover:bg-blue-700 px-3 py-2 rounded transition duration-300 block"
              onClick={() => setIsOpen(false)}
            >
              Rules
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
