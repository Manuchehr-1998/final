import { query } from "express";
import { pool } from "../db";
import { DrinksTypes } from "../types";

export class DrinksModel {
  static async getDrinks(): Promise<DrinksTypes[]> {
    const result = await pool.query("SELECT * FROM drinks");
    return result.rows;
  }

  static async AddDrink(
    name: string,
    price: number,
    description: string,
    quantity: number,
    photo: Buffer
  ): Promise<void> {
    try {
      const query = {
        text: "INSERT INTO drinks (name, price, description, quantity, photo) VALUES ($1, $2, $3, $4, $5)",
        values: [name, price, description, quantity, photo],
      };
      await pool.query(query);
    } catch (error) {
      console.error(error);
    }
  }

  static async DeleteDrinkById(id: number) {
    try {
      const result = await pool.query("DELETE FROM drinks WHERE id = $1", [id]);
      return result.rowCount;
    } catch (error) {
      console.error(error);
      return 0;
    }
  }

  static async EditDrink(
    id: number,
    name: string,
    price: number,
    description: string,
    quantity: number,
    photo: Buffer
  ): Promise<void> {
    try {
      const query = {
        text: "UPDATE drinks SET name = $2, price = $3, description = $4, quantity = $5, photo = $6  WHERE id = $1",
        values: [id, name, price, description, quantity, photo],
      };
      await pool.query(query);
    } catch (error) {
      console.error(error);
    }
  }
}
