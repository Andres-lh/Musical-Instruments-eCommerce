import Product from '../models/productModel.js'

export const getProducts = async (req, res, next) => {
    try {
        const products = await Product.find({});
        res.json(products);
        
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
}