import { FishDishesModel } from "../models/FishDishesModel";
import { Request, Response } from "express";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

export default class FishDishesController {
  static getAllFishDishes() {
    return async (req: Request, res: Response) => {
      try {
        const arrayFishDishes = await FishDishesModel.getFishDishes();
        return res.json(arrayFishDishes);
      } catch (error) {
        return res.json(error);
      }
    };
  }

  static addFishDishes() {
    return [
      upload.single("photo"),
      async (req: any, res: Response) => {
        const { name, price, description, weight } = req.body;
        try {
          await FishDishesModel.AddFishDishes(
            name,
            price,
            description,
            weight,
            req.file.buffer
          );
          return res.status(201).json("Fish dishes successfully");
        } catch (error) {
          console.error(error);
          return res.status(500).json("Failed to add fish dishes");
        }
      },
    ];
  }

  static async deleteFishDishById(req: any, res: Response) {
    const { id } = req.params;
    try {
      const deleteRowCount = await FishDishesModel.DeleteFishDishByid(id);
      if (deleteRowCount === 0) {
        return res.status(404).json("Fish dishes not found");
      } else {
        return res.status(200).json("Fish dishhes deleted successfully");
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json("Failed to delete fish dishes");
    }
  }

  static editFishDish() {
    return [
      upload.single("photo"),
      async (req: any, res: Response) => {
        const { id, name, price, description, weight } = req.body;
        try {
          await FishDishesModel.EditFishdish(
            id,
            name,
            price,
            description,
            weight,
            req.file.buffer
          );
          return res.status(200).json("Fish dish edited successfully");
        } catch (error) {
          console.error(error);
          res.status(500).json("Failed to edit fish dish");
        }
      },
    ];
  }
}
