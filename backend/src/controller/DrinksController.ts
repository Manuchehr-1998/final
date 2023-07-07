import { DrinksModel } from "../models/DrinksModel";
import { Request, Response } from "express";

export default class DrinksController {
  static getAllDrinks() {
    return async (req: Request, res: Response) => {
      try {
        const list = await DrinksModel.getDrinks();
        return res.json(list);
      } catch (error) {
        return res.json(error);
      }
    };
  }
}
