import express from "express";
import FishDishesController from "../controller/FishDishesController";

const router = express.Router();

router.get("/fish-dishes", FishDishesController.getAllFishDishes());

export = router