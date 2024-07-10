export type Product = {
    id: number;
    name: string;
    brand: string;
    sizes: number[];
    images: string[];
    price: number;
}

export type Brand = {
    name: string
}

export type GetBrandsDto = Brand[]

export type GetProductsDto = Product[]

export type GetSingleProductDto = Product
    
