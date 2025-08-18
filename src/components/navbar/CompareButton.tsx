import Image from "next/image";

export default function CompareButton() {
  const buttonStyles = {
    backgroundColor: '#497493',
    borderColor: '#497493'
  };

  return (
    <button 
      className="flex items-center gap-1 md:gap-2 rounded-2xl md:rounded-3xl px-2 md:px-4 py-1 md:py-1.5 text-xs md:text-sm font-medium text-white hover:opacity-90 transition border"
      style={buttonStyles}
    >
      <Image 
        src="/compare-img.svg" 
        alt="Compare" 
        width={12} 
        height={12} 
        className="md:w-4 md:h-4" 
      />
      Compare
    </button>
  );
}
