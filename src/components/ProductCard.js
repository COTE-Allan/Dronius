import React from "react";
import { Link } from "react-router-dom";
import ButtonCardAlt from "./ButtonCardAlt";
import "../styles/productcard.scss";

const ProductCard = (props) => {
  return (
    <div className="ProductCard col-12 col-md-6 col-lg-4 pb-3">
      <div class="card rounded" id="card-1">
        <Link to={"/details/" + props.product.id}>
          <div class="card-body" id="">
            <a href="product.html">
              <h5 class="card-title text-center">{props.product.name}</h5>
            </a>
            <img
              src={
                "https://dronius-api.herokuapp.com" +
                props.product.images[0].url
              }
              class="card-img-top"
              alt=""
            />
            <div class="row pb-2">
              <div class="col-12">
                <p class="card-text text-center color-text price">
                  {props.product.price + " €"}
                </p>
              </div>
            </div>
          </div>
        </Link>
        <ButtonCardAlt product={props.product} />
      </div>
    </div>
  );
};

export default ProductCard;