import React, { useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import events from "../events";
import line from "../assets/images/vector.svg";
import { getImageURL } from "../utils/image-util";
import hackathon from "../assets/images/events/Hackthon.webp";
import blackbox from "../assets/images/events/blackbox coding.webp";
import businessPitch from "../assets/images/events/businessPitch.webp";
import LineFollower from "../assets/images/events/LineFollower.webp";
import BGMI from "../assets/images/events/BGMI.webp";
import fifa from "../assets/images/events/fifa22.webp";
import counterstrike from "../assets/images/events/Counterstrike.webp";
import UI from "../assets/images/events/UIUX.webp";
import debate from "../assets/images/events/techdebate.webp";
import CTF from "../assets/images/events/CTF.webp";
import Coding from "../assets/images/events/LevelUpCoding.webp";

const Events = () => {
  const { slug } = useParams();
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  // // Event images array
  // const eventImages = [
  //   { src: hackathon, category: "OFFLINE", title: "Hackathon", slug: "hackathon" },
  //   { src: businessPitch, category: "OFFLINE", title: "Business Pitch", slug: "business-pitch" },
  //   { src: LineFollower, category: "OFFLINE", title: "Line Follower", slug: "LineFollower" },
  //   { src: blackbox, category: "ONLINE", title: "Blackbox Coding", slug: "blackbox-coding" },
  //   { src: UI, category: "ONLINE", title: "UI/UX Design", slug: "ui-ux-design" },
  //   { src: BGMI, category: "GAMING", title: "BGMI Tournament", slug: "bgmi-tournament" },
  //   { src: fifa, category: "GAMING", title: "FIFA 22", slug: "fifa-22" },
  //   { src: counterstrike, category: "GAMING", title: "Counterstrike", slug: "counterstrike" },
  //   { src: debate, category: "OFFLINE", title: "Tech Debate", slug: "tech-debate" },
  //   { src: CTF, category: "ONLINE", title: "Capture the Flag", slug: "capture-the-flag" },
  //   { src: Coding, category: "ONLINE", title: "Level Up Coding", slug: "level-up-coding" },
  // ];

  // Filtered images based on selected category
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

        <div className="flex space-x-10 my-5">
          {["ALL", "OFFLINE", "ONLINE", "GAMING"].map((category, index) => (
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

        {/* Event Image Grid */}
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
