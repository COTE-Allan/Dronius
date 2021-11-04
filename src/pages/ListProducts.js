
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/listproducts.scss';
import ProductList from ' ../components/ProductList'

const ListProducts = () => {
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
            <ProductList product={product} />
        </>
    );
}

export default ListProducts;

