import { useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity } from "../redux";
import { Product } from "../types";

const CartProduct = ({
  data,
  isDiscount,
}: {
  data: Product;
  isDiscount?: boolean;
}) => {
  const dispatch = useDispatch();

  if (data.quantity < 1) return null;
  return (
    <div className="CartProduct">
      <img src={`/${data.id}.jpg`} alt={`${data.id} image`} />
      <div className="container">
        <h3>{data.title}</h3>
        <div className="quantityContainer">
          <span>quantity</span>
          <button
            className="counterButton"
            onClick={() => {
              dispatch(decrementQuantity(data.id));
            }}
          >
            -
          </button>
          <span>{data.quantity}</span>
          <button
            className="counterButton"
            onClick={() => {
              dispatch(incrementQuantity(data.id));
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="prices">
        <p className={`price ${isDiscount ? "crossed" : ""}`}>
          £{(data.price * data.quantity).toFixed(2)}
        </p>
        {isDiscount && data.discount?.discountAmount && (
          <p className="price">
            £
            {(
              data.price *
              (data.quantity - data.discount?.discountAmount)
            ).toFixed(2)}
          </p>
        )}
      </div>
    </div>
  );
};

export default CartProduct;
