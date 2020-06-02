// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rounting
import { AppRoutingModule } from './app-routing.module';

// Componentes
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

// Servicios
import { ProductosService } from './servicios/productos.service';
import { LoginService } from './servicios/login.service';

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
  // proveedores de servico
  providers: [ProductosService, LoginService],
  bootstrap: [AppComponent],
})
export class AppModule {}
