export interface FoodMenuItem {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export type FoodTypes = 'Maki' | 'Entree' | 'Appetizer' | 'Nigiri';

type FoodMenu = {
  [key in FoodTypes]: FoodMenuItem[];
};

export const foods: FoodMenu = {
  Appetizer: [
    {
      id: 1,
      name: 'Tempura',
      price: 800,
      imageUrl: '/food/tempura.png',
    },
    {
      id: 2,
      name: 'Gyoza',
      price: 700,
      imageUrl: '/food/gyoza.png',
    },
  ],
  Nigiri: [
    {
      id: 3,
      name: 'Tuna',
      price: 500,
      imageUrl: '/food/nigiri-tuna.png',
    },
    {
      id: 4,
      name: 'Salmon',
      price: 600,
      imageUrl: '/food/nigiri-salmon.png',
    },
    {
      id: 5,
      name: 'Hamachi',
      price: 550,
      imageUrl: '/food/nigiri-hamachi.png',
    },
    {
      id: 6,
      name: 'Shrimp',
      price: 650,
      imageUrl: '/food/nigiri-shrimp.png',
    },
  ],
  Maki: [
    {
      id: 8,
      name: 'California',
      price: 900,
      imageUrl: '/food/maki-california.png',
    },
    {
      id: 9,
      name: 'Spicy Tuna',
      price: 1100,
      imageUrl: '/food/maki-spicy-tuna.png',
    },
    {
      id: 10,
      name: 'Philadelphia',
      price: 1200,
      imageUrl: '/food/maki-philadelphia.png',
    },
    {
      id: 11,
      name: 'Rainbow',
      price: 1500,
      imageUrl: '/food/maki-rainbow.png',
    },
    {
      id: 12,
      name: 'Dragon',
      price: 1600,
      imageUrl: '/food/maki-dragon.png',
    },
    {
      id: 13,
      name: 'Unagi',
      price: 1300,
      imageUrl: '/food/maki-unagi.png',
    },
  ],
  Entree: [
    {
      id: 14,
      name: 'Chicken Teriyaki Bento',
      price: 1700,
      imageUrl: '/food/chicken-teriyaki-bento.png',
    },
    {
      id: 15,
      name: 'Pork Katsu Bento',
      price: 1800,
      imageUrl: '/food/pork-katsu-bento.png',
    },
    {
      id: 16,
      name: 'Tonkatsu Ramen',
      price: 1400,
      imageUrl: '/food/tonkatsu-ramen.png',
    },
    {
      id: 17,
      name: 'Udon',
      price: 1500,
      imageUrl: '/food/udon.png',
    },
  ],
};
