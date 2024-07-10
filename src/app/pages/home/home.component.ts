import { Component, inject } from '@angular/core';
import { StoreService } from '../../store.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { Path } from '../../app.routes';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatSidenavModule,
    MatCardModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private readonly router = inject(Router);

  title = 'SneakersShop';

  storeService = inject(StoreService)

  ngOnInit(): void {
      this.storeService.getProducts().subscribe()

      this.storeService.getBrands().subscribe()
  }

  clickOnCategory(brand?: string) {
    this.storeService.getProducts(brand).subscribe()
  }

  goToProduct(id: number) {
    this.router.navigateByUrl(`${Path.Product}/${id}`)
  }
}
