import { pool } from "../db";
import { DishesTypes } from "../types";

export class SignatureDishesModel {
  // Send signature dishes
  static async getSignatureDishes(): Promise<DishesTypes[]> {
    const result = await pool.query("SELECT * FROM signature_dishes");
    return result.rows;
  }

  // Add new signature dish
  static async AddSignatureDish(
    name: string,
    price: number,
    description: string,
    weight: number,
    photo: Buffer
  ): Promise<void> {
    try {
      const query = {
        text: "INSERT INTO signature_dishes (name, price, description, weight, photo )VALUES ($1, $2, $3, $4, $5)",
        values: [name, price, description, weight, photo],
      };
      await pool.query(query);
    } catch (error) {
      console.error(error);
    }
  }

  //  Delete signature dish
  static async DeleteSignatureDish(id: number) {
    try {
      const result = await pool.query(
        "DELETE FROM signature_dishes WHERE id = $1",
        [id]
      );
      return result.rowCount;
    } catch (error) {
      console.error(error);
      return 0;
    }
  }

  // Edit signature dish
  static async EditSignatureDish(
    id: number,
    name: string,
    price: number,
    description: string,
    weight: number,
    photo: Buffer
  ): Promise<void> {
    try {
      const query = {
        text: "UPDATE signature_dishes SET name = $2, price = $3, description = $4, weight = $5, photo = $6 WHERE id = $1",
        values: [id, name, price, description, weight, photo],
      };
      await pool.query(query);
    } catch (error) {
      console.error(error);
    }
  }
}
