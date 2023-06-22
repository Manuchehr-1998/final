const db = require("../db");

import { pool } from "../db";
import { DishesTypes } from "../types";
export class FishDishesModel {
  static async getFishDishes(): Promise<DishesTypes[]> {
    const result = await pool.query("SELECT * FROM fish_dishes");
    return result.rows;
  }
}
