import React from "react";
import { motion } from "framer-motion";
import about from '../Image/about.jpg'
import {
  Bike,
  Trophy,
  ShieldCheck,
  Users,
  ChevronRight,
} from "lucide-react";

export default function AboutUs() {
  return (
    <section className="bg-black text-white overflow-hidden pt-10">
      {/* HERO SECTION */}
      <div className="relative w-full min-h-screen flex items-center">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-red-600/30 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-700/20 blur-[120px]" />

        <div className="w-[90%] mx-auto grid lg:grid-cols-2 gap-14 items-center py-20 relative z-10">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-red-500 uppercase tracking-[6px] mb-4 font-semibold">
              Cambodia Free Rider
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                Us
              </span>
            </h1>

            <p className="text-gray-400 mt-8 text-lg leading-relaxed">
              Cambodia Rider is a premium motorcycle community and accessories
              brand inspired by speed, passion, and modern street racing
              culture. We create powerful experiences for riders who love style,
              performance, and freedom on the road.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 rounded-xl font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-red-700/30">
                Explore More
              </button>

              <button className="px-8 py-4 border border-red-600 rounded-xl hover:bg-red-600 transition duration-300 flex items-center gap-2">
                Contact Us
                <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-red-600/20 blur-3xl rounded-full" />

            <img
              src={about}
              alt="motor rider"
              className="relative z-10 rounded-3xl shadow-2xl border border-red-600/20 hover:scale-105 transition duration-500 object-cover w-full h-[550px]"
            />
          </motion.div>
        </div>
      </div>

      {/* FEATURES */}
      <div className="w-[90%] mx-auto py-24">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold">
            Why Riders Choose Us
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Premium quality, strong rider community, and modern racing style
            made for Cambodia street culture.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* CARD 1 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-gradient-to-b from-[#111] to-[#1a1a1a] border border-red-700/20 rounded-3xl p-8 hover:border-red-600 transition duration-500"
          >
            <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6">
              <Bike size={32} />
            </div>

            <h3 className="text-2xl font-bold mb-4">Premium Bikes</h3>

            <p className="text-gray-400 leading-relaxed">
              High-performance motorcycles with modern design and racing spirit.
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-gradient-to-b from-[#111] to-[#1a1a1a] border border-red-700/20 rounded-3xl p-8 hover:border-red-600 transition duration-500"
          >
            <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6">
              <Trophy size={32} />
            </div>

            <h3 className="text-2xl font-bold mb-4">Racing Culture</h3>

            <p className="text-gray-400 leading-relaxed">
              Inspired by MotoGP and street racing lifestyle for passionate
              riders.
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-gradient-to-b from-[#111] to-[#1a1a1a] border border-red-700/20 rounded-3xl p-8 hover:border-red-600 transition duration-500"
          >
            <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6">
              <ShieldCheck size={32} />
            </div>

            <h3 className="text-2xl font-bold mb-4">Trusted Quality</h3>

            <p className="text-gray-400 leading-relaxed">
              Premium accessories and products designed for durability and
              safety.
            </p>
          </motion.div>

          {/* CARD 4 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-gradient-to-b from-[#111] to-[#1a1a1a] border border-red-700/20 rounded-3xl p-8 hover:border-red-600 transition duration-500"
          >
            <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6">
              <Users size={32} />
            </div>

            <h3 className="text-2xl font-bold mb-4">Strong Community</h3>

            <p className="text-gray-400 leading-relaxed">
              Connecting Cambodian riders through events, style, and adventure.
            </p>
          </motion.div>
        </div>
      </div>

      {/* STATS */}
      <div className="bg-[#0f0f0f] py-20">
        <div className="w-[90%] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {[
            { number: "10K+", text: "Riders" },
            { number: "150+", text: "Events" },
            { number: "500+", text: "Premium Products" },
            { number: "99%", text: "Happy Clients" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="border border-red-700/20 rounded-3xl py-10 hover:bg-red-600/10 transition duration-500"
            >
              <h1 className="text-4xl lg:text-6xl font-extrabold text-red-500">
                {item.number}
              </h1>

              <p className="text-gray-400 mt-4 text-lg">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}