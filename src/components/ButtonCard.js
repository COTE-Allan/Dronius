import "../styles/buttoncard.scss";
const ButtonCard = (props) => {
  return (
    <button
      class="snipcart-add-item"
      data-item-id={props.id}
      data-item-price={props.price}
      data-item-description={props.desc}
      data-item-image={props.img}
      data-item-name={props.name}
    >
      <i class="fas fa-cart-plus"></i>
    </button>
  );
};
export default ButtonCard;
