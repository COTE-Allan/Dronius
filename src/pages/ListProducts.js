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
      let desc =
        "Voici notre page conernant les articles de type " + category + ".";
      document.title = "Dronius - " + category;
      document
        .querySelector('meta[name="description"]')
        .setAttribute("content", desc);
      await axios
        .get("https://dronius-api.herokuapp.com/products/")
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
      <h1 className="app-listproducts-title">Nos {category}</h1>
      {productsList.map((product) => (
        <ListCard
          img={"https://dronius-api.herokuapp.com" + product.images[0].url}
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
