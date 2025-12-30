import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router'; // To read the URL
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private cartService = inject(CartService);

  product: Product | undefined;

  ngOnInit() {
    // 1. Get the ID from the URL
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // 2. Fetch the specific product
    if (id) {
      this.productService.getProductById(id).subscribe((data) => {
        this.product = data;
      });
    }
  }

  addToCart(product: Product) {
      this.cartService.addToCart(product);
      window.alert('Added to cart!'); // Simple feedback
    }
}