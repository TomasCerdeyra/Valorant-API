import { Router } from "express";
import checkDev from "../middlewares/checkDev.middlewares";
import { getItem, getItems, postItems } from "../controllers/maps.controller";

const router = Router()

router.get('/', getItems)
router.get('/:id', getItem)

router.post('/', checkDev, postItems)

export default router