import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { useApp } from '../store';
import { Minus, Plus, ShoppingBag } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useApp();
  
  const product = PRODUCTS.find(p => p.id === id);
  
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [error, setError] = useState('');

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">Product not found</div>;
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      setError('Please select a size');
      return;
    }
    setError('');
    addToCart(product, selectedSize);
    // Simple visual feedback could go here
    navigate('/cart');
  };

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12">
          {/* Image */}
          <div className="aspect-[4/5] bg-gray-100 overflow-hidden rounded-sm">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Details */}
          <div className="mt-10 lg:mt-0 lg:col-start-2">
            <div className="mb-8">
              <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-2xl font-medium text-gray-900">₹{product.price.toLocaleString('en-IN')}</p>
            </div>

            <div className="prose prose-sm text-gray-500 mb-10">
              <p>{product.description}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-900 mb-4">Size</h3>
              <div className="grid grid-cols-4 gap-4 sm:grid-cols-6">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => { setSelectedSize(size); setError(''); }}
                    className={`
                      py-3 text-sm font-medium uppercase border transition-all
                      ${selectedSize === size 
                        ? 'border-gray-900 bg-gray-900 text-white' 
                        : 'border-gray-200 text-gray-900 hover:border-gray-900'}
                    `}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-gray-900 text-white py-4 px-8 flex items-center justify-center space-x-2 hover:bg-gray-800 transition-colors"
            >
              <ShoppingBag size={20} />
              <span className="font-semibold uppercase tracking-wide">Add to Cart</span>
            </button>

            <div className="mt-8 border-t border-gray-100 pt-8 space-y-4">
              <div className="flex text-sm text-gray-500">
                <span className="font-medium text-gray-900 w-24">Shipping</span>
                <span>Calculated at checkout. Free over ₹2,500.</span>
              </div>
              <div className="flex text-sm text-gray-500">
                <span className="font-medium text-gray-900 w-24">Returns</span>
                <span>Free 30-day returns.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;