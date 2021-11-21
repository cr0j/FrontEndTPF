import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PacientesService } from '../pacientes.service';
declare var $: any;
declare var M: any;
@Component({
  selector: 'app-pacientes-add',
  templateUrl: './pacientes-add.component.html',
  styleUrls: ['./pacientes-add.component.css']
})
export class PacientesAddComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private CabeceraService: PacientesService
  ) { }

  tableHeaders = ['Producto','Precio','Cantidad','Subtotal','Opciones']
  cabecera = {
    nro_factura : '',
    fecha: '',
    cliente:'',
    total:null
  };

  arrayDetalles = [];
  precioProductos = [];
  subtotalProductos = [];

  productos = [];
  clientes = [];

  clienteSeleccionado = '';
  productoSeleccionado = '';
  show = false;

  ngOnInit() {
    this.getSelectData();

  }

  ngAfterViewInit() {
    $('.datepicker').datepicker({
      format: "yyyy-mm-dd",
      i18n: {
        cancel: 'Cancelar',
        clear: 'Limpiar',
        done: 'Aceptar',
        months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Dic"],
        weekdays: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
        weekdaysShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
        weekdaysAbbrev: ["D", "L", "M", "M", "J", "V", "S"]
      },
      // minDate: new Date(1940,1,1),
      // maxDate: new Date(),
      //yearRange:[(new Date).getFullYear(),2080],
      container: 'body'
    });
  }
  
  
  

  getSelectData = ()=>{
    var self= this;
    self.CabeceraService.getClientes().subscribe((response1)=>{

      self.CabeceraService.getProductos().subscribe((response2)=>{
        self.clientes = response1;
        self.productos = response2;
        console.log("Clientes:",self.clientes)
        console.log("Productos:",self.productos)
      })
    })
  }

  post = () => {
    var self=this;
    self.cabecera.fecha = $('#fecha').val();
    console.log("Datos por enviar: ", self.cabecera)

    if ( self.cabecera.nro_factura !== '' && self.cabecera.fecha !== '' && self.cabecera.cliente !== '' 
     /*&& self.cabecera.fecha !== '' && self.cabecera.cliente !== ''*/
       
       ) 
    {
      self.CabeceraService.postCabecera(JSON.stringify(self.cabecera)).subscribe((responseCabecera)=>{
          
          var detalleToPost = self.arrayDetalles;

          if(detalleToPost.length >0 ){

            console.log("detalles",detalleToPost);

            detalleToPost.forEach((detalle, index)=>{

              detalle.cabecera = responseCabecera.id;
              detalle.subtotal = self.subtotalProductos[index]

              console.log("detalle a enviar: ", detalle)

              self.CabeceraService.postDetalle(JSON.stringify(detalle)).subscribe((responseDetalle)=>{
                console.log("detalle guardado", responseDetalle.id)
              })
            })

            var toastMsg = 'Guardado Exitoso'
            var toastIcon = 'check_circle'
            var toastHTML ='<i class="material-icons">' + toastIcon + '</i><span>' + toastMsg +'</span>';
          
            M.toast({ html: toastHTML ,classes: 'rounded'});
            self.router.navigate(['/cabeceras']);

          }else{
            var toastMsg = 'Debe Agregar Detalles a su Factura!'
            var toastIcon = 'error'
            var toastHTML ='<i class="material-icons">' + toastIcon + '</i><span>' + toastMsg +'</span>';
          
            M.toast({ html: toastHTML ,classes: 'rounded'});
          }
      });

    } else {
      var toastMsg = 'Complete todos los campos requeridos!'
      var toastIcon = 'error'
      var toastHTML ='<i class="material-icons">' + toastIcon + '</i><span>' + toastMsg +'</span>';

      M.toast({ html: toastHTML ,classes: 'rounded'});
    }

  }

  agregarDetalle = () => {
    var self= this;

    var detalleNuevo = {
        cabecera : '',
        producto: '',
        cantidad:'',
        subotal:''
    }

    var precio = '0'
    var subtotal = '0'

    self.arrayDetalles.push(detalleNuevo)
    self.precioProductos.push(precio)
    self.subtotalProductos.push(subtotal)
    console.log(self.arrayDetalles)
    self.show = true;


  }


  borrarDetalle = (index_detalle) => {
    var self = this;
    console.log("detalle borrado", index_detalle)
    self.arrayDetalles.splice(index_detalle, 1);
    self.subtotalProductos.splice(index_detalle, 1);
    self.precioProductos.splice(index_detalle, 1);
    var total = 0;
    self.subtotalProductos.forEach(subtotal => {
      total = total + subtotal
      
    });
    self.cabecera.total = total

  }


  setNroFactura=(index_deltalle)=>{
    var self=this;
    console.log("nro factura index", index_deltalle)
  }

  setCliente = (cliente_id)=>{
    var self=this;
    self.cabecera.cliente = cliente_id;
    console.log(cliente_id)
  }

  setProducto = (producto,index_detalle)=>{
    var self=this;
    self.productoSeleccionado = producto.id;
    self.arrayDetalles[index_detalle].producto = producto.id;
    self.precioProductos[index_detalle] = producto.precio;
    self.subtotalProductos[index_detalle] = producto.precio*self.arrayDetalles[index_detalle].cantidad;

    var total = 0;
    self.subtotalProductos.forEach(subtotal => {
      total = total + subtotal
      
    });
    self.cabecera.total = total
  }

  setSubotalDetalle=(index)=>{
    var self = this;
    self.subtotalProductos[index] = self.arrayDetalles[index].cantidad * self.precioProductos[index]
    var total = 0;
    self.subtotalProductos.forEach(subtotal => {
      total = total + subtotal
      
    });
    self.cabecera.total = total
  }







  // post = () => {
  //   console.log($('#paciente_fechanacimiento').val())
  //   var e = {
  //     nombre: $('#paciente_nombre').val(),
  //     apellido: $('#paciente_apellido').val(),
  //     email: $('#paciente_email').val(),
  //     telefono: $('#paciente_telefono').val(),
  //     ruc: $('#paciente_telefono').val(),
  //     cedula: $('#paciente_cedula').val(),
  //     tipoPersona: "FISICA",
  //     fechaNacimiento: $('#paciente_fechanacimiento').val()
  //   }
  //   this.service.postPaciente(e).subscribe(
      
  //     data => {
  //       M.toast({html: 'Paciente agregada correctamente'});
  //       this.router.navigate(['/pacientes']);
  //     },
  //     error => {
  //       M.toast({html: error});
  //       console.log(error);

  //     }
  //   )
  // }

}
