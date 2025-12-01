import React from 'react';
import Hero from '../components/Hero';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div>
      <Hero />
      
      {/* Features Banner */}
      <div className="bg-gray-50 py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Truck className="h-8 w-8 text-gray-800 mb-3" />
              <h3 className="text-sm font-bold uppercase tracking-wide mb-1">Fast Shipping</h3>
              <p className="text-xs text-gray-500">Delivery in 5-7 business days</p>
            </div>
            <div className="flex flex-col items-center">
              <RotateCcw className="h-8 w-8 text-gray-800 mb-3" />
              <h3 className="text-sm font-bold uppercase tracking-wide mb-1">Easy Returns</h3>
              <p className="text-xs text-gray-500">30-day return policy</p>
            </div>
            <div className="flex flex-col items-center">
              <ShieldCheck className="h-8 w-8 text-gray-800 mb-3" />
              <h3 className="text-sm font-bold uppercase tracking-wide mb-1">Secure Checkout</h3>
              <p className="text-xs text-gray-500">100% protected payments</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Latest Arrivals</h2>
            <Link to="/shop" className="text-sm font-medium text-gray-600 hover:text-black border-b border-gray-300 hover:border-black pb-1 transition-colors">
              View All Products
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-serif font-bold mb-4">Join the list</h2>
          <p className="text-gray-400 mb-8">Sign up for exclusive access to new drops and special offers.</p>
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
            />
            <button className="px-8 py-3 bg-white text-gray-900 font-semibold uppercase text-sm tracking-wide hover:bg-gray-200 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;