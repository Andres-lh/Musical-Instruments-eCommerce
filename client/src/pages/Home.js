
import Hero from '@components/Hero';
import Section from '@components/Section';
import HomeOffers from '@components/HomeOffers';
import Slider from '@components/Slider';
import CategorySection from '@components/CategorySection';


const Home = () => {

    return(
        <div>
            <Hero />
            <Section />
            <HomeOffers />
            <Slider />
            <CategorySection />
        </div>
        
    )
}

export default Home;