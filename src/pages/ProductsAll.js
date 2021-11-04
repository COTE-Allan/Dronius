
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/productAll.scss';
import ListProducts from ' ../components/ProductList'

const ProductAll = () => {
    const [product, setProduct] = useState([]);
    useEffect(
        () => {
            axios.get('http://d103-31-32-43-35.ngrok.io/products')
                .then(resp => {
                    console.log(resp);
                    setProduct(resp.data.images);
                })
        }, [])
    return (
        <>
            <ListProducts product={product} />
        </>
    );
}

export default ProductAll;

