import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../../rest.service';
import { Product } from '@types';
import { tap } from 'rxjs';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements  OnInit{
  productId = signal<number | null>(null)

  productData = signal<Product | null>(null)

  private router = inject(Router)

  private route = inject(ActivatedRoute)

  private rest = inject(RestService)

  ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get("id"))

      this.productId.set(id)

      this.rest.getSingleProduct(id)
        .pipe(
          tap({
            next: (data) => {
              if (data) {
                this.productData.set(data)
              }
            }
          }
        ))
        .subscribe()
  }
}
