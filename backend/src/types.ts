export type DishesTypes = {
  id: number;
  name: string;
  price: number;
  weight: number;
  description: string;
  photo: Buffer;
};

export type AddDishesTypes = {
  name: string;
  price: number;
  description: string;
  weight: number;
  photo: string;
};

export type DrinksTypes = {
  id: number;
  name: string;
  price: number;
  description: string;
  quantity: number;
  photo: Buffer;
};
