import { useState, useEffect} from 'react';
import { getProducts } from '../actions/productsActions';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Slider = () => {

    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.products);
    const [current, setCurrent] = useState(0);
    const length = products.length;

    const category = 'featured';
    const sort = '';
    const search = '';

    useEffect(() => {
        dispatch(getProducts(category, sort, search));
    },[dispatch])

    if(!Array.isArray(products) || products.length <= 0){
        return null;
    }

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () =>{
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    


    return (
        <div className="slider">
            <div className="slider_title">
                <h1>Best Sellers</h1>
            </div>
            <div className="slider_container">
                <div className="slider_container-leftside">
                    <div className="slider_container-leftside-name" >
                        {products.map((slide, index) => {
                            return (
                                <div key={index}>
                                    {index ===  current && (
                                    <div>
                                        <h1 className="slide-name">{slide.name}</h1>
                                    </div>
                                    )}  
                                </div>
                            );
                        })}
                    </div>
                        
                </div>
                <div className="slider_container-rightside">
                    
                    <i onClick={prevSlide} className="far fa-arrow-alt-circle-left arrows"></i>
                    <div className="slider_container-rightside-images">
                        {products.map((slide, index) => {
                            return ( 
                                <div key={index}>
                                    <Link to={`/products/${slide._id}`}>
                                        {index ===  current && (<img src={slide.image} alt=""  className="slide-image" /> )}
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                    <i onClick={nextSlide} className="far fa-arrow-alt-circle-right arrows"></i>
                </div>

            </div>
        </div>
    )
}

export default Slider;