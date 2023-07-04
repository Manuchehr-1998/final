import { pool } from "../db";
import { DishesTypes } from "../types";

export class GrillsModel {
  // Send grills
  static async getGrills(): Promise<DishesTypes[]> {
    const result = await pool.query("SELECT * FROM grills");
    return result.rows;
  }

  // Add new grills
  static async AddGrill(
    name: string,
    price: number,
    description: string,
    weight: number,
    photo: Buffer
  ): Promise<void> {
    try {
      const query = {
        text: "INSERT INTO grills (name, price, description, weight, photo )VALUES ($1, $2, $3, $4, $5)",
        values: [name, price, description, weight, photo],
      };
      await pool.query(query);
    } catch (error) {
      console.error(error);
    }
  }

  //  Delete grill
  static async DeleteGrill(id: number) {
    try {
      const result = await pool.query("DELETE FROM grills WHERE id = $1", [id]);
      return result.rowCount;
    } catch (error) {
      console.error(error);
      return 0;
    }
  }

  // Edit grill
  static async EditGrill(
    id: number,
    name: string,
    price: number,
    description: string,
    weight: number,
    photo: Buffer
  ): Promise<void> {
    try {
      const query = {
        text: "UPDATE grils SET name = $2, price = $3, description = $4, weight = $5, photo = $6 WHERE id = $1",
        values: [id, name, price, description, weight, photo],
      };
      await pool.query(query);
    } catch (error) {
      console.error(error);
    }
  }
}
