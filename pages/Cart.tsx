import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../store';
import { Trash2, Plus, Minus, ArrowLeft } from 'lucide-react';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useApp();

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white px-4">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Your cart is empty</h2>
        <p className="text-gray-500 mb-8">Looks like you haven't added anything yet.</p>
        <Link to="/shop" className="px-8 py-3 bg-gray-900 text-white font-semibold uppercase text-sm tracking-wide hover:bg-gray-800 transition-colors">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-12">Shopping Cart</h1>

        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
          {/* Cart Items */}
          <div className="lg:col-span-7">
            <ul className="border-t border-b border-gray-200 divide-y divide-gray-200">
              {cart.map((item) => (
                <li key={`${item.id}-${item.selectedSize}`} className="flex py-6 sm:py-10">
                  <div className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 sm:w-32 sm:h-32 rounded-sm object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-sm">
                            <Link to={`/product/${item.id}`} className="font-medium text-gray-700 hover:text-gray-800">
                              {item.name}
                            </Link>
                          </h3>
                        </div>
                        <div className="mt-1 flex text-sm">
                          <p className="text-gray-500">Size: {item.selectedSize}</p>
                        </div>
                        <p className="mt-1 text-sm font-medium text-gray-900">₹{item.price.toLocaleString('en-IN')}</p>
                      </div>

                      <div className="mt-4 sm:mt-0 sm:pr-9">
                        <div className="flex items-center border border-gray-300 w-max rounded-sm">
                          <button 
                            onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                            className="p-2 hover:bg-gray-100"
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-4 text-sm">{item.quantity}</span>
                          <button 
                             onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                             className="p-2 hover:bg-gray-100"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        
                        <div className="absolute top-0 right-0">
                          <button 
                            onClick={() => removeFromCart(item.id, item.selectedSize)}
                            className="-m-2 p-2 inline-flex text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Remove</span>
                            <Trash2 size={20} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <button onClick={clearCart} className="text-sm text-red-600 hover:text-red-800 underline">
                Clear Cart
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
            <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">Subtotal</p>
                <p className="text-sm font-medium text-gray-900">₹{cartTotal.toLocaleString('en-IN')}</p>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="flex items-center text-sm text-gray-600">
                  <span>Shipping estimate</span>
                </dt>
                <dd className="text-sm font-medium text-gray-900">
                  {cartTotal > 2500 ? 'Free' : '₹150.00'}
                </dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="text-base font-medium text-gray-900">Order total</dt>
                <dd className="text-base font-medium text-gray-900">
                  ₹{(cartTotal + (cartTotal > 2500 ? 0 : 150)).toLocaleString('en-IN')}
                </dd>
              </div>
            </div>

            <div className="mt-6">
              <button className="w-full bg-gray-900 border border-transparent rounded-sm py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-500">
                Checkout
              </button>
            </div>
            
            <div className="mt-6 text-center text-sm">
               <Link to="/shop" className="text-gray-600 hover:text-gray-900 flex items-center justify-center gap-2">
                 <ArrowLeft size={16} /> Continue Shopping
               </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;