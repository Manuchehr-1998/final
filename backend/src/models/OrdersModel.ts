import { pool } from "../db";

export class OrdersModel {
  // Send Orders
  static async getHistoryOfOrders(): Promise<any> {
    const result = await pool.query("SELECT FROM orders");
    return result.rows;
  }

  // Adding an order to the order history
  static async AddOrdertoHistory(
    name: string,
    phone: number,
    street: string,
    homeNumber: number,
    comment: string,
    sum: number
  ) {
    try {
      const query = {
        text: "INSERS INTO orders (name, phone, street, homeNumber, comment, sum) VALUES ($1, $2, $3, $4, $5, $6)",
        values: [name, phone, street, homeNumber, comment, sum],
      };
      const result = await pool.query(query);
      return result.rows;
    } catch (error) {
      console.error(error);
    }
  }
}
