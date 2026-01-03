import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from './cart.service';

// 1. Import your new Navbar
import { NavbarComponent } from './navbar.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  // 2. Add NavbarComponent to this list
  imports: [RouterOutlet, RouterLink, CommonModule, NavbarComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cartService = inject(CartService);
  cartCount = 0;

  ngOnInit() {
    this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });
  }
}