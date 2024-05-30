// Home.js
import React, { useState } from 'react';
import Hero from '../components/Hero';
import FeaturedEventsGrid from '../components/FeaturedEventsGrid';
import ImageSlideshow from '../components/ImageSlidshow';
import Sponsors from '../components/Sponsors';
import SplashScreen from '../components/ui/SplashScreen';

const Home = () => {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {!splashDone ? (
        <SplashScreen setSplashDone={setSplashDone} />
      ) : (
        <>
          <Hero />
          <FeaturedEventsGrid />
          <ImageSlideshow />
          <Sponsors />
        </>
      )}
    </>
  );
};

export default Home;
