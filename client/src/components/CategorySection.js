import { Link } from 'react-router-dom';
import CategoryCard from '@components/CategoryCard'

const CategorySection = () => {
    return (
        <div className = "categories" id='products'>
            <h1>Shop by category</h1>
            <div className = "categories_grid">
                <Link to= "/guitars">
                    <CategoryCard 
                    name="Guitars" 
                    image="https://images.pexels.com/photos/15919/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    />
                </Link>
                <Link to="/basses">
                    <CategoryCard 
                    name="Basses" 
                    image="https://images.pexels.com/photos/96380/pexels-photo-96380.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    />
                </Link>
                <Link to="/drums">
                    <CategoryCard 
                    name="Drums" 
                    image="https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    />
                </Link>
                <Link to="/keyboards">
                    <CategoryCard 
                    name="Keyboards and Midi" 
                    image="https://images.pexels.com/photos/2876659/pexels-photo-2876659.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    />
                </Link>
                <Link to="orchestra">
                    <CategoryCard 
                    name="Band and Orchestra" 
                    image="https://images.pexels.com/photos/2102568/pexels-photo-2102568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    />
                </Link>
                <Link to="/studio">
                    <CategoryCard 
                    name="Studio and production" 
                    image="https://images.pexels.com/photos/2111015/pexels-photo-2111015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                />
                </Link>
                
                
            </div>
             
        </div>
    )
}

export default CategorySection;