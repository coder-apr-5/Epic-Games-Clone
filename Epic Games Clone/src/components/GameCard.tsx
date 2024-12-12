import React from 'react';
import { Game } from '../types';
import { ShoppingCart } from 'lucide-react';

interface GameCardProps {
  game: Game;
}

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const discountedPrice = game.discountPercentage
    ? game.price * (1 - game.discountPercentage / 100)
    : game.price;

  return (
    <div className="bg-[#2a2a2a] rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-200">
      <img
        src={game.imageUrl}
        alt={game.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-white font-semibold text-lg mb-2">{game.title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{game.description}</p>
        
        <div className="flex items-center justify-between">
          <div>
            {game.discountPercentage ? (
              <div className="flex items-center space-x-2">
                <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm">
                  -{game.discountPercentage}%
                </span>
                <div>
                  <span className="text-gray-400 line-through text-sm">${game.price}</span>
                  <span className="text-white ml-2">${discountedPrice.toFixed(2)}</span>
                </div>
              </div>
            ) : (
              <span className="text-white">
                {game.price === 0 ? 'Free' : `$${game.price}`}
              </span>
            )}
          </div>
          
          <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded">
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};