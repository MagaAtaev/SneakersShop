import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then((c) => c.HomeComponent),
    },
    {
        path: 'product/:id',
        loadComponent: () => import('./pages/product/product.component').then((c) => c.ProductComponent),
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

export const Path = {
    Home: '/home',
    Product: '/product'
}
