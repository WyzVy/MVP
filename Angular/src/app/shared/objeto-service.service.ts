import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Objeto } from '../modelo/objeto';

@Injectable({
  providedIn: 'root'
})
export class ObjetoServiceService {

  constructor(private http:HttpClient) { }
  
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  getObjetosPerdidos() {
    return this.http.get<Objeto[]>("http://localhost:8080/api_objeto/listarObjetos")
  }
  guardarobjeto(objeto:Objeto){
    return this.http.post<Objeto>("http://localhost:8080/api_objeto/guardarObjeto",objeto,this.httpOptions)
  }
}
