import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import events from "../events";
import line from "../assets/images/vector.svg";
import { getImageURL } from "../utils/image-util";

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredImages =
    selectedCategory === "ALL"
      ? events
      : events.filter((image) => image.category === selectedCategory);

  return (
    <>
      <h2 className="font-orbitron font-bold text-white text-2xl md:text-3xl text-center bg-clip-text my-5 mt-24">
        Events
      </h2>

      <div className="relative flex flex-col items-center">
        <img src={line} className="absolute" alt="Line decoration" />

        <div className="grid grid-cols-1 md:grid-cols-4 my-5">
          {["ALL", "Offline", "Online", "GAMING"].map((category, index) => (
            <button
              key={index}
              className={`font-orbitron font-bold text-lg cursor-pointer focus:outline-none px-4 py-2 transition-colors duration-800 ${
                selectedCategory === category
                  ? "text-green-500 border-b-2 border-green-500"
                  : "hover:text-gray-500 text-white"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          {filteredImages.map((img, index) => (
            <Link key={index} to={`/events/${img.slug}`}>
              <div className="relative group hover:animate-pulsing-effect">
                <img
                  src={getImageURL(`events${img.image}`)}
                  alt={img.title}
                  className="rounded-md shadow-lg h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-bold">
                    {img.codeName}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Events;
