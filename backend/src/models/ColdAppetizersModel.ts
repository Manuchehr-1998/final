import { pool } from "../db";
import { DishesTypes } from "../types";

export class ColdAppetizersModel {
  static async getColdAppetizers(): Promise<DishesTypes[]> {
    const result = await pool.query(
      "SELECT * FROM menus WHERE type = 'cold_appetizers'"
    );
    return result.rows;
  }
}
