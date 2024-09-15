import React, { useEffect } from 'react'
import events from '../events';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from './ui/moving-border';
import { motion, useScroll, useMotionValueEvent, useTransform } from 'framer-motion';
import { fadeIn } from '../variants';
import { getImageURL } from '../utils/image-util';
import { useRef } from 'react';
import Lottie from 'lottie-react';
import rocket from '../assets/lottie/rocket.json'


export default function FeaturedEventsGrid() {
  const ref = useRef(null);

  const featuredEvents = [
    {
      event: 'Hackthon',
      image: 'Hackthon.webp',
      slug: 'hackathon'
    },
    {
      event: 'CTF',
      image: 'CTF.webp',
      slug:'CTF'
    },
    {
      event: 'Level Up Coding',
      image: 'LevelUpCoding.webp',
      slug:'LevelUpCoding'
    },
    {
      event: 'Line Follower',
      image: 'LineFollower.webp',
      slug:'LineFollower'
    },
    {
      event: 'Design Duel',
      image: 'UIUX.webp',
      slug:'DesignDuel'
    },
    {
      event: 'Tech Debate',
      image: 'techdebate.webp',
      slug:'techdebate'
    },
  ]

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0.6", "end end"]
  });


  const translateY = useTransform(scrollYProgress, [0, 1], [10, 600]);
  const style = {
    height: 200,
    transform: 'rotate(180deg)'
  };
  return (
    <div className='relative bg-fixed bg-cover py-5 md:py-10' style={{ backgroundImage: `url(${getImageURL('eventbg.jpg')})` }}>

      {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div> */}
      <motion.div ref={ref} variants={fadeIn("down", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, ammount: 0.7 }} >

        <h2 className="font-audiowide font-bold text-white text-2xl md:text-3xl text-center bg-clip-text my-5 mt-10">
          Events
        </h2>
        <motion.div className='grid grid-cols-1 md:grid-cols-3 px-10  md:px-20 my-5 font-audiowide text-2xl'>
          {/* LEFT SECTION */}
          <div className=' '>
            {featuredEvents.slice(0, 3).map(e => Card(e,"left")
            )}

          </div>

          {/* ROCKET */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5 }} className='hidden md:block relative mx-auto'>
            {/* <motion.img src={getImageURL('rocket.svg')} style={{ translateY: translateY }} alt="rocket" /> */}
            <motion.div style={{ translateY: translateY }} >
              <Lottie animationData={rocket} style={style} />
            </motion.div>
          </motion.div>

          {/* RIGHT SECTION  */}
          <div className=''>
            {featuredEvents.slice(3, 7).map(e => Card(e,"right")
            )}
          </div>
        </motion.div>


        <button className="bg-slate-800 mx-auto  no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white block z-0">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
            <span className='py-3 text-sm font-orbitron'>
              More Events
            </span>
            <svg
              fill="none"
              height="16"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 8.75L14.25 12L10.75 15.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <span className="absolute  -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
      </motion.div>
    </div>
  )
}


const Card = (event,direction) => {
  return (
    <Link to={`/events/${event.slug}`}>
      <motion.div
        variants={fadeIn(direction, 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, ammount: 0.7 }}
        className="card min-h-40 h-56 min-w-5 border-2 border-orange-100 rounded-2xl bg-cover mb-3 md:mb-8 animate-vflip"
        style={{ backgroundImage: `url(${getImageURL(`events/${event.image}`)})` }}>
        <div className='text-white'>
          <div className="px-10 my-[40%]">
            {event.event}
          </div>
        </div>
      </motion.div>
    </Link>
  )
}


