import React, { useState } from "react";
import line from "../assets/images/vector.svg";
import hackathon from "../assets/images/events/Hackthon.webp";
import blackbox from "../assets/images/events/blackbox coding.webp";
import businessPitch from "../assets/images/events/businessPitch.webp";
import LineFollower from "../assets/images/events/LineFollower.webp";
import BGMI from "../assets/images/events/BGMI.webp";
import fifa from "../assets/images/events/fifa22.webp";
import counterstrike from "../assets/images/events/Counterstrike.webp";
import UI from "../assets/images/events/UIUX.webp";

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const eventImages = [
    { src: hackathon, category: "OFFLINE", title: "Hackathon" },
    { src: businessPitch, category: "OFFLINE", title: "Business Pitch" },
    { src: LineFollower, category: "OFFLINE", title: "Line Follower" },
    { src: blackbox, category: "ONLINE", title: "Blackbox Coding" },
    { src: UI, category: "ONLINE", title: "UI/UX Design" },
    { src: BGMI, category: "GAMING", title: "BGMI Tournament" },
    { src: fifa, category: "GAMING", title: "FIFA 22" },
    { src: counterstrike, category: "GAMING", title: "Counterstrike" },
  ];

  const filteredImages =
    selectedCategory === "ALL"
      ? eventImages
      : eventImages.filter((image) => image.category === selectedCategory);

  return (
    <>
      <h2 className="font-orbitron font-bold text-white text-2xl md:text-3xl text-center bg-clip-text my-5 mt-24">
        Events
      </h2>

      <div className="relative flex flex-col items-center">
        <img src={line} className="absolute" alt="Line decoration" />

        <div className="flex space-x-10 my-5">
          {["ALL", "OFFLINE", "ONLINE", "GAMING"].map((category, index) => (
            <button
              key={index}
              className={`font-orbitron font-bold text-white text-lg cursor-pointer focus:outline-none px-4 py-2 transition-colors duration-800 ${
                selectedCategory === category
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "hover:text-gray-300"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          {filteredImages.map((image, index) => (
            <div key={index} className="relative group hover:animate-pulsing-effect">
              <img
                src={image.src}
                alt={image.title}
                className="rounded-md shadow-lg h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-bold">
                  {image.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Events;
