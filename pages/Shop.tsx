import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">All Products</h1>
            <p className="text-gray-500">Curated essentials for the modern wardrobe.</p>
          </div>
          <div className="mt-4 md:mt-0">
             <span className="text-sm text-gray-500">{PRODUCTS.length} items</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;