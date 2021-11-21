import { Component, OnInit, AfterViewInit } from '@angular/core';
import { sCategoriasService } from '../scategorias.service';
import { Router, ActivatedRoute } from '@angular/router';

declare var $: any;
declare var M: any;

@Component({
  selector: 'app-scategoria-edit',
  templateUrl: './scategoria-edit.component.html',
  styleUrls: ['./scategoria-edit.component.css']
})

export class sCategoriaEditComponent implements OnInit {

  producto={
    id:-1,
    nombre:'',
    precio:'',
    existencia:''
  };


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ProductoService: sCategoriasService
  ) { }

  ngOnInit() {
    this.inicializar();
  }

  inicializar = () => {
    var self = this;
    self.route.params.subscribe(params => { //obtenemos el parametro id de la ruta productos/edit/8
      if (params.id) {
       var id_cliente = params.id;

       self.ProductoService.getCategoria(id_cliente).subscribe(
        response => {
          //console.log(response)
          self.producto = response;
          console.log(self.producto)
        },
        error => {
  
          M.toast({ html: 'Error cargando la informacion desde el servidor' });
  
          console.log(error);
  
        }
      );
      } else {
        M.toast({ html:'Error no puede editar este id' });
      }
    });

  }



  put = () => {
    var self = this;

    if (self.producto.nombre !== '' && self.producto.precio !== '' && self.producto.existencia !== '') {

      self.ProductoService.putCategoria(self.producto).subscribe(
        () => {
          var toastMsg = 'Actualización Exitosa'
          var toastIcon = 'check_circle'
          var toastHTML ='<i class="material-icons">' + toastIcon + '</i><span>' + toastMsg +'</span>';
        
          M.toast({ html: toastHTML ,classes: 'rounded'});

          self.router.navigate(['/productos']);
        },
        error => {
          console.log(error);
        }
      );

    } else {
      var toastMsg = 'Complete todos los campos requeridos!'
      var toastIcon = 'error'
      var toastHTML ='<i class="material-icons">' + toastIcon + '</i><span>' + toastMsg +'</span>';

      M.toast({ html: toastHTML ,classes: 'rounded'});
    }
  }



}
