import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import multer from "multer";
import MeatDishesRoutes from "./routes/MeatDishehRoutes";
import FishDishesRoutes from "./routes/FishDishesRoutes";
import BeveragesRoutes from "./routes/DrinksRoutes";
import HotAppetizersRoutes from "./routes/HotAppetizersRoutes";
import ColdAppetizersRoutes from "./routes/ColdAppetizersRoutes";
import SoupsRoutes from "./routes/SoupsRoutes";
import GrillsRotes from "./routes/GrillsRoutes";
import SignatureDishesRoutes from "./routes/SignatureDishesRoutes";

const storage = multer.memoryStorage();
export const uploadExport = multer({ storage: storage });

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// All menu
app.use(MeatDishesRoutes);
app.use(FishDishesRoutes);
app.use(BeveragesRoutes);
app.use(HotAppetizersRoutes);
app.use(ColdAppetizersRoutes);
app.use(SoupsRoutes);
app.use(GrillsRotes);
app.use(SignatureDishesRoutes);

app.listen(port, () => {
  console.log(port);
});
