const db = require("../db");
import { pool } from "../db";

import { Beverages } from "../types";
export class BeveragesModel {
  static async getBeverages(): Promise<Beverages[]> {
    const result = await pool.query("SELECT * FROM beverages");
    return result.rows;
  }
}
