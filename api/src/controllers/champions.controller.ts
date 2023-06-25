import { Request, Response, } from "express";
import championsClass from "../services/champions.services";

const getItems = async (req: Request, res: Response) => {
    try {
        const items = await championsClass.getChampions();

        if (items === 'NO_CHAMPIONS') return res.status(404).json({ 'message': 'Champions not found' })

        return res.json({ 'champions': items })
    } catch (error: any) {
        res.status(500).json({ 'error': error._message })
    }
}

const getItem = async (req: Request, res: Response) => {
    console.log(req.params.id);
    
    try {
        const item = await championsClass.getUniqueChampion(req.params.id);
        
        if (item === 'NO_CHAMP') return res.status(404).json({ 'message': 'Champion not found' })

        return res.json({ 'champion': item })
    } catch (error: any) {
        console.log(error);
        res.status(500).json({ 'error': error._message })
    }
}

const postItems = async () => { }

export { getItems,getItem, postItems };