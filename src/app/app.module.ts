import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProvider } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { SerieService } from './services/serie.service';
import { SerieComponent } from './components/serie/serie.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { InsertarComponent } from './components/insertar/insertar.component';
import { ModificarComponent } from './components/modificar/modificar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SerieComponent,
    PersonajesComponent,
    InsertarComponent,
    ModificarComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
    , routing
    , HttpClientModule
  ],
  providers: [
    appRoutingProvider
    , SerieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
