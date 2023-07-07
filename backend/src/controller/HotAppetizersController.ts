import { HotAppetizersModel } from "../models/HotAppetizersModel";
import { Request, Response } from "express";

import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

export default class HotAppetizersController {
  static getAllHotAppetizers() {
    return async (req: Request, res: Response) => {
      try {
        const list = await HotAppetizersModel.getHotAppetizers();
        return res.json(list);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to get hot appetizers" });
      }
    };
  }

  static addHotAppetizers() {
    return [
      upload.single("photo"),
      async (req: any, res: Response) => {
        const { name, price, description, weight } = req.body;
        try {
          await HotAppetizersModel.AddHotAppetizers(
            name,
            price,
            description,
            weight,
            req.file.buffer
          );
          return res.status(201).json("Hot appetizer added successfully");
        } catch (error) {
          console.error(error);
          return res.status(500).json("Failed to add hot appetizer");
        }
      },
    ];
  }

  static async deleteHotAppetizers(req: any, res: Response) {
    const { id } = req.params;
    try {
      const deleteRowCount = await HotAppetizersModel.DeleteHotAppetizers(id);
      if (deleteRowCount === 0) {
        return res.status(404).json("Hot appetizers not found");
      } else {
        return res.status(200).json("Hot appetizer deleted successfully");
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json("Failed to delete hot appetizer");
    }
  }

  static editHotAppetizers() {
    return [
      upload.single("photo"),
      async (req: any, res: Response) => {
        const { id, name, price, description, weight } = req.body;
        try {
          await HotAppetizersModel.EditHotAppetizers(
            id,
            name,
            price,
            description,
            weight,
            req.file.buffer
          );
          return res.status(200).json("Hot appetizer edited successfully");
        } catch (error) {
          console.error(error);
          res.status(500).json("Failed to edit hot appetizer");
        }
      },
    ];
  }
}
