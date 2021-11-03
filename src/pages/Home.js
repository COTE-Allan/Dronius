
import { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import '../styles/app.scss'; 
// import Product_list from' ../components/Product_list'

const Home = () => {
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
            <p> {product} </p>   
            {/* <Product_list> {product} </Product_list>    */}

        </>
    );
}

export default Home;
