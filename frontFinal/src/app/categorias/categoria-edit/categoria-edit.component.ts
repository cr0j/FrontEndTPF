import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CategoriasService } from '../categorias.service';
import { Router, ActivatedRoute } from '@angular/router';

declare var $: any;
declare var M: any;

@Component({
  selector: 'app-categoria-edit',
  templateUrl: './categoria-edit.component.html',
  styleUrls: ['./categoria-edit.component.css']
})

export class CategoriaEditComponent implements OnInit {

  cliente={
    id:-1,
    nombre:'',
    ruc:'',
    email:''
  };


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ClienteService: CategoriasService
  ) { }

  ngOnInit() {
    this.inicializar();
  }

  inicializar = () => {
    var self = this;
    self.route.params.subscribe(params => { //obtenemos el parametro id de la ruta clientes/edit/8
      if (params.id) {
       var id_cliente = params.id;

       self.ClienteService.getCategoria(id_cliente).subscribe(
        response => {
          //console.log(response)
          self.cliente = response;
          console.log(self.cliente)
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

    if (self.cliente.nombre !== '' && self.cliente.ruc !== '' && self.cliente.email !== '') {

      self.ClienteService.putCategoria(self.cliente).subscribe(
        () => {
          var toastMsg = 'Actualización Exitosa'
          var toastIcon = 'check_circle'
          var toastHTML ='<i class="material-icons">' + toastIcon + '</i><span>' + toastMsg +'</span>';
        
          M.toast({ html: toastHTML ,classes: 'rounded'});

          self.router.navigate(['/clientes']);
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
