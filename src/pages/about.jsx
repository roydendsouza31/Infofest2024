import React from 'react';
import { getImageURL } from '../utils/image-util';

const About = () => {
  return (
    <div className="mt-20 min-h-screen flex flex-col items-center  justify-center p-2 md:p-6">
      <div className="border-2 border-orange-500 shadow-md w-full md:w-[90%] rounded-lg p-3 md:p-8  font-audiowide">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-yellow-400 font-orbitron">About Infofest</h1>
        <figure>
          <img src={getImageURL('if24shortlogo.svg')} alt="if24shortlogo" className='mx-auto w-52 md:w-72 h-auto'/>
        </figure>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          Welcome to <span className="font-semibold text-yellow-400">Infofest</span>, the ultimate coding competition for students! Our mission is to bring together young, talented programmers from around the nation to showcase their skills, learn from industry experts, and compete for exciting prizes.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          At Infofest, we believe in nurturing the next generation of tech leaders. Our competition is designed to challenge participants with real-world problems, foster creativity, and encourage collaborative learning. Whether you are an experienced coder or just starting out, Infofest provides a platform for you to grow and shine.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          The event features multiple rounds, including individual and team-based challenges, covering various domains such as gaming, data structures, artificial intelligence, cybersecurity, and more. Participants will have the opportunity to attend workshops, interact with mentors, and network with peers.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          Join us to compete, learn, and innovate. Be part of the future of technology. Be part of <span className="font-semibold text-yellow-400">Infofest</span>.
        </p>
      </div>
    </div>
  );
};

export default About;
