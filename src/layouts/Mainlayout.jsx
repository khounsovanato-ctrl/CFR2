import React from "react";
import Routeweb from "../route/Routeweb";
import navimg from "../Image/navimg.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Mainlayout() {
  return (
    <div>
      <div className="pt-5"><Navbar /></div>
      <div><Routeweb/></div>
      <div><Footer/></div>
    </div>
  );
}
