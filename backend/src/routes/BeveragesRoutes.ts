import express from 'express'
import BeveragesController from '../controller/BeveragesController'

const router = express.Router()


router.get('/beverages',BeveragesController.getAllBeverages())

export = router