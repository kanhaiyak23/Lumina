import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 mb-4">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm text-gray-900 font-medium mb-1 group-hover:text-gray-600 transition-colors">{product.name}</h3>
          <p className="text-sm text-gray-500">{product.category}</p>
        </div>
        <span className="text-sm font-semibold text-gray-900">₹{product.price.toLocaleString('en-IN')}</span>
      </div>
    </Link>
  );
};

export default ProductCard;