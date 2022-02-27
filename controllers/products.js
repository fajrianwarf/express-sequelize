import Product from "../models/productModels.js";

const index = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);    
    } catch (error) {
        res.json({ message: error.message });
    }
};

const add = async (req, res) => {
    try {
        await Product.create(req.body);
        res.json({
            'message': 'Product created'
        });    
    } catch (error) {
        res.json({ message: error.message });
    }
};

export { index, add };