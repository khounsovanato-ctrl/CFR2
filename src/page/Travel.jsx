import React, { useState } from "react";

import trip1 from "../Image/trip1.jpg";
import trip2 from "../Image/trip2.jpg";
import trip3 from "../Image/trip3.jpg";
import trip4 from "../Image/trip4.jpg";
import trip5 from "../Image/trip5.jpg";
import trip6 from "../Image/trip6.jpg";
import trip7 from "../Image/trip7.jpg";
import trip8 from "../Image/trip8.jpg";
import trip9 from "../Image/trip9.jpg";
import trip10 from "../Image/trip10.jpg";
import trip11 from "../Image/trip11.jpg";

export default function Travel() {
  const [active, setActive] = useState(null);

  const images = [
    {
      id: 1,
      src: trip1,
      position:
        "top-0 left-0 rotate-[-10deg]",
    },
    {
      id: 2,
      src: trip2,
      position:
        "top-10 right-0 rotate-[10deg]",
    },
    {
      id: 3,
      src: trip3,
      position:
        "top-72 left-10 rotate-[-5deg]",
    },
    {
      id: 4,
      src: trip4,
      position:
        "top-60 right-10 rotate-[8deg]",
    },
    {
      id: 5,
      src: trip5,
      position:
        "bottom-[320px] left-[5%] rotate-[10deg]",
    },
    {
      id: 6,
      src: trip6,
      position:
        "bottom-[280px] right-[5%] rotate-[-10deg]",
    },
    {
      id: 7,
      src: trip7,
      position:
        "bottom-20 left-0 rotate-[8deg]",
    },
    {
      id: 8,
      src: trip8,
      position:
        "bottom-0 left-[22%] rotate-[-8deg]",
    },
    {
      id: 9,
      src: trip9,
      position:
        "bottom-10 right-[20%] rotate-[10deg]",
    },
    {
      id: 10,
      src: trip10,
      position:
        "bottom-20 right-0 rotate-[-10deg]",
    },
    {
      id: 11,
      src: trip11,
      position:
        "top-40 left-1/2 -translate-x-1/2",
    },
  ];

  return (
    <div className="bg-black min-h-screen overflow-hidden py-15">

      {/* title */}
      <div className="text-center mb-20 pt-12">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white">
          Holiday <span className="text-red-600">Trips</span>
        </h1>
      </div>

      {/* gallery */}
      <div className="relative w-[95%] md:w-[85%] h-[1200px] md:h-[950px] mx-auto">

        {/* background glow */}
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-red-700 opacity-30 blur-[150px] rounded-full"></div>

        {/* images */}
        {images.map((img) => (
          <img
            key={img.id}
            src={img.src}
            alt=""
            onClick={() =>
              setActive(active === img.id ? null : img.id)
            }
            className={`
              absolute
              ${img.position}
              
              ${
                active === img.id
                  ? `
                  top-1/2 left-1/2
                  -translate-x-1/2 -translate-y-1/2
                  w-[320px] md:w-[500px]
                  h-[450px] md:h-[650px]
                  z-50
                  rotate-0
                  scale-110
                `
                  : `
                  w-40 md:w-60
                  h-56 md:h-80
                `
              }

              object-cover
              rounded-[30px]
              border-2 border-red-600
              shadow-red-700 shadow-2xl
              cursor-pointer

              hover:scale-105
              transition-all duration-700 ease-in-out
            `}
          />
        ))}

        {/* premium card */}
        <div
          className="
            absolute top-[340px] left-1/2
            -translate-x-1/2
            bg-gradient-to-br from-red-700 via-black to-black
            border border-red-600
            rounded-[40px]
            p-8 md:p-12
            w-[320px] md:w-[450px]
            text-center
            backdrop-blur-xl
            shadow-red-900 shadow-2xl
            z-20
          "
        >
          <h2 className="text-white text-3xl md:text-5xl font-extrabold">
            Explore World
          </h2>

          <p className="text-gray-300 mt-5 leading-7 text-sm md:text-base">
            Click any image to open premium absolute animation.
          </p>

          <button
            className="
              mt-8 px-8 py-3
              bg-red-600 hover:bg-red-700
              rounded-full
              text-white font-bold
              tracking-wider
              hover:scale-110
              transition-all duration-500
            "
          >
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
}