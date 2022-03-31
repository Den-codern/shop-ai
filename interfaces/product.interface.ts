export interface ProductsModel {
  _id: string;
  surname: string;
  firstName: string;
  name: string;
  price: string;
  image: string;
  brand: string;
  description: string;
  createdAt: string;
}

export interface ProductsProps {
  products: ProductsModel[];
}
