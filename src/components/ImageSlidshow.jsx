import React from 'react'
import { ImagesSlider } from './ui/imageslider';
import { motion } from 'framer-motion';
import { getImageURL } from '../utils/image-util';

const ImageSlidshow = () =>{
  const images = Array.from({ length: 17 }, (_, i) => (getImageURL(`past/h${i + 1}.webp`)));
  console.log(images);
  return (
    <ImagesSlider id='imageSlider' className="h-[40vh] md:h-[40rem] w-[90vw] mx-auto my-20" images={images}>
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
        <motion.p className="font-bold text-md md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
        A Glimpse  <br /> Into the Past
        </motion.p>
        <button className="px-2 py-2 my-2 md:px-4 md:py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Know More →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}

export default ImageSlidshow