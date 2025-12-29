import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';


@Injectable({ providedIn: 'root' })
export class ProductService {
  private http = inject(HttpClient);
  private apiUrl = 'https://fakestoreapi.com/products';

  getProducts() {
    // Cela correspond exactement au GET de Postman
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProduct(id: number) {
  return this.http.get<Product>(`${this.apiUrl}/${id}`);
}
}