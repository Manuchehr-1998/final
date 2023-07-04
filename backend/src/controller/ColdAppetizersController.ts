import { ColdAppetizersModel } from "../models/ColdAppetizersModel";
import { Request, Response } from "express";

import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

export default class ColdAppetizersController {
  static getAllColdAppetizers() {
    return async (req: Request, res: Response) => {
      try {
        const list = await ColdAppetizersModel.getColdAppetizers()
        return res.json(list);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to get Cold appetizers" });
      }
    };
  }

  static addColdAppetizer() {
    return [
      upload.single("photo"),
      async (req: any, res: Response) => {
        const { name, price, description, weight } = req.body;
        try {
          await ColdAppetizersModel.AddColdAppetizer(
            name,
            price,
            description,
            weight,
            req.file.buffer
          );
          return res.status(201).json("Cold appetizer added successfully");
        } catch (error) {
          console.error(error);
          return res.status(500).json("Failed to add cold appetizer");
        }
      },
    ];
  }

  static async deleteColdAppetizer(req: any, res: Response) {
    const { id } = req.params;
    try {
      const deleteRowCount = await ColdAppetizersModel.DeleteColdAppetizer(id);
      if (deleteRowCount === 0) {
        return res.status(404).json("Cold appetizers not found");
      } else {
        return res.status(200).json("Cold appetizer deleted successfully");
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json("Failed to delete cold appetizer");
    }
  }

  static editColdAppetizer() {
    return [
      upload.single("photo"),
      async (req: any, res: Response) => {
        const { id, name, price, description, weight } = req.body;
        try {
          await ColdAppetizersModel.EditColdAppetizer(
            id,
            name,
            price,
            description,
            weight,
            req.file.buffer
          );
          return res.status(200).json("Cold appetizer edited successfully");
        } catch (error) {
          console.error(error);
          res.status(500).json("Failed to edit Cold appetizer");
        }
      },
    ];
  }
}
