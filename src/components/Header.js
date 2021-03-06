import "../styles/header.scss";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
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
