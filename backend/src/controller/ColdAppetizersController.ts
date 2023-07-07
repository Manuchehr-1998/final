import { ColdAppetizersModel } from "../models/ColdAppetizersModel";
import { Request, Response } from "express";

export default class ColdAppetizersController {
  static getAllColdAppetizers() {
    return async (req: Request, res: Response) => {
      try {
        const list = await ColdAppetizersModel.getColdAppetizers();
        return res.json(list);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to get Cold appetizers" });
      }
    };
  }
}
