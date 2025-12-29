import { Injectable, signal } from '@angular/core';
import { Product } from './product.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  // Une liste qui notifie automatiquement les changements
  cartItems = signal<Product[]>([]);

  addToCart(product: Product) {
    // On met à jour la liste en ajoutant le nouveau produit
    this.cartItems.update(items => [...items, product]);
    console.log("Produit ajouté !", this.cartItems().length);
  }

  // Pour obtenir le nombre total d'articles
  getCount() {
    return this.cartItems().length;
  }
}