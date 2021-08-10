import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: { type: String, trim: true, required : true, unique: true },
    image: { type: String, required: true },
    category: { type: String, required: true},
    description: { type: String, required: true},
    price: { type: Number, trim: true, required: true },
    numReviews: { type: Number, required: true },
    rating: { type: Number, required: true },
    inStock: { type: Number, required: true },
    //sold: {type: Number, required: true },
    //checked: { type: Boolean, default: 0 }

}, 
{
    timestamps: true
})

const Product = mongoose.model('Product', productSchema);
export default Product;