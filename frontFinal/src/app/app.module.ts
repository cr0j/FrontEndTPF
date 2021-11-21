import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PacientesModule } from './pacientes/pacientes.module';
import { CategoriasModule } from './categorias/categorias.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedHomeModule } from './home/shared-home/shared-home.module';
import { sCategoriasModule } from './scategorias/scategorias.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedHomeModule,
    HttpClientModule,
    AppRoutingModule,
    PacientesModule,
    sCategoriasModule,
    CategoriasModule,
  ],
  providers: [
   
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
