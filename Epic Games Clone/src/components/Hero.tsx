import React from 'react';

export const Hero = () => {
  return (
    <div className="relative h-[500px] bg-gradient-to-r from-blue-900 to-purple-900">
      <img
        src="https://images.unsplash.com/photo-1542751371-adc38448a05e"
        alt="Featured Game"
        className="w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-4">
              Cyberpunk 2077
            </h1>
            <p className="text-lg text-gray-200 mb-6">
              Experience the future in this open-world action RPG. Customize your character and make your mark on Night City.
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold">
                Buy Now
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};