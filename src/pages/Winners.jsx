import React from 'react'
import WinnerCard from '../components/WinnerCard'
const winners = [
  {
    "event": "Hackathon",
    "winner": {
      "names": ["Zubin Shah", " Ann Mariya Roy", " Rahul Jalan"],
      "team": "Geniee"
    },
    "runner": {
      "names": ["Rounak Naik", " Mohammed Ali Khan"],
      "team": "Geniee"
    }
  },
  {
    "event": "CTF",
    "winner": {
      "names": ["Bipin Raj C", " Ananya Bhat"],
      "team": "RV College of Engineering"
    },
    "runner": {
      "names": ["Sudesh Acharya", "Sumukh Chitloor", "Sagar P"],
      "team": "Dayananda Sagar College of Engineering, Banglore"
    }
  }
]


const Winners = () => {
  return (
    <>
      <div className='my-24'>
        <h1 className='text-white font-audiowide text-center text-3xl'>Winner</h1>
        {winners.map((e) => {
          return (
            <>
              <h2 className='text-center text-xl md:text-2xl text-white font-orbitron mt-5 bg-gradient-to-r from-transparent via-orange-400 p-2 to-transparent'>{e.event}</h2>
              <div className='flex justify-center flex-col md:flex-row'> 
                <WinnerCard position={"first"} winners={e.winner} />
                <WinnerCard position={"second"} winners={e.runner} />
                </div>
            </>
          )
        })}

      </div>
    </>
  )
}

export default Winners