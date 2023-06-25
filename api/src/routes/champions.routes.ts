import { Router } from "express";
import { getItems, postItems } from "../controllers/champions.controller";

const router = Router();

router.get('/', getItems);

router.post('/', postItems);

export default router;