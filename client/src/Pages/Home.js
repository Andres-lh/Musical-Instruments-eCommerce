import React, { useEffect } from 'react'
import Hero from '../Components/Hero';
import Slider from '../Components/Slider';
import Section from '../Components/Section';
import HomeOffers from '../Components/HomeOffers';
import CategorySection from '../Components/CategorySection';
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/actions";



function Home() {
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
            <>
            <Hero />
            <Section products={products}/>
            <HomeOffers />
            <Slider slides={products.featured} />
            <CategorySection />
            </>
        )}
    </>
    );
}

export default Home;