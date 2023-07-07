import { SignatureDishesModel } from "../models/SignatureDishesModel";
import { Request, Response } from "express";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

export default class SignatureDishesController {
  static getAllSignatureDishes() {
    return async (req: Request, res: Response) => {
      try {
        const list = await SignatureDishesModel.getSignatureDishes()
        return res.json(list);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to get signature dishes" });
      }
    };
  }

  static addSignatureDish() {
    return [
      upload.single("photo"),
      async (req: any, res: Response) => {
        const { name, price, description, weight } = req.body;
        try {
          await SignatureDishesModel.AddSignatureDish(
            name,
            price,
            description,
            weight,
            req.file.buffer
          );
          return res.status(201).json("Signature dish added successfully");
        } catch (error) {
          console.error(error);
          return res.status(500).json("Failed to add signature dish");
        }
      },
    ];
  }

  static async deleteSignatureDish(req: any, res: Response) {
    const { id } = req.params;
    try {
      const deleteRowCount = await SignatureDishesModel.DeleteSignatureDish(id);
      if (deleteRowCount === 0) {
        return res.status(404).json("Signature dish not found");
      } else {
        return res.status(200).json("Signature dish deleted successfully");
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json("Failed to delete signature dish");
    }
  }

  static editSignatureDish() {
    return [
      upload.single("photo"),
      async (req: any, res: Response) => {
        const { id, name, price, description, weight } = req.body;
        try {
          await SignatureDishesModel.EditSignatureDish(
            id,
            name,
            price,
            description,
            weight,
            req.file.buffer
          );
          return res.status(200).json("Signature dish edited successfully");
        } catch (error) {
          console.error(error);
          res.status(500).json("Failed to edit signature dish");
        }
      },
    ];
  }
}
