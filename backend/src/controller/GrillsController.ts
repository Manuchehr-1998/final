import { GrillsModel } from "../models/GrillsModel";
import { Request, Response } from "express";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

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

  static addGril() {
    return [
      upload.single("photo"),
      async (req: any, res: Response) => {
        const { name, price, description, weight } = req.body;
        try {
          await GrillsModel.AddGrill(
            name,
            price,
            description,
            weight,
            req.file.buffer
          );
          return res.status(201).json("Grill added successfully");
        } catch (error) {
          console.error(error);
          return res.status(500).json("Failed to add grill");
        }
      },
    ];
  }

  static async deleteGrill(req: any, res: Response) {
    const { id } = req.params;
    try {
      const deleteRowCount = await GrillsModel.DeleteGrill(id);
      if (deleteRowCount === 0) {
        return res.status(404).json("Grill not found");
      } else {
        return res.status(200).json("Grill deleted successfully");
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json("Failed to delete grill");
    }
  }

  static editGrill() {
    return [
      upload.single("photo"),
      async (req: any, res: Response) => {
        const { id, name, price, description, weight } = req.body;
        try {
          await GrillsModel.EditGrill(
            id,
            name,
            price,
            description,
            weight,
            req.file.buffer
          );
          return res.status(200).json("Grill edited successfully");
        } catch (error) {
          console.error(error);
          res.status(500).json("Failed to edit grill");
        }
      },
    ];
  }
}
