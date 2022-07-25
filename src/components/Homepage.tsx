import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import { Product } from "../types";
import { useMemo } from "react";

const Homepage = () => {
  const products = useSelector(
    (state: { product: Product[] }) => state.product
  );

  const productsRender = products.map((product) =>
    useMemo(
      () => <ProductItem key={product.id} data={product} />,
      [product.quantity]
    )
  );
  return (
    <div className="Homepage">
      <h2>Products</h2>
      {productsRender}
    </div>
  );
};

export default Homepage;
