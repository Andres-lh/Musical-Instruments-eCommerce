import React, { useEffect } from 'react'
import Hero from '../Components/Body/Hero';
import Slider from '../Components/Body/Slider';
import Section from '../Components/Body/Section';
import data from "../data/data";
import HomeOffers from '../Components/Body/HomeOffers';
import CategorySection from '../Components/Body/CategorySection';


function Home() {
    

    return (
        <>
            <Hero />
            <Section />
            <HomeOffers />
            <Slider slides={data.products} />
            <CategorySection />
        </>
    );
}

export default Home;