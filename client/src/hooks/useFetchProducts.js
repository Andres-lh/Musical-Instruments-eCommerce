import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/productsActions';

const useFetchProducts = (category, sort, search) => {
    const [reqCategory, setReqCategory] = useState(null);
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.products);

    useEffect(() => {

        if(category === 'all'){
            setReqCategory('')
        }else {
            setReqCategory(`category=${category}`);
        }

        dispatch(getProducts(reqCategory, sort, search));

    },[dispatch, reqCategory])

    return products;
}

export default useFetchProducts;