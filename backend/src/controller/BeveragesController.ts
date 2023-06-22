import { BeveragesModel } from "../models/BeveragesModel";
import { Request, Response } from "express";

export default class BeveragesController {
  static getAllBeverages() {
    return async (req: Request, res: Response) => {
      try {
        const arrBeverages = await BeveragesModel.getBeverages();
        return res.json(arrBeverages);
      } catch (error) {
        return res.json(error);
      }
    };
  }
}
