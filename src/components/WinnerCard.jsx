import React from 'react'
import { getImageURL } from '../utils/image-util'

const WinnerCard = ({position , winners}) => {
  console.log(position,winners.names)
  return (
    <>
    <div style={{background:'linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)'}} className='rounded-lg border-transparent w-[90%] md:w-1/3  m-5 font-orbitron text-yellow-400 shadow-[0_5px_30px_-15px_rgba(255,255,255,0.3)] '>
        <div className='flex items-center text-sm md:text-xl'>
            <div className='rounded-md'>
                <figure className='m-5 rounded-xl shadow-[5px_0px_10px_-2px_rgba(255,255,255,0.5)] ' style={{background:'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%)'}}>
                    <img src={position==="first"?getImageURL('gold.svg'):getImageURL('silver.svg')} className="" height={'130'} width={'130'} alt="" />
                </figure>
            </div>
            <div className='px-5'>
              <div className="names text-wrap">
                {(winners.names).map((n,i)=>{
                  return(
                  <p key={i}>{n}</p>
                  )
                })}
              </div>
           
            </div>
        </div>
        <div className="team text-center text text-sm md:text-xl">{winners.team}</div>
        <h3 className=' text-center  text-md md:text-xl py-2'>{position.toUpperCase()} PLACE</h3>
    </div>
    </>
  )
}

export default WinnerCard