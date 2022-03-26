export interface ProductsModel {
    _id: string;
    name: string;
    price: string;
    image: string;
    brand: string;
    description: string;
}

export interface ProductsProps {
    products:ProductsModel[]
  }