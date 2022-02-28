import Product from "../models/productModels.js";

const index = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);    
    } catch (error) {
        res.json({ message: error.message });
    }
};

const findOneId = async (req, res) => {
    try {
        const findOneId = await Product.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(findOneId);
    } catch (error) {
        res.json({ message: error.message });
    }
};


//diedit
const addProduct = async (req, res) => {
    try {
        await Product.create(req.body);
        res.json({
            'message': `Product created`
        });    
    } catch (error) {
        res.json({ message: error.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        await Product.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            'message': `Product ${req.params.id} updated`
        });    
    } catch (error) {
        res.json({ message: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        await Product.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            'message': `Product ${req.params.id} deleted`
        });    
    } catch (error) {
        res.json({ message: error.message });
    }
};

export { index, addProduct, findOneId, updateProduct, deleteProduct };