import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class sCategoriasService {

  hhtpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});
  constructor(private http: HttpClient) {}

  getCategorias(): Observable<any> { //getall producto
    return this.http.get('/api/producto', {headers: this.hhtpHeaders});
  }
  getCategoria(id): Observable<any> { //obtener producto
    return this.http.get('/api/producto/' + id, {headers: this.hhtpHeaders});
  }

  postCategoria(obj): Observable<any> { //post producto
    return this.http.post('/api/producto/', obj, {headers: this.hhtpHeaders});
  }

  putCategoria(obj): Observable<any> { //put producto
    return this.http.put('/api/producto/' + obj.id + "/" , obj, {headers: this.hhtpHeaders});
  }

  deleteCategoria(id): Observable<any> { //delete producto
    return this.http.delete('/api/producto/' + id + "/", {headers: this.hhtpHeaders});
  }
  filter(nombreBuscar): Observable<any> {
    return this.http.get('/api/producto/?nombre=' + nombreBuscar)
  }


}
