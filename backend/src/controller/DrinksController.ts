import { DrinksModel } from "../models/DrinksModel";
import { Request, Response } from "express";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

export default class DrinksController {
  static getAllDrinks() {
    return async (req: Request, res: Response) => {
      try {
        const arrBeverages = await DrinksModel.getDrinks();
        return res.json(arrBeverages);
      } catch (error) {
        return res.json(error);
      }
    };
  }

  static addDrinkks() {
    return [
      upload.single("photo"),
      async (req: any, res: Response) => {
        const { name, price, description, quantity } = req.body;
        try {
          await DrinksModel.AddDrinks(
            name,
            price,
            description,
            quantity,
            req.file.buffer
          );
          res.status(201).json("Drinks added successfully");
        } catch (error) {
          console.error(error);
          return res.status(500).json({ error: "Faled to add driks" });
        }
      },
    ];
  }

  static async deleteDrinkById(req: any, res: Response) {
    const { id } = req.params;
    try {
      const deleteRowCount = await DrinksModel.DeleteDrinkById(id);
      if (deleteRowCount === 0) {
        return res.status(404).json("Drinks not found");
      } else {
        return res.status(200).json("Driks deleted successfully");
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json("Failed to delete drink");
    }
  }

  static editDrinks() {
    return [
      upload.single("photo"),
      async (req: any, res: Response) => {
        const { id, name, price, description, quantity } = req.body;
        try {
          await DrinksModel.EditDrink(
            id,
            name,
            price,
            description,
            quantity,
            req.file.buffer
          );
          return res.status(200).json("Drink edited successfully ");
        } catch (error) {
          console.error(error);
          return res.status(500).json("Failed to edit dink");
        }
      },
    ];
  }
}
