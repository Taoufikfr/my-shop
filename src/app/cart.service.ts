import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product.model';
import { CartItem } from './cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: CartItem[] = [];
  
  // This allows the Header to listen to changes automatically
  private cartCount = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCount.asObservable();

  // 1. ADD ITEM (With Quantity Logic)
  addToCart(product: Product) {
    // Check if item already exists
    const existingItem = this.cartItems.find(item => item.product.id === product.id);

    if (existingItem) {
      // If yes, just increase quantity
      existingItem.quantity++;
    } else {
      // If no, add new item with quantity 1
      this.cartItems.push({ product: product, quantity: 1 });
    }
    
    this.updateCartCount();
  }

  // 2. GET ITEMS
  getItems() {
    return this.cartItems;
  }

  // 3. REMOVE ITEM
  removeItem(productId: number) {
    this.cartItems = this.cartItems.filter(item => item.product.id !== productId);
    this.updateCartCount();
  }

  // 4. UPDATE QUANTITY (+ / -)
  updateQuantity(productId: number, quantity: number) {
    const item = this.cartItems.find(i => i.product.id === productId);
    if (item) {
      item.quantity = quantity;
      if (item.quantity <= 0) {
        this.removeItem(productId); // Remove if 0
      }
    }
    this.updateCartCount();
  }

  // 5. GET TOTAL PRICE
  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }

  // Helper to update the count observable
  private updateCartCount() {
    const totalCount = this.cartItems.reduce((count, item) => count + item.quantity, 0);
    this.cartCount.next(totalCount);
  }
}