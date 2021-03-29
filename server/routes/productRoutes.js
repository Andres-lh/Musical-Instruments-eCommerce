import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data/data.js';
import Product from '../models/productModel.js';

const productRouter = express.Router();

function groupBy(objectArray, property) {
    return objectArray.reduce((acc, obj) => {
       const key = obj[property];
       if (!acc[key]) {
          acc[key] = [];
       }
       acc[key].push(obj);
       return acc;
    }, {});
 }

productRouter.get('/seed', expressAsyncHandler( async(req, res) =>{
    await Product.deleteMany({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({createdProducts})
}));

productRouter.get('/', expressAsyncHandler(async(req, res) =>{
    const products = await Product.find({});
    const instruments = groupBy(products, 'category');
    res.send(instruments)

}))

productRouter.get('/:id', expressAsyncHandler(async(req, res) =>{
    const product = await Product.findById(req.params.id);
    if(product){
        res.send(product);
    } else {
        res.status(404).send({message: 'Product Not Found'});
    }
}))

export default productRouter;