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

  return (
    <div className="w-full px-4 py-4 ">
      <nav className="blur-bg flex justify-between items-center text-white py-3 px-6 rounded-4xl max-w-7xl mx-auto border border-red-800 relative">
        {/* Logo */}
        <div>
          <img src={logo} alt="" className="w-10" />
        </div>

        {/* Desktop Links */}
        <div
          id="fontnavbar"
          className="hidden md:flex gap-10 lg:gap-16 justify-between items-center text-2xl tracking-widest"
        >
          <NavLink onClick={() => {
                setMenuOpen(false);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }} className="hover:text-red-500 transition" to="/">
            HOME
          </NavLink>
          <NavLink onClick={() => {
                setMenuOpen(false);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }} className="hover:text-red-500 transition" to="/about">
            ABOUT US
          </NavLink>
          <NavLink onClick={() => {
                setMenuOpen(false);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }} className="hover:text-red-500 transition" to="/service">
            SERVICES
          </NavLink>
          <NavLink onClick={() => {
                setMenuOpen(false);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }} className="hover:text-red-500 transition" to="/travel">
            TRAVELS
          </NavLink>
          <NavLink onClick={() => {
                setMenuOpen(false);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }} className="hover:text-red-500 transition" to="/market">
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
          <div className="text-m flex mt-1  gap-7 md:hidden"> 
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
              className={`tracking-wide text-2xl`}
            >
              <IoMdContacts />
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
              className={`tracking-wide text-2xl`}
            >
            < FaTools/>
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
              className={`tracking-wide text-2xl`}
            >
            < SiOrganicmaps/>
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
              className={`tracking-wide text-2xl`}
            >
            < IoStorefrontSharp/>
            </NavLink>
        
            <button className="md:hidden flex space-x-5" onClick={() => setMenuOpen(!menuOpen)}>
                  {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
          
      </nav> 
     

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden blur-bg mt-3 rounded-2xl p-5  text-white text-center border border-red-800 w-90 max-w-sm absolute z-20">
          <div className="flex flex-col gap-4 tracking-[]">
            <NavLink
              onClick={() => setMenuOpen(false)}
              id="fontnavbar"
              className={`tracking-wide text-2xl`}
              to="/"
            >
              HOME
            </NavLink>
            <div className="flex flex-col gap-2 pt-10">
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
