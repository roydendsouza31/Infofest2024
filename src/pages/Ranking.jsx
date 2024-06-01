import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'


const ranking = [
  ["GEC_1", "GOA COLLEGE OF ENGINEERING (TEAM 1)", 4000, 100, 700, 0, 600, 100, 1100, 1200, 100, 100],
  ["Ctrl+Shift+Conquer", "Agnel Institute of Technology and Design Assagao Goa", 3900, 100, 200, 600, 1100, 1200, 0, 100, 0, 600],
  ["GEC_2", "GOA COLLEGE OF ENGINEERING (TEAM 2)", 2300, 0, 1100, 100, 100, 100, 100, 100, 700, 0],
  ["Tech Titans", "VVM’s Shree Damodar College of Commerce and Economics", 1800, 0, 0, 0, 100, 100, 200, 100, 100, 1200],
  ["RCCA Titans", "Rosary College of Commerce & Arts, Navelim", 1600, 100, 0, 200, 200, 600, 100, 100, 200, 100],
  ["Zero Day", "Parvatibai Chowgule College of Arts and Science (BVoc)", 1500, 100, 0, 1100, 100, 0, 100, 100, 0, 0],
  ["Ami GCQ", "Govt college of quepem", 1400, 100, 100, 0, 0, 200, 200, 600, 200, 0],
  ["Khandolians", "Government College of Arts, Science and Commerce, Khandola", 1200, 0, 0, 0, 100, 0, 700, 200, 200, 0],
  ["Byte Blitzers", "RV College of Engineering, Bengluru", 1100, 1100, 0, 0, 0, 0, 0, 0, 0, 0],
  ["NoClue", "Padre Conceicao College of Engineering, Verna ", 1100, 0, 0, 0, 0, 0, 0, 0, 1100, 0],
  ["XavDroids", "ST. XAVIERS COLLEGE MAPUSA", 900, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  ["Tech Trove Titans", "Government college of arts science and commerce sankhali", 700, 100, 0, 100, 100, 0, 100, 100, 100, 100],
  ["Originator", "Dayananda Sagar College of Engineering, Banglore", 600, 600, 0, 0, 0, 0, 0, 0, 0, 0],
  ["Tech brains", "DMC", 500, 0, 0, 100, 100, 100, 0, 100, 100, 0],
  ["Team Genesis", "M.E.S. Vasant Joshi College of Arts & Commerce", 300, 200, 0, 0, 100, 0, 0, 0, 0, 0],
  ["Team GMFC", "Goa multi faculty college dharbandora", 200, 0, 0, 0, 0, 0, 100, 0, 100, 0],
  ["Tigers", "Parvatibai Chowgule College of Arts and Science (BSc)", 100, 100, 0, 0, 0, 0, 0, 0, 0, 0],
  ["Cyber_Crew", "Amrita vishwa vidyapeetham Chennai campus", 100, 100, 0, 0, 0, 0, 0, 0, 0, 0],
  ["robomanipal", "Manipal Institue of Technology, Manipal (MAHE)", 100, 0, 100, 0, 0, 0, 0, 0, 0, 0],
  ["Team Thuderbots", "Agnel Institute of Technology and Design Assagao Goa", 100, 0, 100, 0, 0, 0, 0, 0, 0, 0],
  ["0xr001", "National Forensic Sciences University", 100, 100, 0, 0, 0, 0, 0, 0, 0, 0],
  ["Exploit it 0xFFFF", "Gvm's ponda Goa", 100, 100, 0, 0, 0, 0, 0, 0, 0, 0]
]



export default function Ranking() {
  return (
    <motion.div className='my-20'>
      <Container>
      <h2 className="font-bold text-2xl  md:text-5xl lg:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 my-5 mt-10">
        Infofest 2023
      </h2>
        <h1 className='heading cyber-glitch-2'> RANKING </h1>

        <table>
          <thead>
          <tr>
            <th>Rank</th>
            <th>Team Name</th>
            <th>College Name</th>
            <th>Total Score</th>
            <th>CTF</th>
            <th>Line Bot Strafe</th>
            <th>Cyber Trials</th>
            <th>Astral Coders</th>
            <th>Interface Rumble</th>
            <th>Vid Cred</th>
            <th>Crossfire</th>
            <th>Neuro Query</th>
            <th>Biz Wiz</th>
          </tr>
          </thead>
          <tbody>
          {
            ranking?.map((team, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{team[0]}</td>
                  <td>{team[1]}</td>
                  <td>{team[2]}</td>
                  <td>{team[3]}</td>
                  <td>{team[4]}</td>
                  <td>{team[5]}</td>
                  <td>{team[6]}</td>
                  <td>{team[7]}</td>
                  <td>{team[8]}</td>
                  <td>{team[9]}</td>
                  <td>{team[10]}</td>
                  <td>{team[11]}</td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </Container>
    </motion.div>
  )
}

const Container = styled.div`
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem;
  h1 {
    font-size: clamp(1.2rem,4vw, 2rem);
    font-weight: 700;
    color: #fff;
    font-family: 'Orbitron', sans-serif;
    text-align: center;
  }

  table {
    margin-top:20px;
    display: block;
    max-width: 100%;
    overflow: auto;
    border-collapse: collapse;
  }

  thead tr th{
    background-color: white;
    color:black;
   
  }
  
  td, th {
    border: 2px solid #3e0056;
    text-align: center;
    padding: 5px;
  }

  tr{
    border-top: 0.2rem solid white;
    // background-color: #1d0128;
    background-color: black;
    color:white;
  }

  tr:nth-child(1) {
    background-color: #ffc700;
    color: white;
  }

  tr:nth-child(1) > th{
    // border: 2px solid #0fa5ff;
  }

  tr:nth-child(2) {
    background-color: #e5e0e0;;
    color: black;
  }

  tr:nth-child(2) > td{
    // border: 3px solid #ffed8d;
  }

  tr:nth-child(3) {
    background-color: #a3792b;
    color: black;
  }

  tr:nth-child(3) > td{
    // border: 3px solid #e3e0e0;
  }

  @media screen and (max-width: 614px) {
    margin-top: 90px;
  }

  .ranks {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    padding: 1rem;
  }

  .rank {
    display: flex;
    gap: 1rem;
    background: #2b2a33;
    padding: 1rem;
    position: relative;
  }

  .heading {
    font-family: 'Orbitron', sans-serif;
    font-weight : 500;
    color: #fff;
    background-image: linear-gradient(to right,#ffffff00,#ff00b133,#ffffff00);
    width: 100%;
    text-align: center;
    margin-block-start: 0;
    position: relative;
    overflow: hidden;
    margin-top: 1rem;
  }

  
`
