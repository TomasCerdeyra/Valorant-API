import express, { Request, Response } from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('*', (req: Request, res: Response) => {
    res.status(404).json({ message: 'Ruta no válida' });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log('Server up'));
