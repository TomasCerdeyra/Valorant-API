import { Router } from "express";
import { getItems, postItems } from "../controllers/champions.controller";
import checkDev from "../middlewares/checkDev.middlewares";

const router = Router();

router.get('/', getItems);

router.post('/', checkDev, postItems);

export default router;