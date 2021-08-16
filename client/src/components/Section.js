import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/productsActions';
import ProductCard from './ProductCard';


const Section = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.products)
    
    
    console.log(products);

    const category = 'guitars';
    const sort = '';
    const search = '';

    useEffect(() => {
        dispatch(getProducts(category, sort, search));
    },[dispatch])
    

    return(
        <div className="section-container">
            <h1>Featured items</h1>
            <div className="section-grid">
                {products.map((product) => {
                    return (
                        <ProductCard
                            key={product.id}
                            product={product}
                        ></ProductCard>
                    );
                })}
            </div>
        </div>
        
    )
}

export default Section;