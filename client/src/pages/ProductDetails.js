import { useEffect } from 'react';
import Rating from '@components/Rating';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../actions/productsActions';

const ProductDetails = (props) => {

    const dispatch = useDispatch();
    const id = props.match.params.id

    const { product } = useSelector(state => state.product);

    const addToCart = () => {
        console.log('add to cart')
    }

    const setQuantity = () => {
        console.log('set')
    }

    useEffect( () => {
        dispatch(getProductDetails(id))
    },[])

    return(
        <>
        {
            !product ? (
                <h1>Product not found</h1>
            ) : (
                <div className="productDetails">
                    <div className="productDetails_container">
                        <img src={product.image} alt={product.name} />
                        <div className="productDetails_container-details">
                            <h1>{product.name}</h1>
                            <p>{product.description}</p>
                            <h2>
                                Price: <span>${product.price}</span>
                            </h2>
                            <Rating
                                rating={product.rating}
                                numReviews={product.numReviews}
                            />
                            {product.inStock > 0 ? (
                                <h4 className="product-available">In stock</h4>
                            ) : (
                                <h4 className="product-unavailable">Unavailable</h4>
                            )}
                            {product.inStock > 0 && (
                                <div className="productDetails_container-btns">
                                    <input
                                        type="number"
                                        placeholder="1"
                                        min="1"
                                        max={product.inStock}
                                        onChange = {e => setQuantity(e.target.value)}
                                    />

                                    <button className="btn-cart" onClick={addToCart}>
                                        Add to cart
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                )
            }
        </>
    )

}

export default ProductDetails;