import { pool } from "../db";
import { OrderHistoryTypes } from "../types";

export class OrdersModel {
  // Send Orders
  static async getHistoryOfOrders(): Promise<OrderHistoryTypes[]> {
    const result = await pool.query("SELECT FROM history_of_orders");
    return result.rows;
  }

  // Adding an order to the order history
  static async AddOrdertoHistory(
    street: string,
    comment: string,
    order: any,
    date: string,
    sum: number
  ) {
    try {
      const query = {
        text: "INSERS INTO history_of_orders (street, comment, order, date, sum) VALUES ($1, $2, $3, $4, $5)",
        values: [street, comment, order, date, sum],
      };
      await pool.query(query);
    } catch (error) {
      console.error(error);
    }
  }
}
