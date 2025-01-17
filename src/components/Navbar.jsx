import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo2 from '../assets/images/if24wordlogo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: 'Home', to: '/' },
    { label: 'Events', to: '/events' },
    { label: 'Schedule', to: '/schedule' },
    { label: 'Rules', to: '/rules', },
    { label: 'Brochure', to: '/Brochure', target: '_blank' },
    { label: 'Rankings', to: '/ranking', },
    { label: 'Winners', to: '/winners', },
    { label: 'Our Team', to: '/team' }
  ]

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="bg-[#000000c2] md:bg-[#000000ad] text-md border-[#9797974d] border-[2px] left-2 right-2 fixed z-10 top-2 font-audiowide">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center m-auto md:m-0">
            <img src={logo2} alt="Logo" className="h-10 w-18" />
            {/* <img src={logo2} alt="Logo" className="h-16 w-auto md:px-20 scale-[2] md:scale-[2.5] -z-10" /> */}
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            {links.map(link => < NavLink
              to={link.to}
              className="text-white text-center  px-3 py-2 rounded transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </ NavLink>)}
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
            {links.map(link => < NavLink
              to={link.to}
              className="text-white text-center px-3 py-2 rounded transition duration-300 block"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </ NavLink>)}
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
