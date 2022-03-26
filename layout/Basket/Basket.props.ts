export interface BasketProps {
  _id: string;
  image: string;
  count: number;
  price: number;
  name: string;
}

export interface BasketRender {
  cartItems: BasketProps[];
  removeAllHandler: () => void;
  handleSave: () => void;
}
