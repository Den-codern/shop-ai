import { ProductsModel } from "../../interfaces/product.interface"


export interface PaginationProps {
    products:ProductsModel[]
}

export interface PaginatedItems {
    itemsPerPage:number
}
export interface ItemsProps {
    currentItems:ProductsModel[]
}