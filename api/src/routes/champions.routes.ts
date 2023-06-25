import { Router } from "express";
import { getItems, getItem, postItems } from "../controllers/champions.controller";

const router = Router();

router.get('/', getItems);
router.get('/champions/:id', getItem);

router.post('/', postItems);

export default router;