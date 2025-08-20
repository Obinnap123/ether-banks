import Image from "next/image";
export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center">
      {/* ASCII Typography Section - Responsive */}
      <div className="flex flex-col items-start py-8 md:py-12 lg:py-20 px-4 md:px-8">
        {/* Exact ASCII Layout with precise character alignment - Responsive */}
        <div className="text-white font-normal text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-mono">
          {/* Line 1: THE ONLY */}
          <div className="whitespace-pre">THE ONLY</div>

          {/* Line 2: WAY + longer horizontal rule + TO BANK */}
          <div className="whitespace-pre">WAY —————————————— TO BANK</div>

          {/* Line 3: YOUR ETHER (bitcoin image on R directly under K of BANK) */}
          <div className="whitespace-pre">
            {"                "}YOUR ETHE
            <span className="relative">
              R
              <Image
                src="/bitcoin-img.svg"
                alt="Bitcoin"
                width={16}
                height={16}
                className="absolute -top-1 sm:-top-2 -right-0.5 sm:-right-1 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 xl:w-8 xl:h-8"
              />
            </span>
          </div>
        </div>
      </div>

      {/* Full Width Background Image Section - Responsive */}
      <div className="relative w-full h-[100vh] sm:h-[110vh] md:h-[120vh] lg:h-[130vh] xl:h-[140vh] -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-16 xl:-mx-20">
        <Image
          src="/man-img.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay box - Fully Responsive */}
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-12 lg:bottom-12 lg:left-16 bg-black/40 text-white p-3 sm:p-4 md:p-6 rounded-lg max-w-[280px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] backdrop-blur-sm">
          <p className="mb-3 md:mb-4 text-xs sm:text-sm md:text-base leading-relaxed">
            With an all-in-one app that lets you secure, transact, and increase your Ethereum money,
            you can be the first to access the banking of the future. With unmatched protection for
            your holdings, simple sending and spending, and exclusive earning opportunities like daily
            interest payments on your Ethereum, we put financial freedom in your hands.
            <br /><br />
            Join us to protect and grow your Ethereum <br />
            wealth.
          </p>
          
          {/* Responsive Learn More Button */}
          <button className="flex items-center gap-4 sm:gap-6 bg-white text-black pl-3 sm:pl-4 pr-1 py-0.5 sm:py-1 text-xs sm:text-sm rounded-full hover:bg-gray-200 transition font-medium">
            Learn More 
            <div className="bg-black rounded-full p-2 sm:p-3 md:p-4 flex items-center justify-center">
              <Image 
                src="/Vector (Stroke).svg"
                alt="Arrow"
                width={8}
                height={8}
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5"
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
