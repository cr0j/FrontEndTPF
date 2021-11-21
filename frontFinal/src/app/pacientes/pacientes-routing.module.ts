import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacientesAddComponent } from './pacientes-add/pacientes-add.component';
import { PacientesEditComponent } from './pacientes-edit/pacientes-edit.component';
import { PacientesComponent } from './pacientes-list/pacientes.component';
import { Pacientes2Component } from './pacientes-list2/pacientes2.component';

const pacientesRoutes: Routes = [
  { path: 'cabeceras',  component: PacientesComponent},
  { path: 'cabeceras/add',  component: PacientesAddComponent},
  { path: 'cabeceras/detail/:id',  component: PacientesEditComponent},
  { path: 'detalles',  component: Pacientes2Component},
];

@NgModule({
  imports: [RouterModule.forChild(pacientesRoutes)],
  exports: [RouterModule]
})
export class PacientesRoutingModule { }
