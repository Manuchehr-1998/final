import { pool } from "../db";
import { DishesTypes } from "../types";

export class MenusModel {
  // Send all dishes
  static async getMenus(): Promise<DishesTypes[]> {
    const result = await pool.query("SELECT * FROM menus");

    if (result.rows.length === 0) {
      throw new Error("Menus not found");
    }
    return result.rows;
  }

  // Send cold appetizers
  static async getColdAppetizers(): Promise<DishesTypes[]> {
    const result = await pool.query(
      "SELECT * FROM menus WHERE type = 'cold_appetizer'"
    );

    if (result.rows.length === 0) {
      throw new Error("Cold appetizers not found");
    }

    return result.rows;
  }

  // Send hot apptizers
  static async getHotAppetizers(): Promise<DishesTypes[]> {
    const result = await pool.query(
      "SELECT * FROM menus WHERE type = 'hot_appetizer'"
    );

    if (result.rows.length === 0) {
      throw new Error("Hot appetizers not found");
    }

    return result.rows;
  }

  // Send drinks
  static async getDrinks(): Promise<DishesTypes[]> {
    const result = await pool.query(
      "SELECT * FROM menus WHERE type = 'drink' "
    );

    if (result.rows.length === 0) {
      throw new Error("Driks not found");
    }

    return result.rows;
  }

  // Send grills
  static async getGrills(): Promise<DishesTypes[]> {
    const result = await pool.query("SELECT * FROM menus WHERE type = 'grill'");

    if (result.rows.length === 0) {
      throw new Error("Grills not found");
    }

    return result.rows;
  }

  // Send meat dishes
  static async getMeatDishes(): Promise<DishesTypes[]> {
    const result = await pool.query(
      "SELECT * FROM menus WHERE type = 'meat_dish'"
    );

    if (result.rows.length === 0) {
      throw new Error("Meat dishes not found");
    }

    return result.rows;
  }

  // Send fish dishes
  static async getFishDishes(): Promise<DishesTypes[]> {
    const result = await pool.query(
      "SELECT * FROM menus WHERE type = 'fish_dish' "
    );

    if (result.rows.length === 0) {
      throw new Error("Fish dishes not found");
    }

    return result.rows;
  }

  // Send signature dishes
  static async getSignatureDishes(): Promise<DishesTypes[]> {
    const result = await pool.query(
      "SELECT * FROM menus WHERE type = 'signature_dish'"
    );

    if (result.rows.length === 0) {
      throw new Error("Signature dishes not found");
    }

    return result.rows;
  }

  // Send soups
  static async getSoups(): Promise<DishesTypes[]> {
    const result = await pool.query("SELECT * FROM menus WHERE type = 'soup'");

    if (result.rows.length === 0) {
      throw new Error("Soups not found");
    }

    return result.rows;
  }

  // Add new dish from menu
  static async AddDish(
    name: string,
    price: number,
    description: string,
    weight: number,
    photo: Buffer,
    type: string
  ): Promise<void> {
    try {
      const query = {
        text: "INSERT INTO menus (name, price, description, weight, photo, type) VALUES ($1, $2, $3, $4, $5, $6)",
        values: [name, price, description, weight, photo, type],
      };
      await pool.query(query);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  // Delete dish by id
  static async DeleteDishById(id: number) {
    try {
      const result = await pool.query("DELETE FROM menus WHERE id = $1", [id]);
      return result.rowCount;
    } catch (error) {
      console.error(error);
      return 0;
    }
  }

  // Edit Dish
  static async EditDish(
    id: number,
    name: string,
    price: number,
    description: string,
    weight: number,
    photo: Buffer,
    type: string
  ): Promise<void> {
    try {
      const query = {
        text: "UPDATE menus SET name = $2, price = $3, description = $4, weight = $5, photo = $6, type = $7 WHERE id = $1",
        values: [id, name, price, description, weight, photo, type],
      };
      await pool.query(query);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
