export default function GooglePlayButton() {
  return (
    <a 
      href="https://play.google.com/store/apps/details?id=com.xapo.bank" 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-block transition-transform hover:scale-105"
    >
      <div className="bg-black rounded-lg px-4 py-2 border border-gray-600 hover:border-gray-400 transition-colors">
        <div className="flex items-center space-x-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
            <path
              d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"
              fill="currentColor"
            />
          </svg>
          <div className="flex flex-col">
            <span className="text-xs text-gray-300">Get it on</span>
            <span className="text-sm font-semibold text-white">Google Play</span>
          </div>
        </div>
      </div>
    </a>
  );
}
