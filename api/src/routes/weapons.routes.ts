import { Router } from "express";
import checkDev from "../middlewares/checkDev.middlewares";
import { getItem, getItemByType, getItems, postItems } from "../controllers/weapons.controller";

const route = Router();

route.get('/',  getItems)
route.get('/:id',getItem )
route.get('/type/:type', getItemByType)

route.post('/', checkDev, postItems)

export default route