import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { CartService } from '../cart.service'; // 1. Import CartService

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductList implements OnInit {
  private productService = inject(ProductService);
  private cartService = inject(CartService); // 2. Inject it here
  
  products: Product[] = [];
  categories: string[] = [];
  
  // Track selected category to highlight the button
  selectedCategory: string = 'all';

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  loadCategories() {
    this.productService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  getAllProducts() {
    this.selectedCategory = 'all';
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    this.productService.getProductsByCategory(category).subscribe(data => {
      this.products = data;
    });
  }

  addToCart(product: Product) {
    // Call the service
    this.cartService.addToCart(product);
    
    // Visual feedback
    alert(`${product.title} added to cart! \nTotal items: ${this.cartService.getItems().length}`);
  }
}