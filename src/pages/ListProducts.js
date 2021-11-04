import "../styles/listproducts.scss";
import ListCard from "../components/ListCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

const ListProducts = () => {
  let productsList = [];
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      await axios
        .get("http://40e1-31-32-43-35.ngrok.io/products")
        .then(function (response) {
          //   console.log(response.data);
          setProducts(response.data);
        });
    };
    getProduct();
  }, []);
  {
    products.map(
      (product) => product.category == category && productsList.push(product),
      console.log(productsList)
    );
  }
  return (
    <div className="app-listproducts">
      <p>Liste des produits</p>
      {productsList.map((product) => (
        <ListCard
          img={"http://40e1-31-32-43-35.ngrok.io" + product.images[0].url}
          price={product.price}
          desc={product.description}
          name={product.name}
          productId={product.id.toString()}
        />
      ))}
    </div>
  );
};
export default ListProducts;
