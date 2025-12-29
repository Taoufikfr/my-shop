import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http'; // <--- IMPORTER CECI

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient() // <--- AJOUTER CECI ICI
  ]
};