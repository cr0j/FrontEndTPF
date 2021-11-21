import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubCategoriasRoutingModule } from './scategorias-routing.module';
import { sCategoriaListComponent } from './scategoria-list/scategoria-list.component';
import { sCategoriaAddComponent } from './scategoria-add/scategoria-add.component';
import { sCategoriaEditComponent } from './scategoria-edit/scategoria-edit.component';
import { FormsModule } from '@angular/forms';
import { SharedHomeModule } from '../home/shared-home/shared-home.module';


@NgModule({
  declarations: [sCategoriaListComponent, sCategoriaAddComponent, sCategoriaEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    SubCategoriasRoutingModule,
    SharedHomeModule
  ]
})
export class sCategoriasModule { }
