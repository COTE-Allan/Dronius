import "../styles/header.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Logo from "./Logo";

const Header = () => {
  const [api, setApi] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      await axios
        .get("http://d7a7-31-32-43-35.ngrok.io/products")
        .then(function (response) {
          console.log(response.data);
          setApi(response.data);
        });
    };
    getProduct();
  }, []);
  return (
    <header className="app-header">
      <div className="app-header-row">
        <Logo />
        <div className="app-header-cart">
          <button class="snipcart-checkout">
            <span class="snipcart-items-count"></span>
            <i class="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
      <nav className="app-header-row">
        <Link to="/ListProducts/Drone">Drones</Link>
        <Link to="/ListProducts/Cameras">Caméras</Link>
        <Link to="/ListProducts/Accessoires">Accessoires</Link>
      </nav>
    </header>
  );
};

export default Header;
