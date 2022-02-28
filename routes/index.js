import express from "express";
import { index, findOneId, addProduct, updateProduct, deleteProduct } from "../controllers/products.js";

const router = express.Router();

router.get('/', index );
router.get('/:id', findOneId );
router.post('/', addProduct );
router.patch('/:id', updateProduct );
router.delete('/:id', deleteProduct );

export default router;