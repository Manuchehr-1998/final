import { GrillsModel } from "../models/GrillsModel";
import { Request, Response } from "express";

export default class GrillsController {
  static getAllGrills() {
    return async (req: Request, res: Response) => {
      try {
        const list = await GrillsModel.getGrills();
        return res.json(list);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to get grills" });
      }
    };
  }
}
