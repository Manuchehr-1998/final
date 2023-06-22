const db = require("../db");

// import { name, price, description, weight } from "../date/date";
import { pool } from "../db";
import { DishesTypes } from "../types";
export class MeatDishesModel {
  static async getMeatDishes(): Promise<DishesTypes[]> {
    const result = await pool.query("SELECT * FROM meat_dishes");
    return result.rows;
  }
}
