"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function FutureBankSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Continuous scroll-based animations
  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.section 
      ref={sectionRef}
      className="bg-black text-white w-full flex items-center justify-center"
      style={{ opacity: sectionOpacity }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl px-4 py-10 rounded-lg pt-4 md:pt-8 lg:pt-30 shadow-lg bg-black/90 gap-8">
        {/* Left Side: Image + Heading */}
        <motion.div 
          className="flex flex-col w-full lg:w-1/2 mb-6 lg:mb-0"
          style={{ y: imageY }}
        >
          {/* Main Heading above Image, left-aligned and aligned with image's left edge */}
          <h2 className="text-xl md:text-2xl font-bold text-left uppercase mb-4 ml-0 lg:ml-[40px] xl:ml-12">
            <span className="font-bold">The way</span><span className="font-normal">every bank</span><br />
            <span className="font-bold">should be</span>
          </h2>
          <div className="flex justify-center w-full">
            <Image
              src="/building.png"
              alt="Bank Building"
              width={600}
              height={400}
              className="w-full lg:max-w-[28rem] h-auto rounded-lg object-cover"
              priority
            />
          </div>
        </motion.div>
        {/* Right Side: Horizontal Line + Section Label + Text Content */}
        <motion.div 
          className="flex flex-col items-start lg:items-start text-left w-full lg:w-1/2"
          style={{ y: textY }}
        >
          {/* Horizontal Line and Section Label grouped together at the top */}
          <div className="w-full mb-8 lg:mb-13">
            <hr className="border-gray-600 border-t w-full hidden lg:block mb-3" />
            <p className="text-gray-400 text-xs uppercase tracking-widest font-medium">
              BUILT FOR A GLOBAL FUTURE
            </p>
          </div>
          {/* Subheading */}
          <h3 className="text-base md:text-lg font-bold leading-tight mb-4">
            Enjoy seamless Ethereum services with<br />peace of mind.
          </h3>
          {/* Paragraph - max-w-md removed */}
          <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-6">
            Ethereum's not new anymore—it has a proven, 10-year track record, and you shouldn't have to compromise security and earning potential to use it. To better protect and grow our members' wealth, we've designed a banking app that treats Ethereum as the go-to currency of the future. Together with the US dollar, it can offer unprecedented financial access no matter who you are, or where you live
          </p>
          {/* Link at bottom with underline */}
          <div className="mt-2 flex lg:justify-start w-full">
            <a 
              href="#" 
              className="inline-flex items-center gap-1 text-white hover:text-gray-300 transition-colors duration-200 group"
            >
              <span className="text-xs md:text-sm font-medium border-b border-white group-hover:border-gray-300 transition-colors duration-200">
                Our mission
              </span>
              <Image
                src="/circle-arrow-img.svg"
                alt="Arrow"
                width={18}
                height={18}
                className="w-4 h-4 md:w-5 md:h-5"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}