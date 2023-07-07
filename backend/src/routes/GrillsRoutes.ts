import express from "express";
import GrillsController from "../controller/GrillsController";

const router = express.Router();

router.get("/grills", GrillsController.getAllGrills());
router.post("/add-grill", GrillsController.addGril());
router.delete("/delete-grill", GrillsController.deleteGrill);
router.post("/edit-grill", GrillsController.editGrill());

export = router;
