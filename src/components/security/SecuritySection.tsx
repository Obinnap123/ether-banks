import Image from "next/image";

export default function SecuritySection() {
  return (
    <section className="bg-black text-white mt-8 lg:mt-10 py-12 md:py-16 lg:py-20 w-full flex justify-center">
      <div className="px-4 md:px-8 lg:px-16 xl:px-20 2xl:px-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center justify-center max-w-[1280px] mx-auto">
          
          {/* Left Column - Heading + Image */}
          <div className="space-y-6 md:space-y-8 flex flex-col items-start text-left lg:items-start">
            {/* Main Heading */}
            <h2 className="text-xl md:text-2xl lg:text-3xl leading-tight">
              <span className="font-bold block">The safest place for your</span>
              <span className="font-bold">Ethereum </span>
              <span className="font-normal">Full stop</span>
            </h2>
            
            <div className="flex justify-center lg:justify-start w-full">
              <Image
                src="/water-img.png"
                alt="Security Infrastructure"
                width={600}
                height={500}
                className="w-full h-auto lg:h-70 rounded-lg object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            <div>
              {/* Top horizontal line - Hidden on mobile, shown on lg+ */}
              <hr className="border-gray-600 border-t w-full hidden lg:block" />
              
              {/* Section Label */}
              <p className="text-gray-400 text-xs md:text-sm uppercase tracking-widest font-medium mt-3 md:mt-4">
                UNPARALLELED SECURITY
              </p>
              
              {/* Subheading */}
              <h3 className="text-lg md:text-xl font-bold leading-tight mt-6 md:mt-12">
                Protect your legacy with the finest <br />
                available safeguards.
              </h3>
              
              {/* Paragraph */}
              <p className="text-gray-300 text-sm md:text-base lg:text-sm xl:text-md leading-relaxed max-w-md mt-6 md:mt-8">
                We built EtherBank in 2024 to be THE safest place for your Ethereum. Our unparalleled security starts with our status as a fully licensed bank and Ethereum custodian. That means your deposits are backed by guaranteed protections.
              </p>
            </div>
            
            {/* Link at bottom with underline */}
            <div className="mt-6 md:mt-10 lg:mt-20 ">
              <a 
                href="#" 
                className="inline-flex items-center gap-1 text-white hover:text-gray-300 transition-colors duration-200 group"
              >
                <span className="text-sm md:text-base font-medium border-b border-white group-hover:border-gray-300 transition-colors duration-200">
                  Our security system
                </span>
                <Image
                  src="/circle-arrow-img.svg"
                  alt="Arrow"
                  width={20}
                  height={20}
                  className="w-5 h-5 md:w-6 md:h-6"
                />
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
