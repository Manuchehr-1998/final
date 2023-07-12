import { OrdersModel } from "../models/OrdersModel";
import { Response, Request } from "express";

export default class OrdersController {
  static async getAllOrders() {
    return async (req: Request, res: Response) => {
      try {
        const list = await OrdersModel.getHistoryOfOrders();
        return res.json(list);
      } catch (error) {
        console.error(error);
        return res.status(500).json("Failed to get orders");
      }
    };
  }

  
}
