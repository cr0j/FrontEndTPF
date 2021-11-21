import { Component, OnInit, AfterViewInit } from '@angular/core';
import { sCategoriasService } from '../scategorias.service';

declare var $: any;
declare var M: any;

@Component({
  selector: 'app-scategoria-list',
  templateUrl: './scategoria-list.component.html',
  styleUrls: ['./scategoria-list.component.css']
})
export class sCategoriaListComponent implements OnInit, AfterViewInit {

  data = [];
  tableHeaders = ['Código', 'Nombre','Precio', 'Existencia' ,'Opciones'];
  idDelete = '';

  constructor(private ClienteService: sCategoriasService) { }

  ngOnInit() {
    this.getCategorias();
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    $('.modal').modal({
      dismissible:false
    });
  }

  getCategorias = () => {
    var self = this;
    this.ClienteService.getCategorias().subscribe(
      response => {
        self.data = response;
        console.log(self.data)
      },
      error => {
        console.log(error);
      }

    )
  }

  getDeleteID(id, row_index){
    var self= this;
    console.log("id a borrar",id)
    console.log("indice de la fila es",row_index)
    self.idDelete= id;
  }

  deleteRecord(){
    var self=this;
    self.ClienteService.deleteCategoria(self.idDelete).subscribe(
      response => {
        //this.data.splice(Number(this.delete.pos), 1);
        window.location.reload()
        M.toast({html: 'Proyecto eliminada correctamente'})
      },
      error => {
        console.log(error);
      }
    );
  }


  filter(){
    var self =this;
    var nombre = $('#buscar').val();
    if(nombre != ''){
      self.ClienteService.filter(nombre).subscribe(
        response => {
          self.data= response;
          console.log("Filtro Recuperado",self.data);
        },
        error => {
          console.log(error);
        }
      )
    }
  }

  clear(){
    var self =this;
    self.data = [];
    self.getCategorias();
  }


}
