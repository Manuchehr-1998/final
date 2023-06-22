import { type } from "os";

export type DishesTypes = {
  id: string;
  name: string;
  price: number;
  weight: number;
  description: string;
  photo: Buffer;
};

export type Beverages = {
  id: string;
  name: string;
  price: number;
  descriprion: string;
  quantity: number;
  photo: Buffer;
};
