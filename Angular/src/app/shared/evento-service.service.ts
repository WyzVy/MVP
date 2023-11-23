import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evento } from '../modelo/evento';

@Injectable({
  providedIn: 'root'
})
export class EventoServiceService {

  constructor(private http:HttpClient) { }
  
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  listar() {
    return this.http.get<Evento[]>("http://localhost:8080/api_evento/listarEventos")
  }
  guardarevento(objeto:Evento){
    return this.http.post<Evento>("http://localhost:8080/api_evento/guardarEvento",objeto,this.httpOptions)
  }
}
