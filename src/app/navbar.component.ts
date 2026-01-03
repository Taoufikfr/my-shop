import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <a routerLink="/" class="logo">MyShop<span class="dot">.</span></a>

      <div class="nav-links" [class.open]="isMenuOpen()">
        <a routerLink="/" routerLinkActive="active" (click)="closeMenu()">Home</a>
        <a routerLink="/products" routerLinkActive="active" (click)="closeMenu()">Shop</a>
        <a routerLink="/categories" routerLinkActive="active" (click)="closeMenu()">Categories</a>
        
        <button class="mobile-close" (click)="toggleMenu()">✕</button>
      </div>

      <div class="nav-actions">
        <a routerLink="/cart" class="cart-btn">
          🛒 <span class="badge">3</span> </a>
        <button class="hamburger" (click)="toggleMenu()">☰</button>
      </div>
    </nav>
    
    <div class="backdrop" *ngIf="isMenuOpen()" (click)="closeMenu()"></div>
  `,
  styles: [`
    /* --- GLASSMORPHISM NAVBAR --- */
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 5%;
      position: sticky; /* Stays at top */
      top: 0;
      z-index: 1000;
      background: rgba(255, 255, 255, 0.9); /* Translucent white */
      backdrop-filter: blur(10px); /* Blur effect */
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }

    .logo { font-size: 1.5rem; font-weight: 800; text-decoration: none; color: #333; }
    .dot { color: #ff5252; }

    /* --- DESKTOP LINKS --- */
    .nav-links { display: flex; gap: 2rem; }
    .nav-links a { 
      text-decoration: none; 
      color: #555; 
      font-weight: 500;
      transition: color 0.3s;
    }
    .nav-links a:hover, .nav-links a.active { color: #ff5252; }
    .mobile-close { display: none; }

    /* --- ACTIONS --- */
    .nav-actions { display: flex; align-items: center; gap: 1rem; }
    .hamburger { display: none; background: none; border: none; font-size: 1.5rem; cursor: pointer; }
    
    .cart-btn { position: relative; text-decoration: none; font-size: 1.2rem; }
    .badge {
      position: absolute;
      top: -8px; right: -8px;
      background: #ff5252;
      color: white;
      font-size: 0.7rem;
      padding: 2px 6px;
      border-radius: 50%;
    }

    /* --- MOBILE RESPONSIVENESS (Max width 768px) --- */
    @media (max-width: 768px) {
      .hamburger { display: block; }
      
      .nav-links {
        position: fixed;
        top: 0; right: -100%; /* Hidden by default */
        height: 100vh;
        width: 250px;
        background: white;
        flex-direction: column;
        padding: 2rem;
        box-shadow: -5px 0 15px rgba(0,0,0,0.1);
        transition: right 0.3s ease-in-out;
      }

      .nav-links.open { right: 0; } /* Slide in */
      
      .mobile-close {
        display: block;
        align-self: flex-end;
        background: none; border: none; font-size: 1.5rem; margin-bottom: 2rem;
      }
      
      .backdrop {
        position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 999;
      }
    }
  `]
})
export class NavbarComponent {
  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}