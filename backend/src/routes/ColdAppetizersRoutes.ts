import express from "express";
import ColdAppetizersController from "../controller/ColdAppetizersController";

const router = express.Router();

router.get("/cold-appetizers", ColdAppetizersController.getAllColdAppetizers());
router.post(
  "/add-cold-appetizers",
  ColdAppetizersController.addColdAppetizer()
);
router.delete(
  "/delete-cold-appetizers",
  ColdAppetizersController.deleteColdAppetizer
);
router.post(
  "/edit-cold-appetizers",
  ColdAppetizersController.editColdAppetizer
);

export = router;
