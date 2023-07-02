import express from "express";
import MeatDishesController from "../controller/MeatDishesController";

const router = express.Router();

router.get("/meat-dishes", MeatDishesController.getAllMeatDishes());
router.post("/add-meat-dishes", MeatDishesController.addMeatDishes());
router.delete("/delete-meat-dishes/:id", MeatDishesController.deleteMeatDishes);
router.post("/meat-dish-edit", MeatDishesController.editMeatDish());

export = router;
