import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Product } from "../types";
import { checkIsDiscount } from "../utils";
import CartProduct from "./CartProduct";
import PriceSummary from "./PriceSummary";

const Cart = () => {
  const products = useSelector(
    (state: { product: Product[] }) => state.product
  );
  const [isCartActive, setIsCartActive] = useState(false);

  const cartProducts = useMemo(
    () =>
      products.map((product) => (
        <CartProduct
          key={product.id}
          data={product}
          isDiscount={checkIsDiscount(product, products)}
        />
      )),
    [products]
  );
  const priceSummary = useMemo(() => <PriceSummary />, [products]);

  return (
    <div className="Cart">
      <button
        className="toggleButton"
        onClick={() => {
          setIsCartActive((prev) => !prev);
        }}
      >
        Toggle Cart
      </button>
      <div className={`sidebar ${isCartActive ? "active" : ""}`}>
        <h2>Cart</h2>
        {cartProducts}
        {priceSummary}
      </div>
    </div>
  );
};

export default Cart;
