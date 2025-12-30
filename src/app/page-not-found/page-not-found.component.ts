import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [RouterLink], // Needed for the "Go Home" button
  template: `
    <div class="container">
      <h1>404</h1>
      <h2>Oops! Page not found.</h2>
      <p>The page you are looking for doesn't exist or has been moved.</p>
      
      <a routerLink="/" class="btn-home">Go Back Home</a>
    </div>
  `,
  styles: [`
    .container {
      text-align: center;
      padding-top: 50px;
      font-family: sans-serif;
    }
    h1 {
      font-size: 6rem;
      margin: 0;
      color: #e74c3c;
    }
    h2 {
      margin-top: 0;
      color: #333;
    }
    .btn-home {
      display: inline-block;
      margin-top: 20px;
      padding: 10px 20px;
      background-color: #007bff;
      color: white;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
    }
    .btn-home:hover {
      background-color: #0056b3;
    }
  `]
})
export class PageNotFoundComponent {}