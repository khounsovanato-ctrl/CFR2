import React, { useState } from "react";
import logo from "../Image/logo.png";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import login from "../components/Userslogin";
import { Eye, EyeOff, User, Mail, Lock } from "lucide-react";
import { SiOrganicmaps } from "react-icons/si";
import { IoStorefrontSharp } from "react-icons/io5";
import { IoMdContacts } from "react-icons/io";
import { FaTools } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); 
  const navStyle = ({isActive}) => `
        duration-300 transition-all ${
          isActive ? " text-rose-500" : "hover:text-rose-300"
        }
  `

  return (
    <div className="w-full px-4">
      <nav className="blur-bg flex justify-between items-center text-white py-3 px-6 rounded-4xl max-w-7xl mx-auto shadow-lg relative mt-6">
        {/* Logo */}
              <NavLink onClick={() => {
                setMenuOpen(false);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }} className="hover:text-red-500 transition" to="/">
            <div>
                <img src={logo} alt="" className="w-10" />
             </div>
          </NavLink>
        {/* Desktop Links */}
        <div
          id="fontnavbar"
          className="hidden md:flex gap-10 lg:gap-16 justify-between items-center text-2xl tracking-wide"
        >
          <NavLink onClick={() => {
                setMenuOpen(false);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            to="/"
            className={({isActive})=> `${navStyle({isActive})}`}
            >
            HOME
          </NavLink>
          <NavLink onClick={() => {
                setMenuOpen(false);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }} 
              to="/about"
              className={({isActive})=> `${navStyle({isActive})}`}>
            ABOUT US
          </NavLink>
          <NavLink onClick={() => {
                setMenuOpen(false);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }} className={({isActive})=> `${navStyle({isActive})}`} to="/service">
            SERVICES
          </NavLink>
          <NavLink onClick={() => {
                setMenuOpen(false);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }} className={({isActive})=> `${navStyle({isActive})}`} to="/travel">
            TRIPS
          </NavLink>
          <NavLink onClick={() => {
                setMenuOpen(false);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }} className={({isActive})=> `${navStyle({isActive})}`} to="/market">
            STORE
          </NavLink>
          <NavLink onClick={() => {
                setMenuOpen(false);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }} to="/login">
            <div className=" flex justify-center cursor-pointer ">
              <div className="xl:w-10 xl:h-10 rounded-full border border-red-500 bg-red-600/10 flex items-center justify-center shadow-[0_0_30px_rgba(255,0,0,0.5)] animate-pulse">
                <User className="text-red-500" />
              </div>
            </div>
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
          <div className=" flex mt-1 gap-4 md:hidden"> 
             
            {/* mobile about us */}
            <NavLink
              onClick={() => {
                setMenuOpen(false);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              to="/about"
              className={({isActive})=> `${navStyle({isActive})} w-10 rounded-2xl flex items-center justify-center`}
            >
              <IoMdContacts size={22} />
            </NavLink>

            {/* mobile sevices */}
             <NavLink
                onClick={() => {
                setMenuOpen(false);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              to="/service"
              className={({isActive})=> `${navStyle({isActive})} w-10 rounded-2xl flex items-center justify-center`}
            >
            < FaTools size={19}/>
            </NavLink>

             {/* mobile trips */}
              <NavLink
               onClick={() => {
                setMenuOpen(false);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              to="/travel"
              className={({isActive})=> `${navStyle({isActive})} w-10 rounded-2xl flex items-center justify-center`}
            >
            < SiOrganicmaps size={20}/>
            </NavLink>

            {/* mobile store  */}
               <NavLink
              onClick={() => {
                setMenuOpen(false);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              to="/market"
              className={({isActive})=> `${navStyle({isActive})} w-10 rounded-2xl flex items-center justify-center`}
            >
            < IoStorefrontSharp size={18}/>
            </NavLink>
        
            <button className="md:hidden flex  space-x-5" onClick={() => setMenuOpen(!menuOpen)}>
                  {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
      </nav> 
     
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden blur-bg mt-3 rounded-2xl p-5  text-white text-center border border-red-800 w-90 max-w-sm absolute z-10">
          <div className="flex flex-col gap-4 tracking-[]">
            <div className="flex flex-col gap-2">
              <button
                onClick={() => setMenuOpen(false)}
                className="py-2 rounded-md bg-red-500"
              >
                <NavLink to="/login">Register</NavLink>
              </button>
              <button
                onClick={() => setMenuOpen(false)}
                className="py-2 rounded-md border border-rose-500/40"
              >
                <NavLink to="/login">Login</NavLink>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
