import React from 'react';

const About = () => {
  return (
    <div className=" mt-10 min-h-screen flex flex-col items-center justify-center p-6">
      <div className="bg-gray-800 shadow-md rounded-lg p-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 text-center text-yellow-400">About Infofest</h1>
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
