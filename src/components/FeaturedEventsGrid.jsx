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
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0.6", "end end"]
  });

 
  const translateY = useTransform(scrollYProgress, [0, 1], [10, 450]);
  const style = {
    height: 200,
    transform: 'rotate(180deg)'
  };
  return (
    <div className='relative bg-fixed bg-cover py-5 md:py-10' style={{backgroundImage:`url(${getImageURL('eventbg.jpg')})`}}>

  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
    <motion.div ref={ref} variants={fadeIn("down", 0.1)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, ammount: 0.7 }} >
      
      <h2 className="font-audiowide font-bold text-2xl md:text-4xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 my-5 mt-10">
        Events
      </h2>
      <motion.div className='grid grid-cols-1 md:grid-cols-3 px-10  md:px-20 my-5'>
        <div className='space-y-10 my-10 md:my-10'>
          <motion.div
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, ammount: 0.7 }}
            className="card min-h-40 min-w-5 border-white border-2 rounded-2xl"></motion.div>
          <motion.div
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, ammount: 0.7 }}
            className="card min-h-40 min-w-5 border-white border-2 rounded-2xl"></motion.div>
          <motion.div
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, ammount: 0.7 }}
            className="card min-h-40 min-w-5 border-white border-2 rounded-2xl"></motion.div>


        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity:1  }}
          transition={{ duration: 5 }} className='hidden md:block relative mx-auto'>
          {/* <motion.img src={getImageURL('rocket.svg')} style={{ translateY: translateY }} alt="rocket" /> */}
          <motion.div  style={{ translateY: translateY}} >
          <Lottie animationData={rocket} style={style} />;
          </motion.div>
        </motion.div>
        <div className='space-y-10 my-10 md:my-10'>
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, ammount: 0.7 }}
            className="card min-h-40 min-w-5 border-white border-2 rounded-2xl"></motion.div>
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, ammount: 0.7 }}
            className="card min-h-40 min-w-5 border-white border-2 rounded-2xl"></motion.div>
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, ammount: 0.7 }}
            className="card min-h-40 min-w-5 border-white border-2 rounded-2xl"></motion.div>
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


const Card = ({ event, index }) => {
  return (
    <Link to={`/events/${event.slug}`}>
      <StyledCard $bg={event.image}>
        <div className="bg-overlay"></div>
        <div className="title">
          <h3><span>{(index == 0) ? event.title : event.codeName.toUpperCase()}</span></h3>
          <p>{(index == 0) ? event.description : event.title}</p>
        </div>
        <div className="meta">
          {/* <span className="date">{event.date.replaceAll('-', '.')}</span> */}
          <button className="more-button"><span>more</span></button>
        </div>
      </StyledCard>
    </Link>
  )
}

const StyledCard = styled.div`
  align-items: flex-end;
  border: 1px solid #979797;
  box-sizing: border-box;
  color: #cdcdcd;
  display: flex;
  height: 100%;
  justify-content: space-between;
  overflow: hidden;
  padding: 0 30px 30px;
  position: relative;
  text-decoration: none;
  background: url('${props => props.$bg}') no-repeat;
  background-size: cover;
  position: relative;

  .bg-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 100% );
  }

  .title, .meta {
    z-index: 1;
  }

  & .title { padding-top: 100px; }
  & p { font-family: BlenderProBold,sans-serif }

  & .meta {
    position: absolute;
    right: 24px;
    top: 44px;
  }

  & .more-button, & .date {
    color: #cdcdcd;
    display: block;
    font-family: BlenderProBold,sans-serif;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    border-style: none;
    background: none;
  }

  & .more-button { display: none;  cursor: pointer; }

  &:hover {
    background: #cdcdcd;
    color: #000;
    * { color: #000 !important; }
    .date { display: none; }
    .more-button { display: block; }

    &::after { background: #000 }

    .bg-overlay { opacity: 0 }
  }

  &::after {
    background: #cdcdcd;
    content: "";
    display: block;
    height: 3px;
    left: 29px;
    position: absolute;
    top: 52px;
    width: 53px;
  }

  @media screen and (max-width: 767px) {
    &.title { padding-top: 50px; }
    & .meta { top: 19px; }
    &::after { top: 26px; }
  }
`

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-top: 5px;
  
  a {
    color: #cdcdcd;
    padding: 10px 20px;
    border: 1px solid #979797;

    &:hover {
      background: #cdcdcd;
      color: #000;
    }
  }

`
