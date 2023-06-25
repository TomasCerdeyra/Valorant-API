import { Request, Response } from "express";
import championsClass from "../services/champions.services";

const getItems = async () => {}

const postItems = async (req: Request, res: Response) => {    
    try {
        const postItems = await championsClass.postChampion(req.body);
        res.status(201).json({ 'NewChampion': postItems });
    } catch (error: any) {
        res.status(500).json({ error: error._message });   
        console.log(error);
    }
}

export { getItems, postItems };