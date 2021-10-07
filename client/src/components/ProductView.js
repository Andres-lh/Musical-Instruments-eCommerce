import Rating from '@components/Rating';

const ProductView = ({product, setProductView}) => {
    return(
        <div className="productView">
            <div className="productView_container">
                <button className="productView_container-close"onClick={() => setProductView(false)}>x</button>
                <div className="productView_container-image">
                    <img src={product.image} />
                </div>
                <h2>{product.name} <span>${product.price}</span></h2>
                <Rating rating = {product.rating} numReviews = {product.numReviews} />
                <div className="productView_container-buttons">
                {product.inStock > 0 ? (
                                <div>
                                    <h4 className="product-available">In stock</h4>
                                    <button>Add to cart</button>
                                </div>
                                
                            ) : (
                                <h4 className="product-unavailable">Unavailable</h4>
                            )}
                    
                    
                </div>
                
            </div>
        </div>
        
    )
}

export default ProductView;