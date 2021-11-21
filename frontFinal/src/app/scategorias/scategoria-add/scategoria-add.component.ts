import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { sCategoriasService } from '../scategorias.service';
declare var $: any;
declare var M: any;

@Component({
  selector: 'app-categoria-add',
  templateUrl: './scategoria-add.component.html',
  styleUrls: ['./scategoria-add.component.css']
})
export class sCategoriaAddComponent implements OnInit {
  producto = {
    nombre : '',
    precio: '',
    existencia:''
  };

 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productoService: sCategoriasService
  ) { }

  ngOnInit() {
  }

  post = () => {
    var self=this;
    console.log("Datos por enviar: ", self.producto)

    if ( self.producto.nombre !== '' && self.producto.precio !== '' && self.producto.existencia !== '' ) 
    {
      self.productoService.postCategoria(JSON.stringify(self.producto)).subscribe(()=>{
          
          var toastMsg = 'Guardado Exitoso'
          var toastIcon = 'check_circle'
          var toastHTML ='<i class="material-icons">' + toastIcon + '</i><span>' + toastMsg +'</span>';
        
          M.toast({ html: toastHTML ,classes: 'rounded'});
          self.router.navigate(['/productos']);
      });

    } else {
      var toastMsg = 'Complete todos los campos requeridos!'
      var toastIcon = 'error'
      var toastHTML ='<i class="material-icons">' + toastIcon + '</i><span>' + toastMsg +'</span>';

      M.toast({ html: toastHTML ,classes: 'rounded'});
    }

  }

}
