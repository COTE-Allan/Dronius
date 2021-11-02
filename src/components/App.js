import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Details from '../pages/Details';
import Home from '../pages/Home';
import './styles/App.scss';

function App() {

  return ( <
    Router >
    <
    div className = "app-wrapper" >
    <
    Header / >
    <
    Switch >
    <
    Route path = "/details/:id" >
    <
    Details / >
    <
    /Route> <
    Route path = "/" >
    <
    Home / >
    <
    /Route> <
    Route path = "/ListProducts/:category" >
    <
    ListProducts / >
    <
    /Route> <
    /Switch> <
    Footer / >
    <
    /div> <
    /Router>
  );
}

export default App;