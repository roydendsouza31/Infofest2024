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
                <button className="bg-slate-800 mx-auto  no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white block my-20 -z-10">
                  <span className="absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </span>
                  <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                    <span className='py-3 text-sm'>
                      Take Me There
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
              </a>
            </div>
          </div>
        </div>
        <div>
          <img src={space} className='w-52 mt-2' />
        </div>
      </div>
    </>
  )
}

export default PageNotFound