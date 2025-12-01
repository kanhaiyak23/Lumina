import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const IMAGES = [
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gray-900 h-[80vh] overflow-hidden">
      {/* Image Carousel */}
      {IMAGES.map((image, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-60' : 'opacity-0'
          }`}
        >
          <img 
            src={image} 
            alt={`Fashion Slide ${index + 1}`} 
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      
      {/* Overlay Gradient (static) */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl z-10">
          <h1 className="text-4xl md:text-6xl font-serif text-white font-bold leading-tight mb-6 tracking-tight drop-shadow-md">
            Refined Style for <br />
            <span className="text-gray-300 italic">Every Moment.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-lg drop-shadow-sm">
            Discover our new collection of ethically crafted, premium essentials designed to elevate your daily wardrobe.
          </p>
          <Link 
            to="/shop" 
            className="inline-flex items-center px-8 py-4 bg-white text-gray-900 text-sm font-semibold tracking-wide uppercase hover:bg-gray-100 transition-colors duration-200"
          >
            Shop Collection <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
      
      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {IMAGES.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'
            }`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;