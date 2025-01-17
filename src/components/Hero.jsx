import React, { useState, useEffect } from 'react';
import { easeInOut, motion } from 'framer-motion';
import bg from '../assets/images/bg.webp';
import dayjs from 'dayjs';
import abdm from '../assets/images/sponsors/ABDM.webp';
import betibacho from '../assets/images/sponsors/Beti_Bachao_Beti_Padhao.webp';
import ntep from '../assets/images/sponsors/NTEP.webp';
import goait from '../assets/images/sponsors/Goa_IT_Department.webp';
import { Meteors } from './ui/meteors';
import { Typewriter } from 'react-simple-typewriter';
import { Button } from './ui/moving-border';
import Countdown from 'react-countdown';
import logo2 from '../assets/images/if24wordlogo.svg';

const Hero = () => {
  const targetDate = dayjs('2024-08-10');
  const [countdown, setCountdown] = useState('');


  // Random component
  const Completionist = () => <span>Live</span>;


  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <>
          <h2 className='text-center my-2 '>Remaing Time</h2>
          {/* <hr className='my-2'/> */}
          <div className='countdown text-sm md:text-2xl flex space-x-2 md:space-x-5'>
            <div className='text-center'><div>{days}</div>
              <div>Days</div></div>
            <span>:</span>
            <div className='text-center'><div>{hours}</div>
              <div>Hours</div></div>
            <span>:</span>
            <div className='text-center'><div>{minutes}</div>
              <div>Minutes</div></div>
            <span>:</span>
            <div className='text-center'><div>{seconds}</div>
              <div>Seconds</div></div>
          </div >
          {/* <hr className='my-2'/> */}
        </>
      );
    }
  };

  return (
    <div className="relative overflow-hidden font-audiowide min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white ">
      <img className="absolute inset-0 w-full h-full object-cover" src={bg} alt="background" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

      <div className="relative  flex flex-col items-center justify-center md:my-28 px-3">
        <motion.div
          id="logo-lg"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col items-start">
            <span className="italic text-xs md:text-sm">Powered By</span>
            <img id="it-dep-logo" src={goait} alt="Goa IT Department" className="h-16 w-auto" />
          </div>
          <img src={logo2} alt="logo" className=" w-80vw md:w-[65vw]" />
          {/* <img src={logo2} alt="logo" className="" /> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="md:-mt-16 ">
          <span className="text-sm md:text-base [text-shadow:_1px_1px_1px_rgb(0_0_0_/_40%)]">In Association with</span>
          <div className="flex space-x-4 justify-center mt-2">
            <img width="35px" src={ntep} alt="National Tuberculosis Elimination Program" title="National Tuberculosis Elimination Program" />
            <img width="35px" src={betibacho} alt="Beti Bachao Beti Padhao" title="Beti Bachao Beti Padhao" />
            <img width="35px" src={abdm} alt="ABHA" title="ABHA" />
          </div>
        </motion.div>


        <motion.div
          transition={1}
          className="mt-6 text-2xl  transition-all ease-in-out">
          {/* Remaining Time: <span className='animate-spin'>{countdown?countdown: <Typewriter
            words={['.......................']}
            loop={0}
            cursor
            cursorStyle=''
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}        
          />}</span> */}
          <Countdown date={new Date('2024-12-10')} renderer={renderer}></Countdown>
        </motion.div>
        <motion.div
          id="logo-lg"
          initial={{ y: 40 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          className='my-5'
        >
          <Button borderRadius="2.75rem" className="h-12 bg-[rgb(15 23 42 / 0%)]" containerClassName="h-15 w-max">
            <a href="" className='px-5'>Register Now</a>
          </Button>
        </motion.div>
        <Meteors />
      </div>
    </div>
  );
};

export default Hero;
