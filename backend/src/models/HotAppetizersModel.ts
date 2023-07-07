import { pool } from "../db";
import { DishesTypes } from "../types";

export class HotAppetizersModel {
  static async getHotAppetizers(): Promise<DishesTypes[]> {
    const result = await pool.query(
      "SELECT * FROM menus WHERE type = 'hot_appetizers'"
    );
    return result.rows;
  }
}
