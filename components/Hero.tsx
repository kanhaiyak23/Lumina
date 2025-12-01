import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gray-900 h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Fashion Model" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-serif text-white font-bold leading-tight mb-6 tracking-tight">
            Refined Style for <br />
            <span className="text-gray-300 italic">Every Moment.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
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
    </div>
  );
};

export default Hero;