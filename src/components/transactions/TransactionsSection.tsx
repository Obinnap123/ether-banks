"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function TransactionsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Improved transforms with better visibility and layering
  const card1Scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const card1Opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.3]);
  
  const card2Y = useTransform(scrollYProgress, [0.1, 0.3], ["100vh", "0vh"]);
  const card2Scale = useTransform(scrollYProgress, [0.1, 0.3, 0.5], [0.95, 1, 0.95]);
  const card2Opacity = useTransform(scrollYProgress, [0.1, 0.2, 0.4, 0.5], [0, 1, 1, 0.3]);
  
  const card3Y = useTransform(scrollYProgress, [0.3, 0.5], ["100vh", "0vh"]);
  const card3Scale = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0.95, 1, 0.95]);
  const card3Opacity = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [0, 1, 1, 0.3]);
  
  const card4Y = useTransform(scrollYProgress, [0.5, 0.7], ["100vh", "0vh"]);
  const card4Scale = useTransform(scrollYProgress, [0.5, 0.7, 0.9], [0.95, 1, 0.95]);
  const card4Opacity = useTransform(scrollYProgress, [0.5, 0.6, 0.8, 0.9], [0, 1, 1, 0.3]);
  
  const card5Y = useTransform(scrollYProgress, [0.7, 0.9], ["100vh", "0vh"]);
  const card5Opacity = useTransform(scrollYProgress, [0.7, 0.8, 1], [0, 1, 1]);

  return (
    <div ref={containerRef} className="relative hide-scrollbar" >
      {/* First Transaction Section - Phone 1 - STICKY BASE */}
      <motion.section 
        className="bg-black text-white w-full sticky top-0 h-full"
        style={{ 
          scale: card1Scale,
          opacity: card1Opacity,
          zIndex: 1
        }}
      >
        <div className="px-4 md:px-4 lg:px-8 py-6 pt-10  lg:pt-15 h-full flex items-center">
          <div className="mx-auto w-full px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-0 items-center h-full">
          
          {/* Center Section - Phone Image (First on mobile) */}
          <div className="flex justify-center items-center min-h-0 lg:min-h-0 lg:order-2">
            <div className="max-w-xs md:max-w-sm">
              <Image
                src="/phone-1.png"
                alt="Phone Mockup"
                width={300}
                height={600}
                className="w-full h-[450px] md:h-[500px] lg:h-[550px] object-cover"
                priority
              />
            </div>
          </div>

          {/* Left Section - 33% (Second on mobile) */}
          <div className="flex flex-col space-y-4 lg:pr-8 mt-4 md:mt-20 lg:mt-35 lg:order-1">
            {/* Tiny gray text */}
            <p className="text-xs text-gray-500 uppercase tracking-widest font-medium">
              EFFORTLESS TRANSACTION
            </p>
            
            {/* Large headline */}
            <h1 className="text-lg md:text-xl lg:text-3xl font-bold text-white leading-tight">
              ACCESS YOUR ETHER, <span className="font-light">LIGHTNING FAST</span>
            </h1>
            
            {/* Underlined link */}
            <a 
              href="#" 
              className="inline-flex items-center gap-1 text-white hover:text-gray-300 transition-colors duration-200 group w-fit"
            >
              <span className="text-sm font-medium border-b border-white group-hover:border-gray-300 transition-colors duration-200">
                Buy, Send, And Spend
              </span>
              <Image
                src="/circle-arrow-img.svg"
                alt="Arrow"
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </a>
            
            {/* 5 horizontal lines with 4 text spaces - Lines hidden on mobile, text visible */}
            <div className="space-y-1 mt-4">
              {/* Line 1 */}
              <div className="relative">
                <hr className="hidden lg:block border-gray-700 border-t w-full" />
              </div>
              
              {/* Text 1 */}
              <div className="text-left">
                <span className="text-xs text-white font-medium">EVERYDAY EARNINGS</span>
              </div>
              
              {/* Line 2 */}
              <div className="relative">
                <hr className="hidden lg:block border-gray-700 border-t w-full" />
              </div>
              
              {/* Text 2 */}
              <div className="text-left">
                <span className="text-xs text-white font-medium">UNLIMITED POTENTIAL FOR GROWTH</span>
              </div>
              
              {/* Line 3 */}
              <div className="relative">
                <hr className="hidden lg:block border-gray-700 border-t w-full" />
              </div>
              
              {/* Text 3 */}
              <div className="text-left">
                <span className="text-xs text-white font-medium">PERSONALIZED SERVICE</span>
              </div>
              
              {/* Line 4 */}
              <div className="relative">
                <hr className="hidden lg:block border-gray-700 border-t w-full" />
              </div>
              
              {/* Text 4 */}
              <div className="text-left">
                <span className="text-xs text-white font-medium">LOCK UP AND GO</span>
              </div>
              
              {/* Line 5 */}
              <div className="relative">
                <hr className="hidden lg:block border-gray-700 border-t w-full" />
              </div>
            </div>
          </div>

          {/* Right Section - 33% (Third on mobile) */}
          <div className="flex flex-col space-y-3 lg:pl-8 mt-4 md:mt-2 lg:mt-14 lg:order-3">
            {/* Bold heading */}
            <h3 className="text-base md:text-lg lg:text-xl font-bold text-white leading-tight">
              We don't just keep your Bitcoin safe,<br />
              we make it easy to use it.
            </h3>
            
            {/* Paragraph */}
            <p className="text-sm text-gray-300 leading-relaxed">
              Your funds are always right where you need them. Anytime. Anywhere. With just a few taps you can transact in BTC, or make payments in EUR, GBP, USD, USDC, and USDT. Never miss the dip with automated BTC buys*, instantly send and spend with the Lightning Network, and use your signature metal Xapo Bank card around the world with no foreign exchange fees.
            </p>
            
            {/* Capital at risk with superscript */}
            <p className="text-xs text-gray-400">
              *Capital at risk<sup className="text-xs">2</sup>
            </p>
            
            {/* 5 horizontal lines with 4 empty text spaces - Hidden on mobile */}
            <div className="hidden lg:block space-y-1">
              {/* Line 1 */}
              <div className="relative">
                <hr className="border-gray-700 border-t w-full" />
              </div>
              
              {/* Empty Text Space 1 */}
              <div className="text-right">
                <span className="text-xs text-white font-medium invisible">.</span>
              </div>
              
              {/* Line 2 */}
              <div className="relative">
                <hr className="border-gray-700 border-t w-full" />
              </div>
              
              {/* Empty Text Space 2 */}
              <div className="text-right">
                <span className="text-xs text-white font-medium invisible">.</span>
              </div>
              
              {/* Line 3 */}
              <div className="relative">
                <hr className="border-gray-700 border-t w-full" />
              </div>
              
              {/* Empty Text Space 3 */}
              <div className="text-right">
                <span className="text-xs text-white font-medium invisible">.</span>
              </div>
              
              {/* Line 4 */}
              <div className="relative">
                <hr className="border-gray-700 border-t w-full" />
              </div>
              
              {/* Empty Text Space 4 */}
              <div className="text-right">
                <span className="text-xs text-white font-medium invisible">.</span>
              </div>
              
              {/* Line 5 */}
              <div className="relative">
                <hr className="border-gray-700 border-t w-full" />
              </div>
            </div>
          </div>
          
        </div>
        </div>
      </div>
    </motion.section>

    {/* Second Transaction Section - Phone 2 - SLIDES FROM BOTTOM */}
    <motion.section 
      className="bg-black text-white w-full overflow-hidden sticky top-0 h-full"
      style={{ 
        y: card2Y,
        scale: card2Scale,
        opacity: card2Opacity,
        zIndex: 2
      }}
    >
      <div className="px-4 md:px-4 lg:px-8 py-6 mt-6 lg:mt-15">
        <div className="mx-auto w-full px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-0 items-start">
          
          {/* Center Section - Phone Image (First on mobile) */}
          <div className="flex justify-center items-center min-h-0 lg:min-h-0 lg:order-2">
            <div className="max-w-xs md:max-w-sm">
              <Image
                src="/phone-2.png"
                alt="Phone Mockup"
                width={300}
                height={600}
                className="w-full h-[450px] md:h-[500px] lg:h-[550px] object-cover"
                priority
              />
            </div>
          </div>

          {/* Left Section - 33% (Second on mobile) */}
          <div className="flex flex-col space-y-4 lg:pr-8 mt-4 md:mt-20 lg:mt-35 lg:order-1">
            {/* Tiny gray text */}
            <p className="text-xs text-gray-500 uppercase tracking-widest font-medium">
              EVERYDAY EARNINGS
            </p>
            
            {/* Large headline */}
            <h1 className="text-lg md:text-xl lg:text-3xl font-normal text-white leading-tight">
              <span className="font-bold">EARN INTEREST ON</span><br />
              <span className="font-light">YOUR BITCOIN, PAID</span>
            </h1>
            
            {/* Underlined link */}
            <a 
              href="#" 
              className="inline-flex items-center gap-1 text-white hover:text-gray-300 transition-colors duration-200 group w-fit"
            >
              <span className="text-sm font-medium border-b border-white group-hover:border-gray-300 transition-colors duration-200">
                Grow Your Savings
              </span>
              <Image
                src="/circle-arrow-img.svg"
                alt="Arrow"
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </a>
            
            {/* 4 horizontal lines with 3 text spaces - Lines hidden on mobile, text visible */}
            <div className="space-y-1 mt-4">
              {/* Line 1 */}
              <div className="relative">
                <hr className="hidden lg:block border-gray-700 border-t w-full" />
              </div>
              
              {/* Text 1 */}
              <div className="text-left">
                <span className="text-xs text-white font-medium">UNLIMITED POTENTIAL FOR GROWTH</span>
              </div>
              
              {/* Line 2 */}
              <div className="relative">
                <hr className="hidden lg:block border-gray-700 border-t w-full" />
              </div>
              
              {/* Text 2 */}
              <div className="text-left">
                <span className="text-xs text-white font-medium">PERSONALISED SERVICE</span>
              </div>
              
              {/* Line 3 */}
              <div className="relative">
                <hr className="hidden lg:block border-gray-700 border-t w-full" />
              </div>
              
              {/* Text 3 */}
              <div className="text-left">
                <span className="text-xs text-white font-medium">LOCK UP AND GO</span>
              </div>
              
              {/* Line 4 */}
              <div className="relative">
                <hr className="hidden lg:block border-gray-700 border-t w-full" />
              </div>
            </div>
          </div>

          {/* Right Section - 33% (Third on mobile) */}
          <div className="flex flex-col space-y-3 lg:pl-8 mt-3 md:mt-2 lg:mt-14 lg:order-3">
            {/* Bold heading */}
            <h3 className="text-base md:text-lg lg:text-xl font-bold text-white leading-tight">
              Unlock the potential of your holdings with 0.5% APR on your BTC.
            </h3>
            
            {/* Paragraph */}
            <p className="text-sm text-gray-300 leading-relaxed mt-2">
              Put your holdings to work, without lifting a finger. You can earn Bitcoin every day with interest on your savings4, cashback on your card spending5, and recurring rewards for your referrals6. Watch your wealth grow in real time with interest paid out daily7.
            </p>
            
            {/* 4 horizontal lines with 3 empty text spaces - Hidden on mobile */}
            <div className="hidden lg:block space-y-1 mt-15">
              {/* Line 1 */}
              <div className="relative">
                <hr className="border-gray-700 border-t w-full" />
              </div>
              
              {/* Empty Text Space 1 */}
              <div className="text-right">
                <span className="text-xs text-white font-medium invisible">.</span>
              </div>
              
              {/* Line 2 */}
              <div className="relative">
                <hr className="border-gray-700 border-t w-full" />
              </div>
              
              {/* Empty Text Space 2 */}
              <div className="text-right">
                <span className="text-xs text-white font-medium invisible">.</span>
              </div>
              
              {/* Line 3 */}
              <div className="relative">
                <hr className="border-gray-700 border-t w-full" />
              </div>
              
              {/* Empty Text Space 3 */}
              <div className="text-right">
                <span className="text-xs text-white font-medium invisible">.</span>
              </div>
              
              {/* Line 4 */}
              <div className="relative">
                <hr className="border-gray-700 border-t w-full" />
              </div>
            </div>
          </div>
          
        </div>
        </div>
      </div>
    </motion.section>

    {/* Third Transaction Section - Phone 3 - SLIDES FROM BOTTOM */}
    <motion.section 
      className="bg-black text-white w-full overflow-hidden sticky top-0 h-full"
      style={{ 
        y: card3Y,
        scale: card3Scale,
        opacity: card3Opacity,
        zIndex: 3
      }}
    >
      <div className="px-4 md:px-4 lg:px-8 py-6 mt-6 lg:mt-15">
        <div className="mx-auto w-full px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-0 items-start">
          
          {/* Center Section - Phone Image (First on mobile) */}
          <div className="flex justify-center items-center min-h-0 lg:min-h-0 lg:order-2">
            <div className="max-w-xs md:max-w-sm">
              <Image
                src="/phone-3.png"
                alt="Phone Mockup"
                width={300}
                height={600}
                className="w-full h-[450px] md:h-[500px] lg:h-[550px] object-cover"
                priority
              />
            </div>
          </div>

          {/* Left Section - 33% (Second on mobile) */}
          <div className="flex flex-col space-y-4 lg:pr-8 mt-4 md:mt-20 lg:mt-35 lg:order-1">
            {/* Tiny gray text */}
            <p className="text-xs text-gray-500 uppercase tracking-widest font-medium">
              UNLIMITED POTENTIAL FOR GROWTH
            </p>
            
            {/* Large headline */}
            <h1 className="text-lg md:text-xl lg:text-3xl font-normal text-white leading-tight">
              <span className="font-bold">ACCESS GLOBAL</span><br />
              <span className="font-normal">FINANCIAL MARKETS</span>
            </h1>
            
            {/* Underlined link */}
            <a 
              href="#" 
              className="inline-flex items-center gap-1 text-white hover:text-gray-300 transition-colors duration-200 group w-fit"
            >
              <span className="text-sm font-medium border-b border-white group-hover:border-gray-300 transition-colors duration-200">
                Grow Your Savings
              </span>
              <Image
                src="/circle-arrow-img.svg"
                alt="Arrow"
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </a>
            
            {/* 3 horizontal lines with 2 text spaces - Lines hidden on mobile, text visible */}
            <div className="space-y-1 mt-4">
              {/* Line 1 */}
              <div className="relative">
                <hr className="hidden lg:block border-gray-700 border-t w-full" />
              </div>
              
              {/* Text 1 */}
              <div className="text-left">
                <span className="text-xs text-white font-medium">PERSONALISED SERVICE</span>
              </div>
              
              {/* Line 2 */}
              <div className="relative">
                <hr className="hidden lg:block border-gray-700 border-t w-full" />
              </div>
              
              {/* Text 2 */}
              <div className="text-left">
                <span className="text-xs text-white font-medium">LOCK UP AND GO</span>
              </div>
              
              {/* Line 3 */}
              <div className="relative">
                <hr className="hidden lg:block border-gray-700 border-t w-full" />
              </div>
            </div>
          </div>

          {/* Right Section - 33% (Third on mobile) */}
          <div className="flex flex-col space-y-3 lg:pl-8 mt-3 md:mt-2 lg:mt-14 lg:order-3">
            {/* Bold heading */}
            <h3 className="text-base md:text-lg lg:text-xl font-bold text-white leading-tight">
              We put the S&P 500 and NASDAQ at your fingertips.
            </h3>
            
            {/* Paragraph */}
            <p className="text-sm text-gray-300 leading-relaxed mt-2 md:mt-6">
              A whole world of investing is just a few taps away: diversify your financial portfolio with effortless and affordable access to U.S. stocks no matter where you live.7 We make it easy to track your net worth at a glance with your securities, cryptocurrencies, and US dollar savings all in one app.
            </p>
            
            {/* 3 horizontal lines with 2 empty text spaces - Hidden on mobile */}
            <div className="hidden lg:block space-y-1 mt-12">
              {/* Line 1 */}
              <div className="relative">
                <hr className="border-gray-700 border-t w-full" />
              </div>
              
              {/* Empty Text Space 1 */}
              <div className="text-right">
                <span className="text-xs text-white font-medium invisible">.</span>
              </div>
              
              {/* Line 2 */}
              <div className="relative">
                <hr className="border-gray-700 border-t w-full" />
              </div>
              
              {/* Empty Text Space 2 */}
              <div className="text-right">
                <span className="text-xs text-white font-medium invisible">.</span>
              </div>
              
              {/* Line 3 */}
              <div className="relative">
                <hr className="border-gray-700 border-t w-full" />
              </div>
            </div>
          </div>
          
        </div>
        </div>
      </div>
    </motion.section>

    {/* Fourth Transaction Section - Phone 4 - SLIDES FROM BOTTOM */}
    <motion.section 
      className="bg-black text-white w-full overflow-hidden sticky top-0 h-screen"
      style={{ 
        y: card4Y,
        scale: card4Scale,
        opacity: card4Opacity,
        zIndex: 4
      }}
    >
      <div className="px-4 md:px-4 lg:px-8 py-6 mt-6 lg:mt-15">
        <div className="mx-auto w-full px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-0 items-start">
          
          {/* Center Section - Phone Image (First on mobile) */}
          <div className="flex justify-center items-center min-h-0 lg:min-h-0 lg:order-2">
            <div className="max-w-xs md:max-w-sm">
              <Image
                src="/phone-4.png"
                alt="Phone Mockup"
                width={300}
                height={600}
                className="w-full h-[450px] md:h-[500px] lg:h-[550px] object-cover"
                priority
              />
            </div>
          </div>

          {/* Left Section - 33% (Second on mobile) */}
          <div className="flex flex-col space-y-4 lg:pr-8 mt-4 md:mt-20 lg:mt-35 lg:order-1">
            {/* Tiny gray text */}
            <p className="text-xs text-gray-500 uppercase tracking-widest font-medium">
              PERSONALISED SERVICE
            </p>
            
            {/* Large headline */}
            <h1 className="text-lg md:text-xl lg:text-3xl font-normal text-white leading-tight">
              <span className="font-bold">DEDICATED BANKERS</span><br />
              <span className="font-normal text-base md:text-lg lg:text-2xl">WITH BITCOIN EXPERTISE</span>
            </h1>
            
            {/* Underlined link */}
            <a 
              href="#" 
              className="inline-flex items-center gap-1 text-white hover:text-gray-300 transition-colors duration-200 group w-fit"
            >
              <span className="text-sm font-medium border-b border-white group-hover:border-gray-300 transition-colors duration-200">
                Get In Touch
              </span>
              <Image
                src="/circle-arrow-img.svg"
                alt="Arrow"
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </a>
            
            {/* 2 horizontal lines with 1 text space - Lines hidden on mobile, text visible */}
            <div className="space-y-1 mt-4">
              {/* Line 1 */}
              <div className="relative">
                <hr className="hidden lg:block border-gray-700 border-t w-full" />
              </div>
              
              {/* Text 1 */}
              <div className="text-left">
                <span className="text-xs text-white font-medium">LOCK UP AND GO</span>
              </div>
              
              {/* Line 2 */}
              <div className="relative">
                <hr className="hidden lg:block border-gray-700 border-t w-full" />
              </div>
            </div>
          </div>

          {/* Right Section - 33% (Third on mobile) */}
          <div className="flex flex-col space-y-3 lg:pl-8 mt-4 md:mt-2 lg:mt-14 lg:order-3">
            {/* Bold heading */}
            <h3 className="text-base md:text-lg lg:text-xl font-bold text-white leading-tight">
              Enjoy an exceptional level of service, around the clock.
            </h3>
            
            {/* Paragraph */}
            <p className="text-sm text-gray-300 leading-relaxed mt-4">
              Tired of chatting with bots? We hear you. As a member, you'll have a dedicated account manager who can guide you through our offerings and help with anything you need. Support is available 7 days a week and we welcome all our members to visit us in person at our New York headquarters.
            </p>
            
            {/* 2 horizontal lines with 1 empty text space - Hidden on mobile */}
            <div className="hidden lg:block space-y-1 mt-7">
              {/* Line 1 */}
              <div className="relative">
                <hr className="border-gray-700 border-t w-full" />
              </div>
              
              {/* Empty Text Space 1 */}
              <div className="text-right">
                <span className="text-xs text-white font-medium invisible">.</span>
              </div>
              
              {/* Line 2 */}
              <div className="relative">
                <hr className="border-gray-700 border-t w-full" />
              </div>
            </div>
          </div>
          
        </div>
        </div>
      </div>
    </motion.section>

    {/* Fifth Transaction Section - Phone 5 - SLIDES FROM BOTTOM */}
    <motion.section 
      className="bg-black text-white w-full sticky top-0"
      style={{ 
        y: card5Y,
        opacity: card5Opacity,
        zIndex: 5
      }}
    >
      <div className="px-4 md:px-4 lg:px-8 py-6 mt-6 lg:mt-15">
        <div className="mx-auto w-full px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-0 items-start">
          
          {/* Center Section - Phone Image (First on mobile) */}
          <div className="flex justify-center items-center min-h-0 lg:min-h-0 lg:order-2">
            <div className="max-w-xs md:max-w-sm">
              <Image
                src="/phone-5.png"
                alt="Phone Mockup"
                width={300}
                height={600}
                className="w-full h-[450px] md:h-[500px] lg:h-[550px] object-cover"
                priority
              />
            </div>
          </div>

          {/* Left Section - 33% (Second on mobile) */}
          <div className="flex flex-col space-y-4 lg:pr-8 mt-4 md:mt-20 lg:mt-35 lg:order-1">
            {/* Tiny gray text */}
            <p className="text-xs text-gray-500 uppercase tracking-widest font-medium">
              LOCK UP AND GO
            </p>
            
            {/* Large headline */}
            <h1 className="text-lg md:text-xl lg:text-3xl font-normal text-white leading-tight">
              <span className="font-bold">HOLD THE KEYS TO</span><br />
              <span className="font-normal">YOUR BTC VAULT</span>
            </h1>
            
            {/* Underlined link */}
            <a 
              href="#" 
              className="inline-flex items-center gap-1 text-white hover:text-gray-300 transition-colors duration-200 group w-fit"
            >
              <span className="text-sm font-medium border-b border-white group-hover:border-gray-300 transition-colors duration-200">
                How Keys work
              </span>
              <Image
                src="/circle-arrow-img.svg"
                alt="Arrow"
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </a>
          </div>

          {/* Right Section - 33% (Third on mobile) */}
          <div className="flex flex-col space-y-3 lg:pl-8 mt-4 md:mt-2 lg:mt-14 lg:order-3">
            {/* Bold heading */}
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white leading-tight">
              You're in control with your hardware security key.
            </h3>
            
            {/* Paragraph */}
            <p className="text-sm text-gray-300 leading-relaxed mt-4">
              Add a hardware security key to safeguard ETH Vault withdrawals, and remain protected even if someone gains access to your phone and PIN. With this additional layer of physical security, you decide when—and if—your Ethereum moves.
            </p>
          </div>
          
        </div>
        </div>
      </div>
    </motion.section>
    
    {/* Hidden scrollbar styles */}
    <style jsx>{`
      .hide-scrollbar {
        scrollbar-width: none;
        -ms-overflow-style: none;
      }
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
    `}</style>
    </div>
  );
}