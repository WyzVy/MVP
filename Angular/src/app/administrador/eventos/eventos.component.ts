import { Component } from '@angular/core';
import { Evento } from 'src/app/modelo/evento';
import { EventoServiceService } from 'src/app/shared/evento-service.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
  eventos: any[] = [];
  constructor(private eventoservice: EventoServiceService) {}
  
  ngOnInit() {
    this.eventoservice.listar().subscribe(
      (evento: Evento[]) => {
        this.eventos = evento;
      },
      error => {
        console.error('Error al obtener objetos', error);
      }
    );
  }
}
