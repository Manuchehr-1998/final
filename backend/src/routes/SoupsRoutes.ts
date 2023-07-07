import express from "express";
import SoupsController from "../controller/SoupsController";

const router = express.Router();

router.get("/soups", SoupsController.getAllSoups());
router.post("/add-soup", SoupsController.addSoups());
router.delete("/delete-soup", SoupsController.deleteSoup);
router.post("/edit-soup", SoupsController.editSoup());

export = router;
