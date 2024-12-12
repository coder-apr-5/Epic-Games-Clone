import React from 'react';
import { ShoppingCart, Search, User, Menu } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="bg-[#2a2a2a] text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="text-2xl font-bold">EPIC</div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-300">Store</a>
            <a href="#" className="hover:text-gray-300">News</a>
            <a href="#" className="hover:text-gray-300">FAQ</a>
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search games..."
              className="bg-[#202020] px-4 py-2 rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          
          <button className="p-2 hover:bg-[#3a3a3a] rounded-full">
            <ShoppingCart className="h-6 w-6" />
          </button>
          
          <button className="p-2 hover:bg-[#3a3a3a] rounded-full">
            <User className="h-6 w-6" />
          </button>
          
          <button className="md:hidden p-2 hover:bg-[#3a3a3a] rounded-full">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};