import { Product } from "./types";

export function checkIsDiscount(product: Product, products: Product[]) {
  const requiredProduct = products.find(
    (prod) => prod.id === product.discount?.requiredProduct.id
  );
  const requiredQuantity = product.discount?.requiredProduct.quantity;
  if (!requiredProduct || !requiredQuantity) return false;
  return requiredProduct.quantity >= requiredQuantity;
}
