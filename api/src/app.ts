import express, { Request, Response } from "express";
import "dotenv/config"
import connectMongo from "./config/connectMongo.config";
import routerChampions from "./routes/champions.routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectMongo()

app.use('/', routerChampions)

app.get('*', (req: Request, res: Response) => {
    res.status(404).json({ message: 'Ruta no válida' });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log('Server up'));