import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { ProductDetailComponent } from './product-detail/product-detail.component';
// 1. Import your new component
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'; 
import { Cart } from './cart/cart';

export const routes: Routes = [
  // Your existing routes
  { path: '', component: ProductList },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'cart', component: Cart },
  
  // 2. Add the Wildcard Route AT THE VERY END
  { path: '**', component: PageNotFoundComponent }
];