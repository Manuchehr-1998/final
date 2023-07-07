import { pool } from "../db";
import { DrinksTypes } from "../types";

export class DrinksModel {
  static async getDrinks(): Promise<DrinksTypes[]> {
    const result = await pool.query(
      "SELECT * FROM menus WHERE type = 'drink' "
    );
    return result.rows;
  }
}
