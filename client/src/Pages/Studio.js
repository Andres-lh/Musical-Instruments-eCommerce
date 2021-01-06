import React, { useEffect } from 'react';
import './Styles/ProductPages.css';
import ProductCard from '../Components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/actions';

function Studio() {
    
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList)
    const {products, loading, error} = productList;
    
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);
 
    return (
        <>
            {loading ? (
                <h1 className="product-pages">loading...</h1>
            ) : error ? (
                <h1 className="product-pages">error</h1>
            ) : (
                <div className="product-pages">
                    <h1 className="product-title">Studio</h1>
                    <div className="products-container">
                        {products.studio.map((product) => {
                            return (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
        </>
            
    );
}

export default Studio;
