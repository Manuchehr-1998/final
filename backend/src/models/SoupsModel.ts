import { pool } from "../db";
import { DishesTypes } from "../types";

export class SoupsModel {
  // Send soups
  static async getSoups(): Promise<DishesTypes[]> {
    const result = await pool.query("SELECT * FROM soups");
    return result.rows;
  }

  // Add new soups
  static async AddSoups(
    name: string,
    price: number,
    description: string,
    weight: number,
    photo: Buffer
  ): Promise<void> {
    try {
      const query = {
        text: "INSERT INTO soups (name, price, description, weight, photo )VALUES ($1, $2, $3, $4, $5)",
        values: [name, price, description, weight, photo],
      };
      await pool.query(query);
    } catch (error) {
      console.error(error);
    }
  }

  //  Delete soups
  static async DeleteSoup(id: number) {
    try {
      const result = await pool.query("DELETE FROM soups WHERE id = $1", [id]);
      return result.rowCount;
    } catch (error) {
      console.error(error);
      return 0;
    }
  }

  // Edit soups
  static async EditSoup(
    id: number,
    name: string,
    price: number,
    description: string,
    weight: number,
    photo: Buffer
  ): Promise<void> {
    try {
      const query = {
        text: "UPDATE soups SET name = $2, price = $3, description = $4, weight = $5, photo = $6 WHERE id = $1",
        values: [id, name, price, description, weight, photo],
      };
      await pool.query(query);
    } catch (error) {
      console.error(error);
    }
  }
}
