import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, User as UserIcon, LogOut } from 'lucide-react';
import { useApp } from '../store';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount, user, logout } = useApp();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? 'text-gray-900 font-medium' : 'text-gray-500 hover:text-gray-900';

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="font-serif text-2xl font-bold tracking-tighter">LUMINA.</Link>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className={isActive('/')}>Home</Link>
            <Link to="/shop" className={isActive('/shop')}>Shop</Link>
            <div className="h-4 w-px bg-gray-300 mx-2"></div>
            
            {user ? (
               <div className="flex items-center space-x-4">
                 <span className="text-sm text-gray-600">Hi, {user.name}</span>
                 <button onClick={logout} className="text-gray-500 hover:text-red-500" title="Logout">
                   <LogOut size={20} />
                 </button>
               </div>
            ) : (
              <Link to="/login" className={isActive('/login')}>
                <UserIcon size={20} />
              </Link>
            )}

            <Link to="/cart" className={`relative ${isActive('/cart')}`}>
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <Link to="/cart" className="mr-4 relative text-gray-600">
               <ShoppingBag size={24} />
               {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-900">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link to="/" className="block py-3 text-base font-medium text-gray-700 hover:bg-gray-50" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/shop" className="block py-3 text-base font-medium text-gray-700 hover:bg-gray-50" onClick={() => setIsOpen(false)}>Shop</Link>
            <div className="border-t border-gray-100 my-2"></div>
            {user ? (
               <button onClick={() => { logout(); setIsOpen(false); }} className="w-full text-left block py-3 text-base font-medium text-red-600 hover:bg-gray-50">
                 Logout ({user.name})
               </button>
            ) : (
              <Link to="/login" className="block py-3 text-base font-medium text-gray-700 hover:bg-gray-50" onClick={() => setIsOpen(false)}>Login</Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;