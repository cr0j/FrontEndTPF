import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PacientesService } from '../pacientes.service';
declare var $: any;
declare var M: any;
@Component({
  selector: 'app-pacientes-edit',
  templateUrl: './pacientes-edit.component.html',
  styleUrls: ['./pacientes-edit.component.css']
})
export class PacientesEditComponent implements OnInit {

  data=[];
  tableHeaders=['ID','Producto','Precio','Cantidad','Subtotal'];
  cabecera_id = -1;
  clientes = []
  productos = []
  productoSeleccionado = -1
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private CabeceraService: PacientesService
  ) { }

  ngOnInit() {
    this.inicializar();
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
  setProducto = (producto)=>{
    var self=this;
    self.productoSeleccionado = producto.id;
    
  }
  inicializar = () => {
    var self = this;
    self.route.params.subscribe(params => { //obtenemos el parametro id de la ruta cabeceras/edit/8
      if (params.id) {
       var cabecera_id = params.id;
        self.cabecera_id = params.id;

       self.CabeceraService.getDetalleByCabecera(cabecera_id).subscribe(
        response => {
          //console.log(response)
          self.data = response;
          console.log(self.data)
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

  filter(){

    var self =this;
    var cabecera_id = self.cabecera_id
    var producto_id = self.productoSeleccionado
    var startDate = $('#startDate').val();
    var endDate = $('#endDate').val();

    if(producto_id != -1){
      self.CabeceraService.filterDetalle(cabecera_id,producto_id).subscribe(
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
    self.inicializar();
  }





}