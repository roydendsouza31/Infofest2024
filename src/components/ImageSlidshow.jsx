import React from 'react'
import { ImagesSlider } from './ui/imageslider';
import { motion } from 'framer-motion';
import { getImageURL } from '../utils/image-util';
import { Link } from 'react-router-dom';

const ImageSlidshow = () => {
  const images = Array.from({ length: 17 }, (_, i) => (getImageURL(`past/h${i + 1}.webp`)));
  return (
    <>
      <h2 className="font-audiowide font-semibold text-2xl md:text-4xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 my-5 mt-10">
        A Glimpse Into The Past
      </h2>
      <ImagesSlider id='imageSlider' className="h-[30vh] md:h-[35rem] w-[80vw] mx-auto " images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >

        </motion.div>
      </ImagesSlider>
      <Link to="/about">
        <button className="bg-slate-800 mx-auto  no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white block my-2">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
            <span className='py-3 text-sm font-orbitron'>
              Know More
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
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
      </Link>
    </>
  );
}

export default ImageSlidshow