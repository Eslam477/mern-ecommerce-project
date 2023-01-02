import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getProductData, increment } from '../Store/redux/slices/productSlice';

const Product = () => {
    const value = useSelector((state) => state.productSlice.value);
    const dispatch = useDispatch()
    const product_id = useParams().id
    useEffect(() => {
        dispatch(getProductData({ id: product_id }))
    }, [dispatch]);

    return (
        <div>
            {value}
        </div>
    );
}

export default Product;
