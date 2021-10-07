import { useState } from 'react'
import { Link } from "react-router-dom";
import Rating from '@components/Rating';
import ProductView from './ProductView';


const ProductCard = ({ product }) => {
    const [productView, setProductView] = useState(false)

    return(
        <div className="productCard">
            <div className="productCard-image">
                <Link to={`/products/${product._id}`}>
                    <img src={product.image} alt="" />
                </Link>
            </div>

            <div className="productCard-body">
                <div>
                    <Link to={`/products/${product._id}`} className="product-name">
                        <p>{product.name}</p>
                    </Link>
                    <Rating rating = {product.rating} numReviews = {product.numReviews} />
                </div>
                <  div className="product-price">
                    <span>{`$ ${product.price}`}</span>
                </div>
            </div>
            <button className="productCard-button" onClick={()=> setProductView(true)} >
                Quick view
            </button>
            {productView && <ProductView product={product} setProductView={setProductView} /> }
        </div>
    )
    
}

export default ProductCard;