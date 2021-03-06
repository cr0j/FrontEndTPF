import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacientesRoutingModule } from './pacientes-routing.module';
import { PacientesAddComponent } from './pacientes-add/pacientes-add.component';
import { PacientesComponent } from './pacientes-list/pacientes.component';
import { Pacientes2Component } from './pacientes-list2/pacientes2.component';
import { PacientesEditComponent } from './pacientes-edit/pacientes-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedHomeModule } from '../home/shared-home/shared-home.module';

@NgModule({
  declarations: [
    PacientesComponent,
    Pacientes2Component,
    PacientesAddComponent,
    PacientesEditComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    SharedHomeModule,
    PacientesRoutingModule,

  ]
})
export class PacientesModule { }
