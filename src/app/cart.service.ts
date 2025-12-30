// src/app/cart.service.ts
import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { BehaviorSubject } from 'rxjs'; // Optional: Use if you want to update header count automatically

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: Product[] = [];

  // 1. Add item
  addToCart(product: Product) {
    this.items.push(product);
  }

  // 2. Get items
  getItems() {
    return this.items;
  }

  // 3. Remove item (NEW)
  // We use the 'index' to know exactly which item to remove (in case you have 2 of the same item)
  removeItem(index: number) {
    if (index > -1 && index < this.items.length) {
      this.items.splice(index, 1);
    }
  }

  // 4. Get Total Price (NEW)
  getTotalPrice(): number {
    // reduce loops through all items and adds up the price
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  // 5. Clear Cart
  clearCart() {
    this.items = [];
    return this.items;
  }
}