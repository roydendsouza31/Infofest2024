import React, { useMemo, useState } from 'react'
import events from '../events'
import { useParams } from 'react-router-dom'
import { getImageURL } from '../utils/image-util';
import { div } from 'three/examples/jsm/nodes/Nodes.js';

const Event = () => {
  const [filter, setFilter] = useState('details')
  const { slug } = useParams();
  const event = useMemo(() => events.get(slug), [slug]);
  return (
    <div className="text-white mt-28 ">
      <div className="text-center text-3xl font-audiowide">EVENTS</div>

      <div className='min-h-[90vh] w-[95%] md:w-[90%] p-2 rounded-md mx-auto my-5 md:flex bg-white/10 shadow-lg ring-1 ring-black/5'>
        <div className='md:w-[30%]'>
          <img className='box-border object-cover h-[75%] w-[100%] md:mx-5 md:mt-20 rounded-md ' src={getImageURL(`events${event.image}`)} alt={event.slug} />
        </div>
        <div className='md:w-[70%] font-orbitron'>
          <div className='flex justify-around md:justify-evenly font-orbitron my-5 md:py-5'>
            {event?.description && (<button onClick={() => setFilter('details')} className={`${filter === "details" ? "text-green-600 border-b-2 border-green-600 " : "text-white"}`}>Details</button>)}
            {event?.rules && (<button onClick={() => setFilter('rules')} className={`${filter === "rules" ? "text-green-600 border-b-2 border-green-600" : "text-white"}`}>Rules</button>)}
            {event?.judgingCriteria && (<button onClick={() => setFilter('judging')} className={`${filter === "judging" ? "text-green-600 border-b-2 border-green-600" : "text-white"}`}>Judging</button>)}
            {event?.coordinators && (<button onClick={() => setFilter('contact')} className={`${filter === "contact" ? "text-green-600 border-b-2 border-green-600" : "text-white"}`}>Contact</button>)}
          </div>
          <div className='md:px-10'>
            {filter === 'details' && <div>
              <div className=' text-xl md:text-2xl my-3 justify-center'>{event.title}</div>
              <div>
                <div className='text-justify '>
                  {event.description}
                </div>
                <div className='flex my-10 md:text-2xl  text-yellow-300'>
                  <div className='border-r-2 border-blue-700  md:px-20 w-[50%]' ><span className='block'>Price</span>
                  <span>{event.prize}</span></div>
                  <div className='md:text-xl md:px-20 text-green-500 w-[50%] px-2'>
                    <span className='block '>Date:</span>
                    <span>{event.date}</span>
                  </div>
                </div>
              </div>
              <button className='bg-[#05B46F] shadow-lg shadow-green-500/50 px-5 py-2 rounded-md mx-10 text-xl '>Register</button>
            </div>}

            {filter === 'rules' && <div className='text-sm '>
              {event.rules.split("\n").map((line, index) => (
                <span key={index} className='block py-[4px]'>
                  {line}
                </span>
              ))}
            </div>}

            {filter === 'judging' && <div className='text-sm '>
              {event.judgingCriteria.split("\n").map((line, index) => (
                <span key={index} className='block py-[4px]'>
                  {line}
                </span>
              ))}
            </div>}

            {filter === 'contact' && 
            <div className='md:flex justify-around'>
              {event.coordinators.map((coordinator,index) =>{
                return(
                  <div key={index} className=" w-52 p-6 rounded-lg shadow-lg mx-auto">
                  <img
                    className="object-cover w-24 h-24 rounded-full shadow mx-auto"
                    src={getImageURL(`coordinator/${coordinator.image}`) ?getImageURL(`coordinator/${coordinator.image}`) : 'bestoimage'}
                    alt={coordinator.name}
                  />
                  <div className="flex flex-col justify-center mt-4 text-center">
                    <p className="text-md font-bold text-gray-100">{coordinator.name}</p>
                    
                    <p className="text-sm tracking-wide text-gray-300">
                      {coordinator.phoneNumber}
                    </p>
                  </div>
                  </div>
                )
              })}
              </div>
              }

          </div>
        </div>
      </div>
    </div>
  )
}

export default Event