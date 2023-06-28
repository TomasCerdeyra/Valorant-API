import { Request, Response } from "express";
import weapoClass from "../services/weapons.services";

const getItems = async (req: Request, res: Response) => {
    try {
        const items = await weapoClass.getWeapons();

        if (items === 'NO_WEAPONS') return res.status(400).json({ message: 'Weapons not found' })

        return res.json({ 'Weapons': items })
    } catch (error: any) {
        res.status(500).json({ error: error._mesagge })
    }
}

const getItem = async (req: Request, res: Response) => {
    try {
        const item = await weapoClass.getUniqueWeapon(req.params.id)

        if (item === 'NO_WEAPON') return res.status(400).json({ message: 'Weapon not found' })

        return res.json({ 'Weapon': item })

    } catch (error: any) {
        res.status(500).json({ error: error._mesagge })
    }
}

const getItemByType = async (req: Request, res: Response) => {
    try {
        const item = await weapoClass.getWeaponsByType(req.params.type)
        
        if (item === 'NO_WEAPON') return res.status(400).json({ message: 'Weapon not found' })

        return res.json({ 'Weapons': item })

    } catch (error: any) {
        console.log(error);
        
        res.status(500).json({ error: error._mesagge })
    }
}

const postItems = async (req: Request, res: Response) => {
    try {
        const postItem = await weapoClass.postWepons(req.body)

        if (postItem === 'WEAPONS_EXIST') return res.status(400).json({ message: 'Weapon exists' })

        res.status(201).json({ 'NewWeapon': postItem });

    } catch (error: any) {
        res.status(500).json({ error: error._mesagge })
    }
}

export {
    getItems,
    getItem,
    getItemByType,
    postItems
}