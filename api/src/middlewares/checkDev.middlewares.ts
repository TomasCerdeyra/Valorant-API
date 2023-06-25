import { NextFunction, Request, Response } from "express";
import "dotenv/config";

const checkDev = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers['dev_key']

    if (header === process.env.DEV_KEY) return next()
    else return res.status(501).json({ message: 'Access denied' });
}

export default checkDev;