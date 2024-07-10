import { Injectable, inject, signal } from '@angular/core';
import { RestService } from './rest.service';
import { Observable, tap } from 'rxjs';
import { Brand, GetBrandsDto, GetProductsDto, Product } from '@types';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  readonly #restService = inject(RestService)

  products = signal<Product[]>([])
  brands = signal<Brand[]>([])

  constructor() { }

  getProducts(brand?: string): Observable<GetProductsDto> {
    return this.#restService.getProducts(brand).pipe(
      tap({
        next: (res) => {
          this.products.set(res);        
        } 
      })
    )
  }

  getBrands(): Observable<GetBrandsDto> {
    return this.#restService.getBrands().pipe(
      tap({
        next: (res) => {
          this.brands.set(res)
        }
      })
    )
  }

}
