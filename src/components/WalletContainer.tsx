
import React from 'react';
import './WalletContainer.css';

const WalletContainer = () => {
  return (
    <div className="wallet-container">
      {/* Hexagonal polygon icon */}
      <div className="polygon-container">
        <svg width={22} height={24} viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M9 1.1547C10.2376 0.440169 11.7624 0.440169 13 1.1547L19.3923 4.8453C20.6299 5.55983 21.3923 6.88034 21.3923 8.3094V15.6906C21.3923 17.1197 20.6299 18.4402 19.3923 19.1547L13 22.8453C11.7624 23.5598 10.2376 23.5598 9 22.8453L2.6077 19.1547C1.37009 18.4402 0.607696 17.1197 0.607696 15.6906V8.3094C0.607696 6.88034 1.37009 5.55983 2.6077 4.8453L9 1.1547Z" 
            fill="url(#paint0_linear_25_4956)" 
          />
          <defs>
            <linearGradient id="paint0_linear_25_4956" x1={11} y1={0} x2={11} y2={24} gradientUnits="userSpaceOnUse">
              <stop stopColor="#F8F8F8" stopOpacity="0.9" />
              <stop offset={1} stopColor="#F8F8F8" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Label container with horizontal bars and button */}
      <div className="wallet-label-container">
        {/* Horizontal bars container */}
        <div className="wallet-label-inner-container">
          <div className="testimonial-browser-tab-inner-left-1"></div>
          <div className="testimonial-browser-tab-inner-left-2"></div>
        </div>

        {/* Right side button container */}
        <div className="wallet-label-container-2">
          <div className="wallet-label-inner-container-2"></div>
        </div>
      </div>
    </div>
  );
};

export default WalletContainer;
