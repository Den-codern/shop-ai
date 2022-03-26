import { BasketProps } from "./Basket.props";

export function mathTotalPrice(arr: BasketProps[]): number {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i].count * arr[i].price;
  }
  return Math.ceil(total);
}
