import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TiendaComponent } from './tienda/tienda.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { VermasComponent } from './vermas/vermas.component';
import { DetalleComponent } from './vermas/detalle/detalle.component';
import { KartComponent } from './kart/kart.component';
import { ItemsComponent } from './kart/items/items.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TiendaComponent,
    NavbarComponent,
    FooterComponent,
    CatalogoComponent,
    VermasComponent,
    DetalleComponent,
    KartComponent,
    ItemsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
