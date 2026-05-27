import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { a } from 'framer-motion/client';


export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br h-[150px] from-black via-zinc-950 to-red-950 text-white border-t border-red-500/30 overflow-hidden">
  
  {/* background glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.18),transparent_35%)]"></div>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,0,0,0.08),transparent_30%)]"></div>

  <div className="relative max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between backdrop-blur-md">
    
    <div>
      <h2 className="text-2xl font-extrabold tracking-[0.2em] uppercase text-red-500 text-center">
        CFR
      </h2>
      <p className="text-gray-400 text-sm mt-2">
        Cambodia Free Rider
      </p>
    </div>

    <p className="text-sm text-gray-500 mt-5 md:mt-0">
      © 2026 All rights reserved.
    </p>
    <a href=""></a>
    <div className="flex gap-6 mt-5 md:mt-0">
      {[ <a href="https://www.facebook.com/share/19yhC5S1xt/?mibextid=wwXIfr"><FaFacebook /></a>, 
      <a href=""><AiFillTikTok /></a>, 
      <a href=""><FaTelegram /></a>, 
      <a href=""><BiSolidPhoneCall /></a>].map((item) => (
        <a
          key={item}
          href="#"
          className="relative text-xl font-medium text-gray-300 hover:text-red-500 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all hover:after:w-full"
        >
          {item}
        </a>
      ))}
    </div>

  </div>
</footer>
  )
}
