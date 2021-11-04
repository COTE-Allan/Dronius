import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import DetailsProducts from "../pages/DetailsProducts";
import Home from "../pages/Home";
import ProductAll from "../pages/ProductAll";
import "../styles/app.scss";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Switch>
          <Route path="/details/:id">
            <DetailsProducts />
          </Route>{" "}
          <Route path="/">
            <Home />
          </Route>{" "}
          <Route path="/ListProducts/:category">
            <ProductAll />
          </Route>{" "}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
