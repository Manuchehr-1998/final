import express from "express";
import HotAppetizersController from "../controller/HotAppetizersController";

const router = express.Router();

router.get("/hot-appetizers", HotAppetizersController.getAllHotAppetizers());
router.post("/add-hot-appetizer", HotAppetizersController.addHotAppetizers());
router.delete(
  "/delete-hot-appetizer",
  HotAppetizersController.deleteHotAppetizers
);
router.post("/edit-hot-appetizer", HotAppetizersController.editHotAppetizers());

export = router;
