import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PacientesService } from '../pacientes.service';
declare var M: any;                                           
declare var $: any;
@Component({
  selector: 'app-pacientes',                        
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit, AfterViewInit {
  data = [];
  tableHeaders = ['ID', 'Numero de Factura','Fecha', 'Cliente' ,'Total' ,'Opciones'];
  idDelete = '';
  clientes = [];
  productos = [];
  clienteSeleccionado = -1;

  constructor(private CabeceraService: PacientesService) { }

  ngOnInit() {
    this.getFacturas();
    this.getSelectData();
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {

    $('.modal').modal({
      dismissible:false
    });

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

  

  getFacturas = () => {                                      
    var self = this;
    this.CabeceraService.getCabeceras().subscribe(
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
    self.CabeceraService.deleteCabecera(self.idDelete).subscribe(
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
  setCliente(cliente){
    var self=this;
    self.clienteSeleccionado = cliente.id;
    console.log(self.clienteSeleccionado)
  }


  filter(){
    var self =this;
    var cliente_id = self.clienteSeleccionado
    var startDate = $('#startDate').val();
    var endDate = $('#endDate').val();
    
    if(cliente_id != -1){
      self.CabeceraService.filterCabecera(cliente_id,startDate,endDate).subscribe(
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
    self.getFacturas();
  }

  

}
