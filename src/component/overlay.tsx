import React from 'react'




const Overlay: React.FC<{ text: string }> = ({ text }) => {
    return (
      <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="flex flex-col items-center text-white">
          <svg className="animate-spin h-16 w-16 text-white mb-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>{text}</span>
        </div>
      </div>
    );
  };

export default Overlay;