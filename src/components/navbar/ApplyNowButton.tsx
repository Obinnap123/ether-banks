import Image from "next/image";

export default function ApplyNowButton() {
  const buttonStyles = {
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    borderColor: 'rgba(255, 255, 255, 0.06)',
    color: 'rgba(255, 255, 255, 1)'
  };

  return (
    <button 
      className="flex items-center gap-8 rounded-full px-7 py-3 text-sm font-medium hover:opacity-90 transition border"
      style={buttonStyles}
    >
      Apply now
      <Image src="/user-icon.svg" alt="User" width={16} height={16} />
    </button>
  );
}
