import { pool } from "../db";
import { DishesTypes } from "../types";

export class GrillsModel {
  static async getGrills(): Promise<DishesTypes[]> {
    const result = await pool.query("SELECT * FROM ");
    return result.rows;
  }
}
