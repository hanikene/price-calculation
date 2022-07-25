import { useSelector } from "react-redux";
import { Product } from "../types";
import { checkIsDiscount } from "../utils";

const PriceSummary = () => {
  const products = useSelector(
    (state: { product: Product[] }) => state.product
  );

  const subtotal = products.reduce(
    (prev, curr) => prev + curr.price * curr.quantity,
    0
  );
  const discount = products.reduce(
    (prev, curr) =>
      checkIsDiscount(curr, products) && curr.discount?.discountAmount
        ? prev + curr.discount.discountAmount * curr.price
        : prev,
    0
  );

  console.log("PRICE");

  return (
    <div className="PriceSummary">
      <p className="text">Subtotal</p>
      <p>£{subtotal.toFixed(2)}</p>
      <p className="text">Discount</p>
      <p>£{discount.toFixed(2)}</p>
      <p className="text">Total</p>
      <p>£{(subtotal - discount).toFixed(2)}</p>
    </div>
  );
};

export default PriceSummary;
