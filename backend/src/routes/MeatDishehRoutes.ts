import express from "express";
import MeatDishesController from "../controller/MeatDishesController";

const router = express.Router();

router.get("/meat-dishes", MeatDishesController.getAllMeatDishes());
router.post("/add-meat-dishes", MeatDishesController.addMeatDish());
router.delete("/delete-meat-dishes/:id", MeatDishesController.deleteMeatDish);
router.post("/edit-meat-dish", MeatDishesController.editMeatDish());

export = router;
