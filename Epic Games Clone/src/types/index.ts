export interface Game {
  id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage?: number;
  imageUrl: string;
  category: string;
  releaseDate: string;
  developer: string;
  publisher: string;
}

export interface CartItem {
  game: Game;
  quantity: number;
}