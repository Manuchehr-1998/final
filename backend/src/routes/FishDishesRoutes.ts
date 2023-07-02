import express from "express";
import FishDishesController from "../controller/FishDishesController";

const router = express.Router();

router.get("/fish-dishes", FishDishesController.getAllFishDishes());
router.post("/add-fish-dishes", FishDishesController.addFishDishes());
router.delete(
  "/delete-fish-dishes/:id",
  FishDishesController.deleteFishDishById
);
router.post("/edit-fish-dish", FishDishesController.editFishDish());

export = router;
