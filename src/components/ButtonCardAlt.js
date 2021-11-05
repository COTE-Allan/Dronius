import "../styles/buttoncard.scss";

const ButtonCardAlt = (props) => {
  return (
    <button
      class="snipcart-add-item button-rectangle"
      data-item-id={props.product.id}
      data-item-price={props.product.price}
      data-item-description={props.product.description}
      data-item-image={
        "https://dronius-api.herokuapp.com" + props.product.images[0].url
      }
      data-item-name={props.product.name}
    >
      <i class="fas fa-cart-plus"></i>
    </button>
  );
};

export default ButtonCardAlt;
