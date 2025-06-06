
import React, { useState } from 'react';
import './WalletContainer.css';

const WalletContainer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPressed(false);
  };
  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);

  return (
    <div 
      className={`wallet-container ${isHovered ? 'hovered' : ''} ${isPressed ? 'pressed' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {/* Productivity text */}
      <div className="productivity-text">
        Productivity
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
