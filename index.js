import express from "express";
import db from "./config/database.js";
import productRoutes from './routes/index.js'
import cors from 'cors';

const port = 3000;
const app = express()

try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.log(`Connection error : ${err}`);
}

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/products', productRoutes);

app.listen(port, () => console.log(`Server running on ${port}`))