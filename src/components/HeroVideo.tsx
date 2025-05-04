
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface HeroVideoProps {
  heading?: string;
  subheading?: string;
  buttonText?: string;
  buttonLink?: string;
  videoSrc?: string;
  overlayOpacity?: string;
}

const HeroVideo: React.FC<HeroVideoProps> = ({
  heading = "Taste the Journey",
  subheading = "Authentic Middle Eastern Cuisine in Boise",
  buttonText = "View Our Menu",
  buttonLink = "/menu",
  videoSrc = "/public/images/hero.mp4",
  overlayOpacity = "opacity-50"
}) => {
  const navigate = useNavigate();
  
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 min-w-full min-h-full object-cover z-0"
        poster="/public/lovable-uploads/8de6ba25-cbbb-43d2-aef7-deef2314a6ae.png"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      
      {/* Dark Overlay */}
      <div className={`absolute inset-0 bg-brand-black ${overlayOpacity} z-10`}></div>
      
      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-desert-white px-4">
        <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in">
          {heading}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-xl animate-fade-in opacity-0" style={{animationDelay: "300ms"}}>
          {subheading}
        </p>
        <button
          onClick={() => navigate(buttonLink)}
          className="bg-desert-orange text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-opacity-90 transition-colors animate-fade-in opacity-0"
          style={{animationDelay: "600ms"}}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default HeroVideo;
