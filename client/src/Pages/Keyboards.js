import React, { useEffect, useState } from 'react';
import './Styles/ProductPages.css';
import ProductCard from '../Components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/actions';

function Keyboards() {
    
    const dispatch = useDispatch();
    const {products, loading, error} = useSelector((state) => state.productList);
    const [filter, setFilter] = useState({
        category: 'keyboards',
        sort: ''
    })
   
    useEffect(() => {
        dispatch(getProducts(filter.category, filter.sort));
    }, [dispatch]);
 
    return (
        <>
            {loading ? (
                <h1 className="product-pages">loading...</h1>
            ) : error ? (
                <h1 className="product-pages">error</h1>
            ) : (
                <div className="product-pages">
                    <h1 className="product-title">Keyboards</h1>
                    <div className="products-container">
                        {products.map((product) => {
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

export default Keyboards;
