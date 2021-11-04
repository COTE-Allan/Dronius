import "../styles/detailsproducts.scss";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const DetailsProducts = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    useEffect(() => {
        const getProduct = async () => {
            await axios
                .get("http://40e1-31-32-43-35.ngrok.io/products/" + id)
                .then(function (response) {
                    //console.log(response.data);
                    setItems(response.data);
                    setLoading(false);
                });
        };
        getProduct();
        console.log(items);
    }, []);
    return loading ? (
        <p>chargement ...</p>
    ) : (
        <>
            <main class="bg-page pt-3 pb-5">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb container">
                        <li class="breadcrumb-item">
                            <Link to="/">Accueil</Link>
                        </li>
                        <li class="breadcrumb-item">
                            <Link to={"/category/" + items.category}>
                                {items.category}
                            </Link>
                        </li>
                        <li class="breadcrumb-item">
                            <Link to={"/details/" + items.id}>
                                {items.name}
                            </Link>
                        </li>
                    </ol>
                </nav>
                <div class="container bg-white px-4 pt-3 pb-4">
                    <div id="product-page" class="row">
                        <div id={items.id} class="col-12 mb-3">
                            <h2 class="color-subtext">{items.name}</h2>
                        </div>
                        <div class="col-12 col-lg-4 mb-4 mb-lg-0">
                            <div
                                id="carouselProduct"
                                class="carousel slide border"
                                data-ride="carousel"
                            >
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img
                                            class="d-block w-100"
                                            src={
                                                "http://40e1-31-32-43-35.ngrok.io" +
                                                items.images[0].url
                                            }
                                        />
                                    </div>
                                    <div class="carousel-item">
                                        <img
                                            class="d-block w-100"
                                            src={
                                                "http://40e1-31-32-43-35.ngrok.io" +
                                                items.images[1].url
                                            }
                                        />
                                    </div>
                                    <div class="carousel-item">
                                        <img
                                            class="d-block w-100"
                                            src={
                                                "http://40e1-31-32-43-35.ngrok.io" +
                                                items.images[2].url
                                            }
                                        />
                                    </div>
                                </div>
                                <a
                                    class="carousel-control-prev"
                                    href="#carouselProduct"
                                    role="button"
                                    data-slide="prev"
                                >
                                    <span
                                        class="carousel-control-prev-icon"
                                        aria-hidden="true"
                                    ></span>
                                    <span class="sr-only">Précédant</span>
                                </a>
                                <a
                                    class="carousel-control-next"
                                    href="#carouselProduct"
                                    role="button"
                                    data-slide="next"
                                >
                                    <span
                                        class="carousel-control-next-icon"
                                        aria-hidden="true"
                                    ></span>
                                    <span class="sr-only">Suivant</span>
                                </a>
                            </div>
                        </div>
                        <div class="col-12 col-lg-5">
                            <p>{items.description}</p>
                        </div>
                        <div class="col-12 col-lg-3">
                            <div class="bg-inter px-3 py-3">
                                <p
                                    className="mb-2"
                                    id="priceTTC"
                                    class="text-center font-weight-bold p-0 m-0"
                                >
                                    {items.price}
                                </p>
                                <input
                                    type="number"
                                    class="d-block w-25 w-lg-50 text-center mx-auto"
                                    value="1"
                                />
                                <button
                                    data-item-id={items.id}
                                    data-item-price={items.price}
                                    data-item-description={
                                        items.description
                                    }
                                    data-item-image={
                                        "http://40e1-31-32-43-35.ngrok.io" +
                                        items.images[0].url
                                    }
                                    data-item-name={items.name}
                                    class="snipcart-add-item btn-productAdd btn btn-primary d-block mx-auto mt-4"
                                >
                                    <i class="fas fa-cart-plus"></i>AJOUTER AU
                                    PANIER
                                </button>
                                <p class="color-subtext mt-2 text-center mb-0">
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
