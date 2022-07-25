import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Product, Action } from "./types";

const initialState: Product[] = [
  {
    id: "bread",
    title: "Whole french bread",
    description: "Made in Paris and destinated to the whole world.",
    price: 1,
    rate: 4.5,
    quantity: 0,
    discount: {
      requiredProduct: {
        id: "butter",
        quantity: 2,
      },
      discountAmount: 0.5,
    },
  },
  {
    id: "milk",
    title: "Fresh suiss milk",
    description:
      "Semi skimmed milk that comes straight from the Alpes farmers.",
    price: 1.15,
    rate: 4.5,
    quantity: 0,
    discount: {
      requiredProduct: {
        id: "milk",
        quantity: 4,
      },
      discountAmount: 1,
    },
  },
  {
    id: "butter",
    title: "Butter",
    description: "Produced by us to ensure a high quality butter.",
    price: 0.8,
    rate: 4.5,
    quantity: 0,
  },
];

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action: Action) => {
      const product = state.find((prod) => prod.id === action.payload);
      if (product?.quantity === 0) ++product.quantity;
    },
    incrementQuantity: (state, action: Action) => {
      const product = state.find((prod) => prod.id === action.payload);
      if (product) ++product.quantity;
    },
    decrementQuantity: (state, action: Action) => {
      const product = state.find((prod) => prod.id === action.payload);
      if (product && product.quantity > 0) --product.quantity;
    },
  },
});

export const store = configureStore({
  reducer: {
    product: productSlice.reducer,
  },
});

export const { addToCart, incrementQuantity, decrementQuantity } =
  productSlice.actions;
