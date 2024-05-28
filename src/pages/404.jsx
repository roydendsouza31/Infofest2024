import React from 'react'
import '../index.css'

import space from '../assets/images/space-lost.png'
const PageNotFound = () => {
  return (
    <>
<div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
            <div className="xl:pt-24 w-full xl:w-1/2 pb-12 lg:pb-0">
                <div className="relative">
                    <div className="absolute">
                            <h1 className="my-2 text-gray-100 font-bold text-2xl">
                                Looks like you've found the
                                doorway to the great nothing
                            </h1>
                            <p className="my-2 text-gray-100">Sorry about that! Please visit our hompage to get where you need to go.</p>
                           
                    </div>
                    <div>
                        <img className='opacity-30' src="https://i.ibb.co/G9DC8S0/404-2.png" />
                        <a href="/">
                            <button className="z-10 w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-800 text-white hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
                              Take me there!</button>
                            </a>
                    </div>
                </div>
            </div>
            <div>
                <img src={space} className='w-52 mt-2'/>
            </div>
        </div>
</>
  )
}

export default PageNotFound