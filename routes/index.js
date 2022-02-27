import express from "express";
import { add, index } from "../controllers/products.js";

const router = express.Router();

router.get('/', index );
router.post('/', add );

export default router;