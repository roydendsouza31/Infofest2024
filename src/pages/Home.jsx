// Home.js
import React, { useState } from 'react';
import Hero from '../components/Hero';
import FeaturedEventsGrid from '../components/FeaturedEventsGrid';
import ImageSlideshow from '../components/ImageSlidshow';
import Sponsors from '../components/Sponsors';

const Home = () => {

  return (
    <>
      <Hero />
      <FeaturedEventsGrid />
      <ImageSlideshow />
      <Sponsors />
    </>
  );
};

export default Home;
