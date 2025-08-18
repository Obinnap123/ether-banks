"use client";

import { useState } from "react";
import PriceDisplay from "./PriceDisplay";
import CompareButton from "./CompareButton";
import ApplyNowButton from "./ApplyNowButton";
import HamburgerButton from "./HamburgerButton";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navStyles = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: 'rgba(255, 255, 255, 0.1)'
  };

  const mobileMenuStyles = {
    backgroundColor: 'rgba(20, 25, 40, 0.95)',
    paddingTop: '170px'
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 w-full bg-base px-4 md:px-15 py-6 z-50">
        <div className="mx-auto max-w-7xl flex items-center justify-between h-full">
          <div 
            className="flex items-center rounded-lg md:rounded-xl px-2 md:px-4 py-1.5 md:py-2 gap-2 md:gap-3 border" 
            style={navStyles}
          >
            <PriceDisplay
              label="SELL PRICE AT XAPO BANK"
              pair="BTC/USD"
              price={101439.78}
              change={-0.88}
            />
            <CompareButton />
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <ApplyNowButton />
            </div>
            <HamburgerButton isOpen={isMenuOpen} onClick={toggleMenu} />
          </div>
        </div>
      </nav>

      <div 
        className={`fixed inset-0 bg-black z-40 md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'bg-opacity-50 pointer-events-auto' 
            : 'bg-opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      >
        <div 
          className={`fixed top-0 right-0 w-64 h-full shadow-lg z-50 flex flex-col transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={mobileMenuStyles}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 flex justify-center">
            <ApplyNowButton />
          </div>
        </div>
      </div>
    </>
  );
}
