import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';
import { Product } from '../product.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class Cart implements OnInit {
  
  private cartService = inject(CartService);
  
  items: Product[] = [];
  total: number = 0;

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.total = this.cartService.getTotalPrice();
  }

  removeItem(index: number) {
    this.cartService.removeItem(index);
    // Refresh the data
    this.items = this.cartService.getItems();
    this.total = this.cartService.getTotalPrice();
  }
}