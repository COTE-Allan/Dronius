import '../styles/product.scss';

const Product = () => {
    return (
        <div className="app-Home">
            <article>
                <img src="../assets/Nature.png"></img>
                <h2> test</h2>
                <p>12.33euros</p>
                <button className="snipcart-add-item"
                    data-item-id="starry-night"
                    data-item-price="79.99"
                    data-item-name="The Starry Night"
                    data-item-image="./assets/Nature.jpg">
                    Add to cart 
                </button>
            </article>
        </div>
    )
}
export default Product;
