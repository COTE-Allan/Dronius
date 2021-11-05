import "../styles/detailsproducts.scss";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const DetailsProducts = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      await axios
        .get("https://dronius-api.herokuapp.com/products/" + id)
        .then(function (response) {
          //console.log(response.data);
          setItems(response.data);
          setLoading(false);
        });
      let desc =
        "Vous avez besoin d'en apprendre plus sur " +
        items.name +
        " ? Voici notre page dédié.";
      document.title = "Dronius - Details sur " + items.name;
      document
        .querySelector('meta[name="description"]')
        .setAttribute("content", desc);
    };
    getProduct();
    console.log(items);
  }, []);
  return loading ? (
    <p>chargement ...</p>
  ) : (
    <>
      <main className="bg-page pt-3 pb-5">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb container">
            <li className="breadcrumb-item">
              <Link to="/">Accueil</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={"/category/" + items.category}>{items.category}</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={"/details/" + items.id}>{items.name}</Link>
            </li>
          </ol>
        </nav>
        <div className="container bg-white px-4 pt-3 pb-4">
          <div id="product-page" class="row">
            <div id={items.id} class="col-12 mb-3">
              <h2 className="color-subtext">{items.name}</h2>
            </div>
            <div className="col-12 col-lg-4 mb-4 mb-lg-0">
              <div
                id="carouselProduct"
                className="carousel slide border"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100"
                      src={
                        "https://dronius-api.herokuapp.com" +
                        items.images[0].url
                      }
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src={
                        "https://dronius-api.herokuapp.com" +
                        items.images[1].url
                      }
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src={
                        "https://dronius-api.herokuapp.com" +
                        items.images[2].url
                      }
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselProduct"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Précédent</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselProduct"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Suivant</span>
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-5">
              <p>{items.description}</p>
            </div>
            <div className="col-12 col-lg-3">
              <div className="bg-inter px-3 py-3">
                <p
                  className="mb-2"
                  id="priceTTC"
                  class="text-center font-weight-bold p-0 m-0"
                >
                  {items.price}
                </p>
                <input
                  type="number"
                  className="d-block w-25 w-lg-50 text-center mx-auto"
                  value="1"
                />
                <button
                  data-item-id={items.id}
                  data-item-price={items.price}
                  data-item-description={items.description}
                  data-item-image={
                    "https://dronius-api.herokuapp.com" + items.images[0].url
                  }
                  data-item-name={items.name}
                  className="snipcart-add-item mx-auto mt-4"
                >
                  <i className="fas fa-cart-plus"></i>AJOUTER AU PANIER
                </button>
                <p className="color-subtext mt-2 text-center mb-0">
                  4 unités en stock
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default DetailsProducts;
