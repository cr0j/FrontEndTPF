import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { sCategoriaListComponent } from './scategoria-list/scategoria-list.component';
import { sCategoriaAddComponent } from './scategoria-add/scategoria-add.component';
import { sCategoriaEditComponent } from './scategoria-edit/scategoria-edit.component';

const routes: Routes = [
  { path: 'productos',  component: sCategoriaListComponent },
  { path: 'productos/add',  component: sCategoriaAddComponent },
  { path: 'productos/edit/:id',  component: sCategoriaEditComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubCategoriasRoutingModule { }
