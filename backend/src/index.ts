import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import MeatDishesRoutes from "./routes/MeatDishehRoutes";
import FishDishesRoutes from "./routes/FishDishesRoutes";
import BeveragesRoutes from "./routes/BeveragesRoutes";
const app = express();
const port = 3003;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Send MeatDisheh
app.use(MeatDishesRoutes);
app.use(FishDishesRoutes);
app.use(BeveragesRoutes);

app.listen(port, () => {
  console.log(port);
});
