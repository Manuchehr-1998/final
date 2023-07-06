import { pool } from "../db";
import { OrderHistoryTypes } from "../types";

export class OrdersModel {
  // Send Orders
  static async getOrders(): Promise<OrderHistoryTypes[]> {
    const result = await pool.query("SELECT FROM orders");
    return result.rows;
  }

  // Receiving a new order
  static async AddOrder(
    street: string,
    comment: string,
    order: any,
    date: string,
    sum: number
  ) {
    try {
      text: "INSERS INTO orders (street, comment, order, date, sum) VALUES ($1, $2, $3, $4, $5";
      values: [street, comment, order, date, sum];
    } catch (error) {
      console.error(error);
    }
  }
}
