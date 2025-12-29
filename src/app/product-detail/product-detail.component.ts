import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';

// --- CHECK THIS SECTION ---
// Keep ONLY the line that points to your actual model file.
// Delete any other lines importing 'Product'.
import { Product } from '../product.model'; 
// --------------------------

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule], // Do NOT put 'Product' inside this array
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent { 

  private cartService = inject(CartService);

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Produit ajouté au panier !');
  }
}