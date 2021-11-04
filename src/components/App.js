import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import DetailsProducts from "../pages/DetailsProducts";
import Home from "../pages/Home";
import ListProducts from "../pages/ListProducts";
import "../styles/app.scss";
import Legals from "../pages/Legals";
import Conditions from "../pages/Conditions";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Switch>
          <Route path="/details/:id">
            <DetailsProducts />
          </Route>
          <Route path="/category/:category">
            <ListProducts />
          </Route>
          <Route path="/CGU">
            <Conditions />
          </Route>
          <Route path="/legals">
            <Legals />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
