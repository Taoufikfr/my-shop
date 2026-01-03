import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'product/:id', // Matches your product details route
    renderMode: RenderMode.Client // <--- CRITICAL FIX: Tells Angular "Don't build this now, do it in the browser"
  },
  {
    path: '**', // All other routes (home, contact, etc.)
    renderMode: RenderMode.Prerender // These will still be built as static HTML
  }
];