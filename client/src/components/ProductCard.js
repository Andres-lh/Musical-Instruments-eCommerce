import { Link } from "react-router-dom";
import Rating from '@components/Rating';
const ProductCard = ({ product }) => {
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
            <Link to={`/`}>
                <button className="productCard-button">
                    Quick view
                </button>
            </Link>
        </div>
    )
    
}

export default ProductCard;