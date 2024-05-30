import React from 'react'
import { ImagesSlider } from './ui/imageslider';
import { motion } from 'framer-motion';
import { getImageURL } from '../utils/image-util';
import { Link } from 'react-router-dom';

const ImageSlidshow = () =>{
  const images = Array.from({ length: 17 }, (_, i) => (getImageURL(`past/h${i + 1}.webp`)));
  return (
    <>
    <h2 className="font-bold text-2xl md:text-4xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 my-5 mt-10">
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
        <Link to="/about">
        <button className="px-2 py-2 my-2 md:px-4 md:py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full absolute bottom-5 ">
          <span>Know More →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
        </Link>
      </motion.div>
    </ImagesSlider>
    </>
  );
}

export default ImageSlidshow