import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Autoplay from "embla-carousel-autoplay";
import LazyImage from './LazyImage';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface HeroCarouselProps {
  heading?: string;
  subheading?: string;
  buttonText?: string;
  buttonLink?: string;
  images?: string[];
  overlayOpacity?: string;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({
  heading = "Taste the Journey",
  subheading = "Authentic Middle Eastern Cuisine in Boise",
  buttonText = "View Our Menu",
  buttonLink = "/menu",
  images = [
    "/images-optimized/gallery/gallery-1.webp",
    "/images-optimized/gallery/gallery-2.webp",
    "/images-optimized/gallery/gallery-3.webp",
    "/images-optimized/gallery/gallery-4.webp",
  ],
  overlayOpacity = "opacity-50"
}) => {
  const navigate = useNavigate();
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );
  
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Carousel Background */}
      <Carousel 
        className="absolute inset-0 min-w-full min-h-full object-cover z-0"
        opts={{
          loop: true,
        }}
        plugins={[plugin.current]}
      >
        <CarouselContent className="ml-0">
          {images.map((src, index) => (
            <CarouselItem key={index} className="pl-0">
              <div className="h-screen w-full">
                <LazyImage 
                  src={src} 
                  alt={`Slide ${index + 1}`}
                  className="h-full w-full object-cover"
                  priority={index < 2}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      
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

export default HeroCarousel;
