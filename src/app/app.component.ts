import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CartService } from './cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cartService = inject(CartService);
  cartCount = 0;

  ngOnInit() {
    // Subscribe to the count stream
    this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });
  }
}