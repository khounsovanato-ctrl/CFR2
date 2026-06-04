import React from "react";
import sevice1 from "../Image/sevice1.jpg";
import sevice2 from "../Image/sevice2.jpg";
import sevice3 from "../Image/sevice3.jpg";
import sevice4 from "../Image/sevice4.jpg";
import sevice5 from "../Image/sevice5.jpg";
import sevice6 from "../Image/sevice6.jpg";
import sevice7 from "../Image/sevice7.jpg";

export default function Sevice() {
  const images = [
    {
      image: sevice1,
      title: "Engine Service",
    },
    {
      image: sevice2,
      title: "Premium Wash",
    },
    {
      image: sevice3,
      title: "Racing Upgrade",
    },
    {
      image: sevice4,
      title: "Performance Tuning",
    },
    {
      image: sevice5,
      title: "Superbike Repair",
    },
    {
      image: sevice6,
      title: "MotoGP Parts",
    },
    {
      image: sevice7,
      title: "Luxury Detailing",
    },
  ];

  return (
    <div className="w-full bg-black min-h-screen overflow-hidden py-10 ">
        <div className="text-center mb-20 pt-13">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white">
          SERVICES<span className="text-red-600">BIKE</span>
        </h1>
      </div>
      {/* SLIDER */}
      <div className="relative">
        
        {/* Animated Track */}
        <div className="flex gap-8 animate-slide whitespace-nowrap w-max">
          
          {[...images, ...images].map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[35px] w-[300px] sm:w-[340px] h-[450px] bg-zinc-900 border border-red-700/30 shadow-[0_0_25px_rgba(255,0,0,0.15)] transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_0_60px_rgba(255,0,0,0.45)] flex-shrink-0"
            >
              
              {/* GLOW */}
              <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 transition-all duration-700 z-10"></div>

              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-125 group-hover:rotate-3"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 w-full p-7 z-20 transition-all duration-700 group-hover:bottom-3">
                
                <h2 className="text-white text-3xl font-extrabold tracking-wide transition-all duration-500 group-hover:text-red-500">
                  {item.title}
                </h2>

                <p className="text-gray-300 mt-3 text-sm opacity-0 translate-y-5 transition-all duration-700 group-hover:opacity-100 group-hover:translate-y-0">
                  Premium MotoGP superbike service with luxury performance and professional quality.
                </p>

                <button className="mt-5 px-6 py-3 rounded-full bg-red-600 text-white font-semibold opacity-0 translate-y-5 transition-all duration-700 hover:bg-red-700 group-hover:opacity-100 group-hover:translate-y-0">
                  Explore
                </button>
              </div>

              {/* SHINE EFFECT */}
              <div className="absolute top-0 left-[-120%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transition-all duration-1000 group-hover:left-[140%]"></div>

              {/* BORDER */}
              <div className="absolute inset-0 rounded-[35px] border border-transparent transition-all duration-700 group-hover:border-red-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* CUSTOM CSS */}
      <style>
        {`
          @keyframes slide {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-slide {
            animation: slide 25s linear infinite;
          }

          .animate-slide:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </div>
  );
}