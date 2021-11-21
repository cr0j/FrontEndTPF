import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PacientesComponent } from './pacientes/pacientes-list/pacientes.component';
import { CategoriaListComponent } from './categorias/categoria-list/categoria-list.component';


const appRoutes: Routes = [
 { path: '', redirectTo:'clientes', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
