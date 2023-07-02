import express from "express";
import DrinksController from "../controller/DrinksController";

const router = express.Router();

router.get("/drinks", DrinksController.getAllDrinks());
router.post("/add-drinks", DrinksController.addDrinkks());
router.delete("/delete-drink/:id", DrinksController.deleteDrinkById);
router.post("/edit-drink", DrinksController.editDrinks());

export = router;
