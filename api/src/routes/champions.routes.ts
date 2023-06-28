import { Router } from "express";
import { getItems, postItems, getItem, getItemsByType } from "../controllers/champions.controller";
import checkDev from "../middlewares/checkDev.middlewares";

const router = Router();

router.get('/', getItems);
router.get('/champions/:id', getItem);
router.get('/champions/agentType/:agentType', getItemsByType);

router.post('/', checkDev, postItems);

export default router;