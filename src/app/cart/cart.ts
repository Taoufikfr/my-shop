import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';
import { CartItem } from '../cart-item.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class Cart implements OnInit {
  cartService = inject(CartService);
  
  items: CartItem[] = [];
  totalPrice: number = 0;

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.items = this.cartService.getItems();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  // Increase Quantity
  increment(item: CartItem) {
    this.cartService.updateQuantity(item.product.id, item.quantity + 1);
    this.loadCart(); // Refresh totals
  }

  // Decrease Quantity
  decrement(item: CartItem) {
    this.cartService.updateQuantity(item.product.id, item.quantity - 1);
    this.loadCart(); // Refresh totals
  }

  // Remove Completely
  remove(id: number) {
    this.cartService.removeItem(id);
    this.loadCart();
  }
}