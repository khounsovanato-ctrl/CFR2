import React from "react";
import homeimage from "../Image/logo.png";
import Aboute from "../page/Aboute";
import Sevice from "../page/Sevice";
import Travel from "../page/Travel";
import Userslogin from "../components/Userslogin"
import {motion} from "framer-motion";
export default function Home() {
  return (
    <div className="">
    <div className="w-[92%] mx-auto mb-7 md:mt-8 flex flex-col-reverse md:flex-row items-center gap-1">
      {/* homepage text */}
      <div className="text-white w-full md:w-1/2 ">
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
          Welcome to
        </h1>
        <div className="relative">
          <div className="absolute inset-0 blur-3xl bg-red-600/20 rounded-full"></div>
          <h3 className="title-animation relative z-10 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-black via-red-600 bg-clip-text text-transparent tracking-wide mt-2">Cambodia Free Rider</h3>
          <p className="mt-5 text-sm sm:text-base md:text-lg leading-relaxed text-center md:text-left md:indent-12">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Deleniti laudantium, ab necessitatibus error voluptatibus in
          velit facilis quis et quae reprehenderit. Ipsa ad eveniet
          odit! Accusamus unde aspernatur recusandae fuga.
          </p>
          </div>
      </div>

      {/* homepage image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={homeimage}alt="" className="`w-[220px]` `sm:w-[300px]` `md:w-[380px]` `lg:w-[450px]` scale-x-[-1] animate-float hover:scale-110 duration-500 cursor-pointer"/>
      </div>
      
    </div>
    <div><Aboute/></div>
    <div><Sevice/></div>
    <div><Travel/></div>
    <div><Userslogin/></div>
    </div>
  );
}
