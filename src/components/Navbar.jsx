import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/infofestlogo.png';
import { motion } from 'framer-motion';
// import logo2 from '../assets/images/IFtest.svg';
import logo2 from '../assets/images/ifwordmk2.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="bg-[#000000c2] md:bg-[#000000ad] font-semibold text-md border-[#9797974d] border-[2px] left-2 right-2 fixed z-10 top-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center m-auto md:m-0">
            {/* <img src={logo} alt="Logo" className="h-10 w-18" /> */}
            <img src={logo2} alt="Logo" className="h-48 w-54" />
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            < NavLink
              to="/"
              className="text-white text-center  px-3 py-2 rounded transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </ NavLink>
            < NavLink
              to="/event"
              className="text-white text-center  px-3 py-2 rounded transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Event
            </ NavLink>
            < NavLink
              to="/ranking"
              className="text-white text-center  px-3 py-2 rounded transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Ranking
            </ NavLink>
            < NavLink
              to="/schedule"
              className="text-white text-center  px-3 py-2 rounded transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Schedule
            </ NavLink>
            < NavLink
              to="/schedule"
              className="text-white text-center  px-3 py-2 rounded transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Brochure
            </ NavLink>
            < NavLink
              to="/rules"
              className="text-white text-center  px-3 py-2 rounded transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Rules
            </NavLink>
            <NavLink
              to="/team"
              className="text-white text-center hover:bg-blue-700 px-3 py-2 rounded transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Our Team
            </NavLink>
            < NavLink
              to="/about"
              className="text-white text-center  px-3 py-2 rounded transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </ NavLink>
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
            < NavLink
              to="/"
              className="text-white text-center px-3 py-2 rounded transition duration-300 block"
              onClick={() => setIsOpen(false)}
            >
              Home
            </ NavLink>
            < NavLink
              to="/event"
              className="text-white text-center  px-3 py-2 rounded transition duration-300 block"
              onClick={() => setIsOpen(false)}
            >
              Event
            </ NavLink>
            < NavLink
              to="/ranking"
              className="text-white text-center  px-3 py-2 rounded transition duration-300 block"
              onClick={() => setIsOpen(false)}
            >
              Ranking
            </ NavLink>
            < NavLink
              to="/schedule"
              className="text-white text-center  px-3 py-2 rounded transition duration-300 block"
              onClick={() => setIsOpen(false)}
            >
              Schedule
            </ NavLink>
            < NavLink
              to="/rules"
              className="text-white text-center  px-3 py-2 rounded transition duration-300 block"
              onClick={() => setIsOpen(false)}
            >
              Rules
            </NavLink>
            <NavLink
              to="/team"
              className="text-white text-center hover:bg-blue-700 px-3 py-2 rounded transition duration-300 block"
              onClick={() => setIsOpen(false)}
            >
              Our Team
            </NavLink>
            <NavLink
              to="/about"
              className="text-white text-center hover:bg-blue-700 px-3 py-2 rounded transition duration-300 block"
              onClick={() => setIsOpen(false)}
            >
              About us
            </NavLink>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
