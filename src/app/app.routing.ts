import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SerieComponent } from './components/serie/serie.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { InsertarComponent } from './components/insertar/insertar.component';

const appRoutes: Routes = [
    { path: "serie/:id", component: SerieComponent }
    , { path: "personajes/:id", component: PersonajesComponent }
    , { path: "insertar", component: InsertarComponent }
  ];
  
  export const appRoutingProvider: any[] = [];
  export const routing: ModuleWithProviders<any> = RouterModule.forRoot(
    appRoutes
  );
  