import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from '../actions/productsActions';

const Section = () => {
    const dispatch = useDispatch();

    const category = 'guitars';
    const sort = '';
    const search = '';

    useEffect(() => {
        dispatch(getProducts(category, sort, search));
    },[])

    return(
        <div className="section">
            <h1>Section</h1>
        </div>
        
    )
}

export default Section;