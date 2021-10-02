import Hero from '@components/Hero';
import Section from '@components/Section';
import HomeOffers from '@components/HomeOffers';
import Slider from '@components/Slider';
import CategorySection from '@components/CategorySection';
import Navbar from "@components/Navbar";


const Home = () => {

    return(
        <div>
            <Navbar />
            <Hero />
            <Section />
            <HomeOffers />
            <Slider />
            <CategorySection />
        </div>
        
    )
}

export default Home;