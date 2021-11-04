import "../styles/listcard.scss";
import ButtonCard from "./ButtonCard";

const ListCard = (props) => {
  return (
    <div className="app-listcard" id={props.productId}>
      <div>
        <h1 className="app-listcard-title">{props.name}</h1>
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
      <img className="app-listcard-img" src={props.img} />
    </div>
  );
};
export default ListCard;
