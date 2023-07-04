import { SoupsModel } from "../models/SoupsModel";
import { Request, Response } from "express";

import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

export default class SoupsController {
  static getAllSoups() {
    return async (req: Request, res: Response) => {
      try {
        const list = await SoupsModel.getSoups();
        return res.json(list);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to get soups" });
      }
    };
  }

  static addSoups() {
    return [
      upload.single("photo"),
      async (req: any, res: Response) => {
        const { name, price, description, weight } = req.body;
        try {
          await SoupsModel.AddSoups(
            name,
            price,
            description,
            weight,
            req.file.buffer
          );
          return res.status(201).json("Soup added successfully");
        } catch (error) {
          console.error(error);
          return res.status(500).json("Failed to add soup");
        }
      },
    ];
  }

  static async deleteSoup(req: any, res: Response) {
    const { id } = req.params;
    try {
      const deleteRowCount = await SoupsModel.DeleteSoup(id);
      if (deleteRowCount === 0) {
        return res.status(404).json("Soup not found");
      } else {
        return res.status(200).json("Soup deleted successfully");
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json("Failed to delete soup");
    }
  }

  static editSoup() {
    return [
      upload.single("photo"),
      async (req: any, res: Response) => {
        const { id, name, price, description, weight } = req.body;
        try {
          await SoupsModel.EditSoup(
            id,
            name,
            price,
            description,
            weight,
            req.file.buffer
          );
          return res.status(200).json("Soup edited successfully");
        } catch (error) {
          console.error(error);
          res.status(500).json("Failed to edit soup");
        }
      },
    ];
  }
}
