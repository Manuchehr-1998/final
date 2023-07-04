import { pool } from "../db";
import { DishesTypes } from "../types";

export class ColdAppetizersModel {
  static async getColdAppetizers(): Promise<DishesTypes[]> {
    const result = await pool.query("SELECT FROM cold_appetizers");
    return result.rows;
  }

   // Add new cold apptizers
   static async AddColdAppetizer(
    name: string,
    price: number,
    description: string,
    weight: number,
    photo: Buffer
  ): Promise<void> {
    try {
      const query = {
        text: "INSERT INTO cold_appetizers (name, price, description, weight, photo )VALUES ($1, $2, $3, $4, $5)",
        values: [name, price, description, weight, photo],
      };
      await pool.query(query);
    } catch (error) {
      console.error(error);
    }
  }

  //  Delete cold apptizers
  static async DeleteColdAppetizer(id: number) {
    try {
      const result = await pool.query("DELETE FROM cold_appetizers WHERE id = $1", [
        id,
      ]);
      return result.rowCount;
    } catch (error) {
      console.error(error);
      return 0;
    }
  }

  // Edit cold apptizers
  static async EditColdAppetizer(
    id: number,
    name: string,
    price: number,
    description: string,
    weight: number,
    photo: Buffer
  ): Promise<void> {
    try {
      const query = {
        text: "UPDATE cold_appetizers SET name = $2, price = $3, description = $4, weight = $5, photo = $6 WHERE id = $1",
        values: [id, name, price, description, weight, photo],
      };
      await pool.query(query);
    } catch (error) {
      console.error(error);
    }
  }
}
