import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  hhtpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});
  constructor(private http: HttpClient) {}

  getCategorias(): Observable<any> { //getall cliente
    return this.http.get('/api/cliente', {headers: this.hhtpHeaders});
  }
  getCategoria(id): Observable<any> { //obtener cliente
    return this.http.get('/api/cliente/' + id, {headers: this.hhtpHeaders});
  }

  postCategoria(obj): Observable<any> { //post cliente
    return this.http.post('/api/cliente/', obj, {headers: this.hhtpHeaders});
  }

  putCategoria(obj): Observable<any> { //put cliente
    return this.http.put('/api/cliente/' + obj.id + "/" , obj, {headers: this.hhtpHeaders});
  }

  deleteCategoria(id): Observable<any> { //delete cliente
    return this.http.delete('/api/cliente/' + id + "/", {headers: this.hhtpHeaders});
  }
  filter(nombreBuscar): Observable<any> {
    return this.http.get('/api/cliente/?nombre=' + nombreBuscar)
  }

}
