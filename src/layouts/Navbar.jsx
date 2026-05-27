import React, { useState } from "react";
import logo from "../Image/logo.png";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import login from "../components/Userslogin"
import { Eye, EyeOff, User, Mail, Lock } from "lucide-react";
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
        <div id="fontnavbar" className="hidden md:flex gap-10 lg:gap-16 justify-between items-center text-2xl tracking-widest">
          <NavLink className="hover:text-red-500 transition" to="/">
            HOME
          </NavLink>
          <NavLink className="hover:text-red-500 transition" to="/about">
            ABOUT US
          </NavLink>
          <NavLink className="hover:text-red-500 transition" to="/service">
            SERVICES
          </NavLink>
          <NavLink className="hover:text-red-500 transition" to="/travel">
            TRAVELS
          </NavLink>
            <NavLink className="hover:text-red-500 transition" to="/market">
            STORE
          </NavLink>
          <NavLink  to="/login">
            <div className=" flex justify-center cursor-pointer ">
            <div className="xl:w-10 xl:h-10 rounded-full border border-red-500 bg-red-600/10 flex items-center justify-center shadow-[0_0_30px_rgba(255,0,0,0.5)] animate-pulse">
                <User className="text-red-500"/>
            </div>
          </div>
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>
      <div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden blur-bg mt-3 rounded-2xl p-5 text-white text-center border border-red-800 w-full max-w-sm absolute z-20">
          <div className="flex flex-col gap-4 tracking-[]">
            <NavLink onClick={()=> setMenuOpen(false)} id="fontnavbar" className={`tracking-wide text-2xl`} to="/">HOME</NavLink>
            <NavLink onClick={()=> setMenuOpen(false)} id="fontnavbar" className={`tracking-wide text-2xl`} to="/about">ABOUT US</NavLink>
            <NavLink onClick={()=> setMenuOpen(false)} id="fontnavbar" className={`tracking-wide text-2xl`} to="/service">SERVICES</NavLink>
            <NavLink onClick={()=> setMenuOpen(false)} id="fontnavbar" className={`tracking-wide text-2xl`} to="/travel">TRAVELS</NavLink>
            <NavLink onClick={()=> setMenuOpen(false)} id="fontnavbar" className={`tracking-wide text-2xl`} to="/market">STORE</NavLink>

            <div className="flex flex-col gap-2 pt-3">
              <button onClick={()=> setMenuOpen(false)} className="py-2 rounded-md bg-red-500"><NavLink  to="/login">Register</NavLink></button>
              <button onClick={()=> setMenuOpen(false)} className="py-2 rounded-md border border-rose-500/40"><NavLink  to="/login">Login</NavLink></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}