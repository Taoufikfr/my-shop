import { Routes } from '@angular/router';
import { AppComponent } from './app.component'; // Attention, voir note ci-dessous*
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component'; // ** Créons ce composant virtuel pour l'instant

export const routes: Routes = [
  // On va déplacer la liste actuelle dans une route 'home'
  // Pour l'instant, disons que AppComponent contient juste <router-outlet>
  { path: '', loadComponent: () => import('./app.component').then(m => m.ProductListComponent) }, // Astuce rapide ou restructurez
  { path: 'product/:id', component: ProductDetailComponent }
];