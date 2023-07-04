import express from "express"
import SignatureDishesController from "../controller/SignatureDishesController"

const router = express.Router()

router.get("/signature-dishes",SignatureDishesController.getAllSignatureDishes())
router.post("/add-signature-dish",SignatureDishesController.addSignatureDish())
router.delete("/delete-signature-dish",SignatureDishesController.deleteSignatureDish)
router.post("/edit-signature-dish",SignatureDishesController.editSignatureDish())

export = router