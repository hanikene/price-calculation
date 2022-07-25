type Id = "bread" | "butter" | "milk"

export interface Product {
  id: Id,
  title: string,
  description: string,
  price: number,
  rate: number,
  quantity: number,
  discount?: {
    requiredProduct: {
      id: Id,
      quantity: number
    },
    discountAmount: number
  }
}

export interface Action {
  type: string;
  payload: Id
}