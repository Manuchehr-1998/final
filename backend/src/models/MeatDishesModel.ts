// import { pool } from "../db";
// import { DishesTypes } from "../types";

// export class MeatDishesModel {
//   // Send meat dishes
//   static async getMeatDishes(): Promise<DishesTypes[]> {
//     const result = await pool.query("SELECT * FROM meat_dishes");
//     return result.rows;
//   }

//   // Add new meat dish
//   static async AddMeatDish(
//     name: string,
//     price: number,
//     description: string,
//     weight: number,
//     photo: Buffer
//   ): Promise<void> {
//     try {
//       const query = {
//         text: "INSERT INTO meat_dishes (name, price, description, weight, photo )VALUES ($1, $2, $3, $4, $5)",
//         values: [name, price, description, weight, photo],
//       };
//       await pool.query(query);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   //  Delete meat dish
//   static async DeleteMeatDish(id: number) {
//     try {
//       const result = await pool.query("DELETE FROM meat_dishes WHERE id = $1", [
//         id,
//       ]);
//       return result.rowCount;
//     } catch (error) {
//       console.error(error);
//       return 0;
//     }
//   }

//   // Edit meat dish
//   static async EditMeatDish(
//     id: number,
//     name: string,
//     price: number,
//     description: string,
//     weight: number,
//     photo: Buffer
//   ): Promise<void> {
//     try {
//       const query = {
//         text: "UPDATE meat_dishes SET name = $2, price = $3, description = $4, weight = $5, photo = $6 WHERE id = $1",
//         values: [id, name, price, description, weight, photo],
//       };
//       await pool.query(query);
//     } catch (error) {
//       console.error(error);
//     }
//   }
// }
