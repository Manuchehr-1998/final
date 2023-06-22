import express from "express";
import MeatDishesController from "../controller/MeatDishesController";

const router = express.Router();

router.get("/meat-dishes", MeatDishesController.getAllMeatDishes());

export = router;
