import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { BehaviorSubject } from 'rxjs'; // Useful for updating the cart count automatically

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // 1. The list of items
  private items: Product[] = [];

  // 2. A "Subject" to notify other components (like the Header) when the cart changes
  private cartCount = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCount.asObservable(); // Components subscribe to this

  // Add a product to the list
  addToCart(product: Product) {
    this.items.push(product);
    this.cartCount.next(this.items.length); // Update the counter
    console.log('Cart updated:', this.items);
  }

  // Get all items (for the Cart Page)
  getItems() {
    return this.items;
  }

  // Remove an item (Optional: by index)
  removeItem(index: number) {
    this.items.splice(index, 1);
    this.cartCount.next(this.items.length);
  }

  // Calculate total price
  getTotalPrice(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  clearCart() {
    this.items = [];
    this.cartCount.next(0);
    return this.items;
  }
}