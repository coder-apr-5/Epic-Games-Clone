import { Game } from '../types';

export const games: Game[] = [
  {
    id: '1',
    title: 'Fortnite',
    description: 'Battle Royale game where 100 players fight to be the last one standing.',
    price: 0,
    imageUrl: 'https://images.unsplash.com/photo-1589241062272-c0a000072dfa',
    category: 'Action',
    releaseDate: '2017-07-25',
    developer: 'Epic Games',
    publisher: 'Epic Games'
  },
  {
    id: '2',
    title: 'Cyberpunk 2077',
    description: 'Open-world action RPG set in a dystopian future.',
    price: 59.99,
    discountPercentage: 33,
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e',
    category: 'RPG',
    releaseDate: '2020-12-10',
    developer: 'CD Projekt Red',
    publisher: 'CD Projekt'
  },
  {
    id: '3',
    title: 'Red Dead Redemption 2',
    description: 'Epic tale of life in America's unforgiving heartland.',
    price: 59.99,
    imageUrl: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d',
    category: 'Action',
    releaseDate: '2019-11-05',
    developer: 'Rockstar Games',
    publisher: 'Rockstar Games'
  }
];