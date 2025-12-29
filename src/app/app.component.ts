import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Important pour les boucles
import { ProductService } from './product.service';
import { Product } from './product.model';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
addToCart(_t10: Product) {
throw new Error('Method not implemented.');
}
  // On injecte notre service
  private productService = inject(ProductService);
  
  // Notre liste de produits vide au départ
  products: Product[] = [];

  ngOnInit() {
    // Au démarrage, on charge les données
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      console.log('Données chargées !');
    });
  }
}