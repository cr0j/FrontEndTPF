import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  hhtpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});
  constructor(private http: HttpClient) {}

  getCabeceras(): Observable<any> { //getall cabecera
    return this.http.get('/api/cabecera', {headers: this.hhtpHeaders});
  }
  getCabecera(id): Observable<any> { //obtener cabecera
    return this.http.get('/api/cabecera/' + id, {headers: this.hhtpHeaders});
  }

  postCabecera(obj): Observable<any> { //post cabecera
    return this.http.post('/api/cabecera/', obj, {headers: this.hhtpHeaders});
  }

  putCabecera(obj): Observable<any> { //put cabecera
    return this.http.put('/api/cabecera/' + obj.id + "/" , obj, {headers: this.hhtpHeaders});
  }

  deleteCabecera(id): Observable<any> { //delete cabecera
    return this.http.delete('/api/cabecera/' + id + "/", {headers: this.hhtpHeaders});
  }
  


  getDetalles(): Observable<any> { //getall detalle
    return this.http.get('/api/detalle', {headers: this.hhtpHeaders});
  }
  getDetalle(id): Observable<any> { //obtener detalle
    return this.http.get('/api/detalle/' + id, {headers: this.hhtpHeaders});
  }
  getDetalleByCabecera(cabecera_id): Observable<any>{ //getall detalle por cabecera
    return this.http.get('/api/detalle/?cabecera=' + cabecera_id)
  }

  postDetalle(obj): Observable<any> { //post detalle
    return this.http.post('/api/detalle/', obj, {headers: this.hhtpHeaders});
  }

  putDetalle(obj): Observable<any> { //put detalle
    return this.http.put('/api/detalle/' + obj.id + "/" , obj, {headers: this.hhtpHeaders});
  }

  deleteDetalle(id): Observable<any> { //delete detalle
    return this.http.delete('/api/detalle/' + id + "/", {headers: this.hhtpHeaders});
  }

  filterDetalle(cabecera_id,producto_id): Observable<any> {
        return this.http.get('/api/detalle/?cabecera=' + cabecera_id + '&producto=' + producto_id)
  }

  filterDetalle2(producto_id,stardate,enddate): Observable<any> {
    if(stardate =='' || stardate =='')
      return this.http.get('/api/detalle/?producto=' + producto_id)
    else
      return this.http.get('/api/detalle/?producto=' + producto_id + '&startdate='+ stardate + '&enddate='+ enddate)
  }

  filterCabecera(cliente_id,stardate,enddate): Observable<any> {
    if(stardate =='' || stardate =='')
      return this.http.get('/api/cabecera/?cliente=' + cliente_id)
    else
      return this.http.get('/api/cabecera/?cliente=' + cliente_id + '&startdate='+ stardate + '&enddate='+ enddate)
  }
  

  getProductos(): Observable<any> { //getall producto
    return this.http.get('/api/producto', {headers: this.hhtpHeaders});
  }

  getClientes(): Observable<any> { //getall cliente
    return this.http.get('/api/cliente', {headers: this.hhtpHeaders});
  }
  
}
