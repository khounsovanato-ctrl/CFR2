import React, { useState } from "react";
import { Eye, EyeOff, User, Mail, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AuthPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="bg-black flex items-center justify-center pt-25 px-4 sm:px-6 lg:px-8 py-5 overflow-hidden relative">
      
      {/* Animated Background Glow */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-72 h-72 bg-red-700/20 blur-3xl rounded-full"
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 w-72 h-72 bg-red-500/20 blur-3xl rounded-full"
      />

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative w-full max-w-6xl bg-[#0f0f0f] border border-red-900 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(255,0,0,0.15)] grid grid-cols-1 lg:grid-cols-2"
      >
        
        {/* LEFT SIDE */}
        <div className="hidden lg:flex relative items-center justify-center bg-gradient-to-br from-red-700 via-black to-black p-10 xl:p-16 overflow-hidden">
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

          {/* Animated Circle */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-80 h-80 border border-red-500/20 rounded-full"
          />

          <div className="relative z-10 text-center text-white">
            
            <motion.h1
              key={isLogin ? "login" : "register"}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl xl:text-6xl font-extrabold mb-6 leading-tight"
            >
              {isLogin ? "Welcome Back" : "Create Account"}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-300 text-base xl:text-lg max-w-md leading-relaxed"
            >
              Premium black and red authentication UI with smooth
              animations and luxury modern design.
            </motion.p>

            {/* Animated Icon */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="mt-10 flex justify-center"
            >
              <div className="w-36 h-36 xl:w-44 xl:h-44 rounded-full border border-red-500 bg-red-600/10 flex items-center justify-center shadow-[0_0_30px_rgba(255,0,0,0.5)]">
                <User className="text-red-500" size={70} />
              </div>
            </motion.div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full p-6 sm:p-8 md:p-10 lg:p-12 bg-[#111111]">
          
          {/* Mobile Heading */}
          <div className="lg:hidden text-center mb-8">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl font-extrabold text-white"
            >
              {isLogin ? "Login" : "Register"}
            </motion.h1>

          </div>

          {/* Toggle Buttons */}
          <div className="flex justify-center mb-8 sm:mb-10">
            <div className="bg-[#1b1b1b] border border-red-800 rounded-full p-1 flex w-full max-w-xs">
              
              <button
                onClick={() => setIsLogin(true)}
                className={`w-1/2 py-3 rounded-full font-semibold transition-all duration-300 ${
                  isLogin
                    ? "bg-red-600 text-white shadow-lg scale-105"
                    : "text-gray-400"
                }`}
              >
                Login
              </button>

              <button
                onClick={() => setIsLogin(false)}
                className={`w-1/2 py-3 rounded-full font-semibold transition-all duration-300 ${
                  !isLogin
                    ? "bg-red-600 text-white shadow-lg scale-105"
                    : "text-gray-400"
                }`}
              >
                Register
              </button>
            </div>
          </div>

          {/* FORM */}
          <AnimatePresence mode="wait">
            <motion.form
              key={isLogin ? "loginForm" : "registerForm"}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="space-y-5 sm:space-y-6"
            >
              
              {/* Full Name */}
              {!isLogin && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="relative"
                >
                  <User
                    className="absolute top-1/2 -translate-y-1/2 left-4 text-red-500"
                    size={20}
                  />

                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-black border border-red-900 focus:border-red-500 rounded-xl py-4 pl-12 pr-4 text-white outline-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(255,0,0,0.3)]"
                  />
                </motion.div>
              )}

              {/* Email */}
              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="relative"
              >
                <Mail
                  className="absolute top-1/2 -translate-y-1/2 left-4 text-red-500"
                  size={20}
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-black border border-red-900 focus:border-red-500 rounded-xl py-4 pl-12 pr-4 text-white outline-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(255,0,0,0.3)]"
                />
              </motion.div>

              {/* Password */}
              <div className="relative">
                <Lock
                  className="absolute top-1/2 -translate-y-1/2 left-4 text-red-500"
                  size={20}
                />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full bg-black border border-red-900 focus:border-red-500 rounded-xl py-4 pl-12 pr-12 text-white outline-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(255,0,0,0.3)]"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 -translate-y-1/2 right-4 text-red-500 hover:scale-110 transition"
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>

              {/* Confirm Password */}
              {!isLogin && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="relative"
                >
                  <Lock
                    className="absolute top-1/2 -translate-y-1/2 left-4 text-red-500"
                    size={20}
                  />

                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full bg-black border border-red-900 focus:border-red-500 rounded-xl py-4 pl-12 pr-4 text-white outline-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(255,0,0,0.3)]"
                  />
                </motion.div>
              )}

              {/* Remember Me */}
              {isLogin && (
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-gray-400">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="accent-red-600" />
                    Remember me
                  </label>

                  <button className="hover:text-red-500 transition">
                    Forgot Password?
                  </button>
                </div>
              )}

              {/* Submit Button */}
              <motion.button
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 0px 25px rgba(255,0,0,0.6)",
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-red-700 to-red-500 text-white font-bold text-lg transition-all duration-300"
              >
                {isLogin ? "Login Now" : "Create Account"}
              </motion.button>

              {/* Bottom Text */}
              <p className="text-center text-gray-400 text-sm sm:text-base pt-2">
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}

                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="ml-2 text-red-500 hover:underline"
                >
                  {isLogin ? "Register" : "Login"}
                </button>
              </p>
            </motion.form>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}