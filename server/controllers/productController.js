import Product from '../models/productModel.js';
import ProductUtils from '../utils/productsUtils.js';


export const getProducts = async (req, res, next) => {
    try {
        const queryObject = new ProductUtils(Product.find(), req.query)
            .filtering()
            .sorting()
            //.paginating 

        const products = await queryObject.query;

        res.json({
            status: 'success',
            result: products.length,
            products: products
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server Error" });
    }
}

export const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        res.status(200).json({
            status: 'succes',
            result: product.length,
            product
        })
    } catch (error) {
        
    }
}