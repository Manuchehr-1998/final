import { MeatDishesModel } from "../models/MeatDishehModel";
import { Request, Response } from "express";

export default class MeatDishesController { 
  static getAllMeatDishes() {
    return async (req: Request, res: Response) => {
      try {
        const list = await MeatDishesModel.getMeatDishes();
        return res.json(list);
      } catch (error) {
        return res.json(error);
      }
    };
  }

  // static async addMeatDishes(req: Request, res: Response) {
  //   const { name, price, description, weight, type } = req.body;
  //   try {
  //     await MeatDishesModel.AddMeatDishes();
  //     return res.status(201).json({ message: "Meat dish added successfully" });
  //   } catch (error) {
  //     return res.status(500).json({ error: "Failed to add meat dish" });
  //   }
  // }
}
