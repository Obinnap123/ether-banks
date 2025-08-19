import { Facebook, Instagram, Linkedin, Twitter, Youtube, ArrowUp, ArrowDown } from "lucide-react";
import AppStoreButton from "./AppStoreButton";
import GooglePlayButton from "./GooglePlayButton";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 px-3 sm:px-4 md:px-4 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-20 space-y-4 sm:space-y-6 md:space-y-8">
           {/* 🔹 Moving Carousel - Mobile Safe (No Horizontal Scroll) */}
      <div className="overflow-hidden pb-2 sm:pb-3">
        <div className="animate-marquee inline-flex items-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-12 whitespace-nowrap">
          <span className="text-xs text-gray-400">Price at Xapo Bank</span>
          <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium flex items-center space-x-1 sm:space-x-2">
            <span>BTC/USD</span>
            <span>101,439.78</span>
            <span className="text-red-500 flex items-center">
              <ArrowDown size={12} className="mr-0.5 sm:mr-1 sm:w-3 sm:h-3 md:w-4 md:h-4" />
              0.88%
            </span>
          </span>
          
          <span className="text-xs text-gray-400">Price at Xapo Bank</span>
          <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium flex items-center space-x-1 sm:space-x-2">
            <span>USDT/USD</span>
            <span>1.00</span>
            <span className="text-green-500 flex items-center">
              <ArrowUp size={12} className="mr-0.5 sm:mr-1 sm:w-3 sm:h-3 md:w-4 md:h-4" />
              0.00%
            </span>
          </span>

          {/* Duplicate the content for seamless loop */}
          <span className="text-xs text-gray-400">Price at Xapo Bank</span>
          <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium flex items-center space-x-1 sm:space-x-2">
            <span>BTC/USD</span>
            <span>101,439.78</span>
            <span className="text-red-500 flex items-center">
              <ArrowDown size={12} className="mr-0.5 sm:mr-1 sm:w-3 sm:h-3 md:w-4 md:h-4" />
              0.88%
            </span>
          </span>
          
          <span className="text-xs text-gray-400">Price at Xapo Bank</span>
          <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium flex items-center space-x-1 sm:space-x-2">
            <span>USDT/USD</span>
            <span>1.00</span>
            <span className="text-green-500 flex items-center">
              <ArrowUp size={12} className="mr-0.5 sm:mr-1 sm:w-3 sm:h-3 md:w-4 md:h-4" />
              0.00%
            </span>
          </span>
        </div>
      </div>

       {/* 🔹 Horizontal rules + Back to top - Hidden on mobile for cleaner UX */}
      <div className="hidden sm:flex sm:flex-row items-start justify-between gap-6 md:gap-8 lg:gap-16">
        <div className="w-full sm:w-1/3">
          <hr className="border-gray-700" />
        </div>
        <div className="w-full sm:w-1/3 flex flex-col">
          <hr className="border-gray-700" />
          <div className="flex justify-end mt-1 sm:mt-2">
            <a 
              href="#top" 
              className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors duration-200"
            >
              BACK TO TOP 
              <img 
                src="/arrow-img.svg" 
                alt="Back to top arrow" 
                className="w-3 h-3"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Links Grid - Ultra Responsive with Hover Effects */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm">
        <div>
          <h3 className="font-semibold mb-2 sm:mb-3 text-white">Banking</h3>
          <ul className="space-y-1 sm:space-y-2">
            <li><a href="#" className="hover:text-white transition-colors duration-200">Hold</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Transact</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Earn</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Grow</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Borrow</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2 sm:mb-3 text-white">Security</h3>
          <ul className="space-y-1 sm:space-y-2">
            <li><a href="#" className="hover:text-white transition-colors duration-200">Our Security System</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Reserve</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Compliance</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Inheritance</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2 sm:mb-3 text-white">Insights</h3>
          <ul className="space-y-1 sm:space-y-2">
            <li><a href="#" className="hover:text-white transition-colors duration-200">The Xapo Insider</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">FAQs</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Support</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2 sm:mb-3 text-white">About Us</h3>
          <ul className="space-y-1 sm:space-y-2">
            <li><a href="#" className="hover:text-white transition-colors duration-200">Mission</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Expertise</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Disclosures</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2 sm:mb-3 text-white">Get in Touch</h3>
          <ul className="space-y-1 sm:space-y-2">
            <li><a href="#" className="hover:text-white transition-colors duration-200">Contact Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Complaint</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2 sm:mb-3 text-white">Legal</h3>
          <ul className="space-y-1 sm:space-y-2">
            <li><a href="#" className="hover:text-white transition-colors duration-200">Privacy Notice</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Cookie Notice</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Website Terms</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Legal Notice</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Gibraltar Scheme</a></li>
          </ul>
        </div>
      </div>

      {/* Modern Mobile-First Footer Section - Clean Left Alignment */}
      <div className="-mx-3 sm:-mx-4 md:-mx-4 lg:-mx-8 px-3 sm:px-4 md:px-4 lg:px-8 pb-2 sm:pb-3 pt-6 sm:pt-8 md:pt-12 lg:pt-20" style={{ backgroundColor: 'rgba(2, 7, 11, 1)' }}>
        
        {/* Mobile: Clean stacked layout with consistent left alignment */}
        <div className="block sm:hidden space-y-6 mt-4 mb-8">
          
          {/* Address - Left aligned with location icon */}
          <div className="flex items-start space-x-3">
            <img 
              src="/location-img.png" 
              alt="Location" 
              className="w-4 h-4 mt-2 flex-shrink-0"
            />
            <p className="text-sm text-gray-400 leading-relaxed">
              One Grand Casemates Square <br /> 
              Gibraltar, GX11 1AA
            </p>
          </div>
          
          {/* Social Media - Left aligned with larger touch targets */}
          <div className="flex justify-start space-x-6 text-gray-400">
            <a href="#" className="hover:text-white transition-colors duration-200">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              <Youtube size={20} />
            </a>
          </div>
          
          {/* App Store Buttons - Side by side with proper spacing */}
          <div className="flex flex-row gap-4 items-start">
            <AppStoreButton />
            <GooglePlayButton />
          </div>
          
        </div>

        {/* Tablet+ : Original horizontal layout with proper spacing */}
        <div className="hidden sm:flex sm:items-center sm:justify-between gap-6 md:gap-8 border border-gray-600 rounded-lg p-4 md:p-6 mt-6 md:mt-10 mb-4 md:mb-8" style={{ backgroundColor: 'rgba(128, 158, 179, 0.12)' }}>
          <div className="flex items-start space-x-3">
            <img 
              src="/location-img.png" 
              alt="Location" 
              className="w-4 h-4 mt-2 flex-shrink-0"
            />
            <p className="text-sm text-gray-400">
              One Grand Casemates Square <br /> 
              Gibraltar, GX11 1AA
            </p>
          </div>
          <div className="flex justify-center space-x-4 text-gray-400">
            <a href="#" className="hover:text-white transition-colors duration-200">
              <Instagram size={20} className="md:w-6 md:h-6" />
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              <Facebook size={20} className="md:w-6 md:h-6" />
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              <Linkedin size={20} className="md:w-6 md:h-6" />
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              <Twitter size={20} className="md:w-6 md:h-6" />
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              <Youtube size={20} className="md:w-6 md:h-6" />
            </a>
          </div>
          <div className="flex flex-row gap-3 md:gap-4 justify-end">
            <AppStoreButton />
            <GooglePlayButton />
          </div>
        </div>
        
      </div>

      {/* Legal text - Fixed mobile horizontal scroll */}
      <div className="text-xs space-y-4 pt-6 leading-relaxed -mx-3 sm:-mx-4 md:-mx-4 lg:-mx-8 px-3 sm:px-4 md:px-4 lg:px-8 -mt-8" style={{ backgroundColor: 'rgba(14, 14, 14, 1)', borderTop: '1px solid rgba(14, 14, 14, 1)', color: 'rgba(194, 194, 194, 1)' }}>
        <p>
          <sup>1</sup>Eligible fiat deposits are protected by the Gibraltar Deposit Guarantee Scheme up to a maximum of the US Dollar equivalent of EUR 100,000 (subject to prevailing exchange rates on the compensation date). Bitcoin deposits are not covered by the Gibraltar Deposit Guarantee Scheme.
        </p>
        <p>
          <sup>2</sup>This information is not investment advice. Crypto asset values can go up as well as down and you could lose all the money you invest. This is a high-risk investment and you are not protected if it loses all or some of its value. Past performance is not indicative of future results. Bitcoin deposits are not covered by the Gibraltar Deposit Guarantee Scheme.
        </p>
        <p>
          <sup>3</sup>The Xapo Bank card can be used globally, however, we cannot guarantee that a particular ATM will accept it. Members may also incur charges directly from the ATM operator for a withdrawal. For more information see our FAQs.
        </p>
        <p>
          <sup>4</sup>Interest on Bitcoin deposits will only be paid on balances of 5 BTC or less. The Annual Interest Rate offered on both USD and Bitcoin deposits is variable and may change at any time. Interest on both USD and BTC is currently paid in BTC. We may instead choose to pay it in any other supported currency or currencies (fiat and/or crypto) from time to time. Please see our Interest FAQs for more information.
        </p>
        <p>
          <sup>5</sup>Please note that some merchant categories are excluded from earning cashback. Please see our Xapo Bank card FAQs for more information.
        </p>
        <p>
          <sup>6</sup>All referral rewards are paid in BTC. Subject to meeting eligibility criteria and referral terms.
        </p>
        <p>
          <sup>7</sup>This information is not investment advice. Security values can go up as well as down. Past performance is not indicative of future results.
        </p>
        <p>
          *Crypto asset services are provided by Xapo Vasp Limited, a company regulated by the Gibraltar Financial Services Commission as a 'Distributed Ledger Technology Provider' under Permission No. 26061 and not by Xapo Bank Limited. Xapo Bank Limited provides services exclusively in respect of fiat balances. Crypto asset deposits are not covered by the Gibraltar Deposit Guarantee Scheme.
        </p>
        <p>
          *For more information on the security features available at Xapo Bank Limited and Xapo Vasp Limited, please visit: https://www.xapobank.com/en/blog/banking-your-btc
        </p>
        <div className="pt-5">
          <p>
            This Financial Promotion has been approved by Xapo Bank Limited on July 22, 2024.
          </p>
        </div>
        <p>
          Any translation of our website into any language other than English is for convenience purposes only. In the event of any conflict or inconsistency between the English version and a translated version, the English version shall prevail.
        </p>
        <p>
          Xapo Bank Limited is a company registered and incorporated in Gibraltar with company No. 111928. Xapo Bank Limited is regulated by the Gibraltar Financial Services Commission under the Financial Services Act 2019 as a 'credit institution' under Permission No. 23171.
        </p>
        <p>
          Xapo VASP Limited is a company registered and incorporated in Gibraltar with company No. 118088 and regulated by the Gibraltar Financial Services Commission under the Financial Services Act 2019 as a 'DLT institution' under Permission No. 26061.
        </p>
        <p>© Xapo Holdings Limited 2025. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
