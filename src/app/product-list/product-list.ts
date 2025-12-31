import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  // Note: Standard Angular files are usually named .component.html
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductList implements OnInit { // Renamed to standard 'ProductListComponent'

  private productService = inject(ProductService);
  private cartService = inject(CartService);
  
  products: Product[] = [];
  categories: string[] = [];
  selectedCategory: string = 'all';

  ngOnInit() {
    // FIX: You must call these methods here for them to work when the page loads
    this.getAllProducts();
    this.loadCategories();
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
    this.cartService.addToCart(product);
    
    // Visual feedback
    // Ensure getItems() exists in your CartService!
    const count = this.cartService.getItems().length;
    alert(`${product.title} added to cart!\nTotal items: ${count}`);
  }
}