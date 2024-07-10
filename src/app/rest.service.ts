import { Injectable } from '@angular/core';
import { Brand, GetBrandsDto, GetProductsDto, GetSingleProductDto, Product } from '@types';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  readonly #products: Product[] = [
    {
      id: 1,
      name: 'Air Jordan',
      brand: 'Nike',
      sizes: [39, 40, 41, 42, 43],
      images: ['url1', 'url2'],
      price: 13000
    },
    {
      id: 2,
      name: 'Air Jordan Classic',
      brand: 'Nike',
      sizes: [39, 40, 41, 42, 43],
      images: ['url1', 'url2'],
      price: 14300
    },
    {
      id: 3,
      name: 'Ozelia',
      brand: 'Adidas',
      sizes: [39, 40, 41, 42, 43],
      images: ['url1', 'url2'],
      price: 12900
    },
    {
      id: 4,
      name: 'Campus',
      brand: 'Adidas',
      sizes: [39, 40, 41, 42, 43],
      images: ['url1', 'url2'],
      price: 11850
    },
    {
      id: 5,
      name: 'Forum Bold',
      brand: 'Adidas',
      sizes: [39, 40, 41, 42, 43],
      images: ['url1', 'url2'],
      price: 15000
    }
  ]

  readonly #brands: Brand[] = [
    {
      name: 'Nike'
    },
    {
      name: 'Adidas'
    },
    {
      name: 'Reebok'
    }
  ]

  constructor() { }

  getProducts(brand?: string): Observable<GetProductsDto> {
    const brandProducts = this.#products.filter(el => brand ? el.brand === brand : true);

    return of<GetProductsDto>(brandProducts)
  }

  getSingleProduct(id: number): Observable<GetSingleProductDto | undefined> {
    const product = this.#products.find(el => el.id === id)
    
    return of<GetSingleProductDto | undefined>(product)
  }

  getBrands(): Observable<GetBrandsDto> {
    return of<GetBrandsDto>(this.#brands)
  }
}
