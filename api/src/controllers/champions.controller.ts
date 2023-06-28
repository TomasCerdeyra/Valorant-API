import { Request, Response } from "express";
import championsClass from "../services/champions.services";

const getItems = async (req: Request, res: Response) => {
    try {
        const items = await championsClass.getChampions();

        return res.json({ 'champions': items })
    } catch (error: any) {
        res.status(500).json({ 'error': error._message })
    }
}

const getItemsByType = async (req: Request, res: Response) => {
    try {
        const items = await championsClass.getChampionsByType(req.params.agentType);

        if (items === 'NOT_FOUND') return res.status(404).json({ message: 'Agent type not found' })

        res.json({ champions: items })
    } catch (error: any) {
        res.status(500).json({ 'error': error._message });
    }
}

const getItem = async (req: Request, res: Response) => {
    try {
        const item = await championsClass.getUniqueChampion(req.params.id);

        if (item === 'NO_CHAMP') return res.status(404).json({ 'message': 'Champion not found' })

        return res.json({ 'champion': item })
    } catch (error: any) {
        console.log(error);
        res.status(500).json({ 'error': error._message })
    }
}

const postItems = async (req: Request, res: Response) => {
    try {
        const postItems = await championsClass.postChampion(req.body);

        if (postItems === 'CHAMPION_ALREADY_EXISTS') return res.status(400).json({ message: 'Champion already exists' });

        res.status(201).json({ 'NewChampion': postItems });
    } catch (error: any) {
        res.status(500).json({ 'error': error._message });
    }
}

export { getItems, getItem, getItemsByType, postItems };