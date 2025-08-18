import Image from "next/image";

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function HamburgerButton({ isOpen, onClick }: HamburgerButtonProps) {
  const buttonStyles = {
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    borderColor: 'rgba(255, 255, 255, 0.06)'
  };

  const CloseIcon = () => (
    <div className="w-4 h-4 md:w-5 md:h-5 relative">
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform rotate-45 -translate-y-0.5" />
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform -rotate-45 -translate-y-0.5" />
    </div>
  );

  return (
    <button 
      className="flex items-center justify-center rounded-full p-2 md:p-4 hover:opacity-90 transition md:border"
      style={buttonStyles}
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {isOpen ? (
        <CloseIcon />
      ) : (
        <Image 
          src="/hamburger.svg" 
          alt="Menu" 
          width={15} 
          height={15} 
          className="md:w-5 md:h-5" 
        />
      )}
    </button>
  );
}
