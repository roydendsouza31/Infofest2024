import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import bg from '../assets/images/bg-city.png';
import dayjs from 'dayjs';
import abdm from '../assets/images/sponsors/ABDM.webp';
import betibacho from '../assets/images/sponsors/Beti_Bachao_Beti_Padhao.webp';
import ntep from '../assets/images/sponsors/NTEP.webp';
import logo from '../assets/images/infofestlogo.png';
import goait from '../assets/images/sponsors/Goa_IT_Department.webp';
import { Meteors } from './ui/meteors';

const Hero = () => {
  const targetDate = dayjs('2024-08-10');
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const remainingTime = targetDate.diff(dayjs(), 'minute');
      const days = Math.floor(remainingTime / (60 * 24));
      const hours = Math.floor((remainingTime / 60) % 24);
      const minutes = Math.floor(remainingTime % 60);
      setCountdown(`${days}d : ${hours}h : ${minutes}m`);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [targetDate]);

  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <img className="absolute inset-0 w-full h-full object-cover" src={bg} alt="background" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

      <div className="relative  flex flex-col items-center justify-center md:my-32 px-3">
        <motion.div
          id="logo-lg"
          initial={{  y: -20}}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
         >
          <div className="flex flex-col items-start mb-4">
            <span className="italic text-xs md:text-sm">Powered By</span>
            <img id="it-dep-logo" src={goait} alt="Goa IT Department" className="h-16 w-auto" />
          </div>
          <img src={logo} alt="logo" className=" w-80vw md:w-[65vw]" />
        </motion.div>

        <div className="mt-4">
          <span className="text-sm md:text-base">In Association with</span>
          <div className="flex space-x-4 justify-center mt-2">
            <img width="35px" src={ntep} alt="National Tuberculosis Elimination Program" title="National Tuberculosis Elimination Program" />
            <img width="35px" src={betibacho} alt="Beti Bachao Beti Padhao" title="Beti Bachao Beti Padhao" />
            <img width="35px" src={abdm} alt="ABHA" title="ABHA" />
          </div>
        </div>

        <div className="bg-yellow-600 bg-opacity-20 mt-6 p-4 rounded-lg text-center w-4/5 md:w-1/2">
          <h3 className="font-orbitron text-2xl md:text-3xl uppercase text-yellow-400 border-t-2 border-b-2 border-yellow-600 border-opacity-20 py-2">
            Thank You <span className="animate-ping">_</span>
          </h3>
        </div>

        <div className="mt-6 text-2xl font-semibold">
          Remaining Time: <span>{countdown}</span>
        </div>
        <Meteors/>
      </div>
    </div>
  );
};

export default Hero;
