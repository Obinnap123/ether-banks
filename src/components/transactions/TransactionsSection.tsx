import Image from "next/image";

export default function TransactionsSection() {
  return (
    <section className="bg-black text-white w-full overflow-x-hidden">
      <div className="px-4 md:px-4 lg:px-8 py-6 mt-6 lg:mt-15">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-0 items-start">
          
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
              ACCESS YOUR ETHER, LIGHTNING FAST
            </h1>
            
            {/* Underlined link */}
            <a 
              href="#" 
              className="inline-flex items-center gap-1 text-white hover:text-gray-300 transition-colors duration-200 group w-fit"
            >
              <span className="text-sm font-medium border-b border-white group-hover:border-gray-300 transition-colors duration-200">
                BUY, SEND, AND SPEND
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
                <hr className="hidden lg:block border-gray-700 border-t" style={{width: 'calc(100% + 11.7rem)', marginLeft: '-6rem'}} />
              </div>
              
              {/* Text 1 */}
              <div className="text-left">
                <span className="text-xs text-white font-medium">EVERYDAY EARNINGS</span>
              </div>
              
              {/* Line 2 */}
              <div className="relative">
                <hr className="hidden lg:block border-gray-700 border-t" style={{width: 'calc(100% + 11.7rem)', marginLeft: '-6rem'}} />
              </div>
              
              {/* Text 2 */}
              <div className="text-left">
                <span className="text-xs text-white font-medium">UNLIMITED POTENTIAL FOR GROWTH</span>
              </div>
              
              {/* Line 3 */}
              <div className="relative">
                <hr className="hidden lg:block border-gray-700 border-t" style={{width: 'calc(100% + 11.7rem)', marginLeft: '-6rem'}} />
              </div>
              
              {/* Text 3 */}
              <div className="text-left">
                <span className="text-xs text-white font-medium">PERSONALIZED SERVICE</span>
              </div>
              
              {/* Line 4 */}
              <div className="relative">
                <hr className="hidden lg:block border-gray-700 border-t" style={{width: 'calc(100% + 11.7rem)', marginLeft: '-6rem'}} />
              </div>
              
              {/* Text 4 */}
              <div className="text-left">
                <span className="text-xs text-white font-medium">LOCK UP AND GO</span>
              </div>
              
              {/* Line 5 */}
              <div className="relative">
                <hr className="hidden lg:block border-gray-700 border-t" style={{width: 'calc(100% + 11.7rem)', marginLeft: '-6rem'}} />
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
            <div className="hidden lg:block space-y-1 mt-1">
              {/* Line 1 */}
              <div className="relative">
                <hr className="border-gray-700 border-t" style={{width: 'calc(100% + 8rem)', marginLeft: '-6rem'}} />
              </div>
              
              {/* Empty Text Space 1 */}
              <div className="text-right">
                <span className="text-xs text-white font-medium invisible">.</span>
              </div>
              
              {/* Line 2 */}
              <div className="relative">
                <hr className="border-gray-700 border-t" style={{width: 'calc(100% + 8rem)', marginLeft: '-6rem'}} />
              </div>
              
              {/* Empty Text Space 2 */}
              <div className="text-right">
                <span className="text-xs text-white font-medium invisible">.</span>
              </div>
              
              {/* Line 3 */}
              <div className="relative">
                <hr className="border-gray-700 border-t" style={{width: 'calc(100% + 8rem)', marginLeft: '-6rem'}} />
              </div>
              
              {/* Empty Text Space 3 */}
              <div className="text-right">
                <span className="text-xs text-white font-medium invisible">.</span>
              </div>
              
              {/* Line 4 */}
              <div className="relative">
                <hr className="border-gray-700 border-t" style={{width: 'calc(100% + 8rem)', marginLeft: '-6rem'}} />
              </div>
              
              {/* Empty Text Space 4 */}
              <div className="text-right">
                <span className="text-xs text-white font-medium invisible">.</span>
              </div>
              
              {/* Line 5 */}
              <div className="relative">
                <hr className="border-gray-700 border-t" style={{width: 'calc(100% + 8rem)', marginLeft: '-6rem'}} />
              </div>
            </div>
          </div>
          
        </div>
        </div>
      </div>
    </section>
  );
}
