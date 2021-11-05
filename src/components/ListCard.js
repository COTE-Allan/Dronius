import "../styles/listcard.scss";
import ButtonCard from "./ButtonCard";
import { Link } from "react-router-dom";

const ListCard = (props) => {
  return (
    <div className="app-listcard" id={props.productId}>
      <div>
        <Link to={"/details/" + props.productId} className="app-listcard-title">
          {props.name}
        </Link>
        <div className="app-listcard-div">
          <p className="app-listcard-desc">{props.desc}</p>
          <ButtonCard
            img={props.img}
            price={props.price}
            desc={props.desc}
            name={props.name}
            id={props.productId}
          />
        </div>
        <p className="app-listcard-price">{props.price}€</p>
      </div>
      <Link to={"/details/" + props.productId} className="app-listcard-title">
        <img className="app-listcard-img" src={props.img} />
      </Link>
    </div>
  );
};
export default ListCard;
