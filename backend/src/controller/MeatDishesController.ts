import { MeatDishesModel } from "../models/MeatDishesModel";
import { Request, Response } from "express";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

export default class MeatDishesController {
  static getAllMeatDishes() {
    return async (req: Request, res: Response) => {
      try {
        const list = await MeatDishesModel.getMeatDishes();
        return res.json(list);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to get meat dishes" });
      }
    };
  }

  static addMeatDishes() {
    return [
      upload.single("photo"),
      async (req: any, res: Response) => {
        const { name, price, description, weight } = req.body;
        try {
          await MeatDishesModel.AddMeatDishes(
            name,
            price,
            description,
            weight,
            req.file.buffer
          );
          return res.status(201).json("Meat dish added successfully");
        } catch (error) {
          console.error(error);
          return res.status(500).json("Failed to add meat dish");
        }
      },
    ];
  }

  static async deleteMeatDishes(req: any, res: Response) {
    const { id } = req.params;
    try {
      const deleteRowCount = await MeatDishesModel.DeleteMeatDishes(id);
      if (deleteRowCount === 0) {
        return res.status(404).json("Meat dish not found");
      } else {
        return res.status(200).json("Meat dish deleted successfully");
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json("Failed to delete meat dish");
    }
  }

  static editMeatDish() {
    return [
      upload.single("photo"),
      async (req: any, res: Response) => {
        const { id, name, price, description, weight } = req.body;
        try {
          await MeatDishesModel.EditMeatDish(
            id,
            name,
            price,
            description,
            weight,
            req.file.buffer
          );
          return res.status(200).json("Meat dish edited successfully");
        } catch (error) {
          console.error(error);
          res.status(500).json("Failed to edit meat dish");
        }
      },
    ];
  }
}
