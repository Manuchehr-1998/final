import { FishDishesModel } from "../models/FishDishesModel";
import { Request, Response } from "express";

export default class FishDishesController {
  static getAllFishDishes() {
    return async (req: Request, res: Response) => {
      try {
        const arrayFishDishes = await FishDishesModel.getFishDishes();
        return res.json(arrayFishDishes);
      } catch (error) {
        return res.json(error);
      }
    };
  }
}
