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
    const {products, loading, error} = useSelector((state) => state.productList)

    const category = 'featured'
    const sort = ''
    
    useEffect(() => {
        dispatch(getProducts(category, sort));
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
            <Slider slides={products} />
            <CategorySection />
            </>
        )}
    </>
    );
}

export default Home;