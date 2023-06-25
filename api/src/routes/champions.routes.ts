import { Router } from "express";
import { getItems, postItems, getItem } from "../controllers/champions.controller";
import checkDev from "../middlewares/checkDev.middlewares";

const router = Router();

router.get('/', getItems);
router.get('/champions/:id', getItem);

router.post('/', checkDev, postItems);

export default router;