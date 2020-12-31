import React, { useEffect } from 'react'
import Hero from '../Components/Hero';
import Slider from '../Components/Slider';
import Section from '../Components/Section';
import data from "../data/data";
import HomeOffers from '../Components/HomeOffers';
import CategorySection from '../Components/CategorySection';


function Home() {
    

    return (
        <>
            <Hero />
            <Section />
            <HomeOffers />
            <Slider slides={data.featured} />
            <CategorySection />
        </>
    );
}

export default Home;