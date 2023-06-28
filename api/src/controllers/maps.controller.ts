import { Request, Response } from "express";
import mapsClass from "../services/maps.services";

const getItems = async (req: Request, res: Response) => {
    try {
        const items = await mapsClass.getMaps();

        return res.json({ 'maps': items })
    } catch (error: any) {
        res.status(500).json({ 'error': error._message })
    }
}

const getItem = async (req: Request, res: Response) => {
    try {
        const item = await mapsClass.getUniqueMap(req.params.id)

        if (item === 'NO_MAP') return res.status(404).json({ 'message': ' Map not found' })

        return res.json({'map': item})
    } catch (error: any) {
        res.status(500).json({ 'error': error._message })
    }
}

const postItems = async (req: Request, res: Response) => {    
    try {
        const postItems = await mapsClass.postMap(req.body);

        return res.status(201).json({ 'NewMap': postItems });
    } catch (error: any) {
        res.status(500).json({ error: error._message });   
        console.log(error);
    }
}


export {
    getItems,
    getItem,
    postItems
}