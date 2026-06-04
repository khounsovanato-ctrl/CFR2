
import React from "react";
import { FaFacebook, FaTiktok, FaQuora } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { RiTelegramLine, RiMessage3Fill } from "react-icons/ri";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { Bike, LogOut } from "lucide-react";
import logo from '../Image/logo.png';

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-red-700/20  overflow-hidden">

      {/* TOP GLOW */}
      <div className="absolute w-72 h-72 bg-red-600/10 blur-[120px] rounded-full left-0 top-0"></div>

      <div className="w-[90%] mx-auto py-14 relative z-10">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* DOWNLOAD */}
          <div className="group">
            <div className="flex items-center gap-2 mb-5">
              <Bike className="text-red-500" />
              <h1 className="text-2xl font-bold">
                Download App
              </h1>
            </div>

            <div
              className="
                bg-[#111]
                border border-red-700/20
                rounded-2xl p-4
                hover:border-red-500
                hover:shadow-lg hover:shadow-red-600/20
                transition duration-500
              "
            >
              <img
                src={logo}
                className="
                  w-[180px] mx-auto rounded-xl
                  group-hover:scale-105
                  transition duration-500
                "
                alt=""
              />
            </div>
          </div>

          {/* FOLLOW US */}
          <div>
            <h1 className="text-2xl font-bold mb-5">
              Follow Us
            </h1>

            <div className="space-y-4">

              <div className="flex items-center gap-4 hover:text-red-500 transition duration-300 cursor-pointer">
                <FaFacebook className="text-2xl" />
                <p>Facebook</p>
              </div>

              <div className="flex items-center gap-4 hover:text-red-500 transition duration-300 cursor-pointer">
                <FaInstagram className="text-2xl" />
                <p>Instagram</p>
              </div>

              <div className="flex items-center gap-4 hover:text-red-500 transition duration-300 cursor-pointer">
                <FaTiktok className="text-2xl" />
                <p>TikTok</p>
              </div>

              <div className="flex items-center gap-4 hover:text-red-500 transition duration-300 cursor-pointer">
                <RiTelegramLine className="text-2xl" />
                <p>Telegram</p>
              </div>

            </div>
          </div>

          {/* CUSTOMER SERVICE */}
          <div>
            <h1 className="text-2xl font-bold mb-5">
              Customer Service
            </h1>

            <div className="space-y-4">

              <div className="flex items-center gap-4 hover:text-red-500 transition duration-300 cursor-pointer">
                <TfiHeadphoneAlt className="text-xl" />
                <p>24/7 Support</p>
              </div>

              <div className="flex items-center gap-4 hover:text-red-500 transition duration-300 cursor-pointer">
                <MdOutlinePrivacyTip className="text-2xl" />
                <p>Privacy Policy</p>
              </div>

              <div className="flex items-center gap-4 hover:text-red-500 transition duration-300 cursor-pointer">
                <RiMessage3Fill className="text-2xl" />
                <p>Online Exchange</p>
              </div>

              <div className="flex items-center gap-4 hover:text-red-500 transition duration-300 cursor-pointer">
                <FaQuora className="text-2xl" />
                <p>FAQs</p>
              </div>

            </div>
          </div>

          {/* PAYMENT */}
          
        </div>

        {/* DIVIDER */}
        <div className="border-t border-red-700/20 my-10"></div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2026 Cambodia Free Rider. All rights reserved.
          </p>

          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-[#111] border border-red-700/20 flex items-center justify-center hover:bg-red-600 transition duration-300 cursor-pointer">
              <FaFacebook />
            </div>

            <div className="w-10 h-10 rounded-full bg-[#111] border border-red-700/20 flex items-center justify-center hover:bg-red-600 transition duration-300 cursor-pointer">
              <FaInstagram />
            </div>

            <div className="w-10 h-10 rounded-full bg-[#111] border border-red-700/20 flex items-center justify-center hover:bg-red-600 transition duration-300 cursor-pointer">
              <FaTiktok />
            </div>

            <div className="w-10 h-10 rounded-full bg-[#111] border border-red-700/20 flex items-center justify-center hover:bg-red-600 transition duration-300 cursor-pointer">
              <RiTelegramLine />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}