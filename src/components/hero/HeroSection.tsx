"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center w-full">
      {/* ASCII Typography Section - Responsive */}
      <div className="flex flex-col items-center py-2 md:py-12 lg:py-20 px-4 md:px-4 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto w-full flex justify-center">
          {/* Exact ASCII Layout with precise character alignment - Responsive */}
          <div className="text-white font-normal text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-mono pb-5 md:pb-0">
            {/* Line 1: THE ONLY */}
            <motion.div 
              className="whitespace-pre"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              THE ONLY
            </motion.div>

            {/* Line 2: WAY + longer horizontal rule + TO BANK */}
            <motion.div 
              className="whitespace-pre"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            >
              WAY —————————————— TO BANK
            </motion.div>

            {/* Line 3: YOUR ETHER (bitcoin image on R directly under K of BANK) */}
            <motion.div 
              className="whitespace-pre"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              {"                "}YOUR ETHE
              <span className="relative">
                R
                <motion.span
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.8,
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                >
                  <Image
                    src="/bitcoin-img.svg"
                    alt="Bitcoin"
                    width={16}
                    height={16}
                    className="absolute -top-1 sm:-top-2 -right-0.5 sm:-right-1 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 xl:w-8 xl:h-8"
                  />
                </motion.span>
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Full Width Background Image Section - Responsive */}
      <div className="relative w-full h-[70vh] sm:h-[80vh] md:h-[100vh] lg:h-[120vh] xl:h-[130vh]">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src="/man-img.png"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Overlay box - Fully Responsive */}
        <motion.div 
          className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-12 lg:bottom-12 lg:left-16 bg-black/40 text-white p-3 sm:p-4 md:p-6 rounded-lg max-w-[280px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
        >
          <motion.p 
            className="mb-3 md:mb-4 text-xs sm:text-sm md:text-base leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            With an all-in-one app that lets you secure, transact, and increase your Ethereum money,
            you can be the first to access the banking of the future. With unmatched protection for
            your holdings, simple sending and spending, and exclusive earning opportunities like daily
            interest payments on your Ethereum, we put financial freedom in your hands.
            <br /><br />
            Join us to protect and grow your Ethereum <br />
            wealth.
          </motion.p>
          
          {/* Responsive Learn More Button */}
          <motion.button 
            className="flex items-center gap-4 sm:gap-6 bg-white text-black pl-3 sm:pl-4 pr-1 py-0.5 sm:py-1 text-xs sm:text-sm rounded-full hover:bg-gray-200 transition font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More 
            <div className="bg-black rounded-full p-2 sm:p-3 md:p-4 flex items-center justify-center">
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image 
                  src="/Vector (Stroke).svg"
                  alt="Arrow"
                  width={8}
                  height={8}
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5"
                />
              </motion.div>
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}