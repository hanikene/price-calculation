import { useDispatch } from "react-redux";
import { addToCart } from "../redux";
import { Product } from "../types";
import Stars from "./Stars";

const ProductItem = ({ data }: { data: Product }) => {
  const dispatch = useDispatch();

  console.log(`HOME ${data.id}`);

  return (
    <div className="ProductItem">
      <div className="container">
        <img src={`/${data.id}.jpg`} alt={`${data.id} image`} />
        <div>
          <h3>{data.title}</h3>
          <p>{data.description}</p>
        </div>
        <div>
          <Stars rate={data.rate} />
          <p className="price">£{data.price.toFixed(2)}</p>
        </div>
      </div>
      <button
        onClick={() => {
          dispatch(addToCart(data.id));
        }}
        disabled={data.quantity !== 0}
        style={
          data.quantity !== 0 ? { opacity: "0", pointerEvents: "none" } : {}
        }
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductItem;
