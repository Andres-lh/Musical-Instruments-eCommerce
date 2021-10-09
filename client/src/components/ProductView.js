import Rating from '@components/Rating';
import { Link, withRouter } from 'react-router-dom';

const ProductView = ({product, setProductView, history}) => {

    const addToCart = () => {
        history.push(`/cart/${product._id}?qty=1`);
    }

    return(
        <div className="productView">
            <div className="productView_container">
                <button className="productView_container-close"onClick={() => setProductView(false)}>
                    <i class="far fa-times-circle" />
                </button>
                <div className="productView_container-image">
                    <Link to={`/products/${product._id}`}>
                        <img src={product.image} />
                    </Link >
                    
                </div>
                <div className = "productView_container-content">
                    <Link to={`/products/${product._id}`}>
                        <h2>{product.name} <span>${product.price}</span></h2>
                    </Link >
                    <Rating rating = {product.rating} numReviews = {product.numReviews} />
                </div>
                
                <div className="productView_container-buttons">
                {product.inStock > 0 ? (
                                <div>
                                    <h4 className="productView_container-buttons-available">In stock</h4>
                                    <button onClick={addToCart}>Add to cart <i class="fas fa-shopping-cart" /></button>
                                </div>
                            ) : (
                                <h4 className="productView_container-buttons-unavailable">Unavailable</h4>
                            )}
                    
                    
                </div>
                
            </div>
        </div>
        
    )
}

export default withRouter(ProductView);