import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriasService } from '../categorias.service';

declare var M: any;

@Component({
  selector: 'app-categoria-add',
  templateUrl: './categoria-add.component.html',
  styleUrls: ['./categoria-add.component.css']
})
export class CategoriaAddComponent implements OnInit {

  cliente = {
    nombre : '',
    ruc: '',
    email:''
  };

 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ClienteService: CategoriasService
  ) { }

  ngOnInit() {
  }

  post = () => {
    var self=this;
    console.log("Datos por enviar: ", self.cliente)

    if ( self.cliente.nombre !== '' && self.cliente.ruc !== '' && self.cliente.email !== '' ) 
    {
      self.ClienteService.postCategoria(JSON.stringify(self.cliente)).subscribe(()=>{
          
          var toastMsg = 'Guardado Exitoso'
          var toastIcon = 'check_circle'
          var toastHTML ='<i class="material-icons">' + toastIcon + '</i><span>' + toastMsg +'</span>';
        
          M.toast({ html: toastHTML ,classes: 'rounded'});
          self.router.navigate(['/clientes']);
      });

    } else {
      var toastMsg = 'Complete todos los campos requeridos!'
      var toastIcon = 'error'
      var toastHTML ='<i class="material-icons">' + toastIcon + '</i><span>' + toastMsg +'</span>';

      M.toast({ html: toastHTML ,classes: 'rounded'});
    }

  }

}
