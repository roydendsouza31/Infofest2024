import React from 'react'
import Hero from '../components/Hero'
import FeaturedEventsGrid from '../components/FeaturedEventsGrid'
import ImageSlidshow from '../components/ImageSlidshow'
import Sponsors from '../components/Sponsors'
const Home = () => {
  return (
    <>
    <Hero/>
    <FeaturedEventsGrid/>
    <ImageSlidshow/>
    <Sponsors/>
    </>
  )
}

export default Home