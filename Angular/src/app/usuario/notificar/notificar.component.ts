import { Component } from '@angular/core';
import { takeUntil } from 'rxjs';
import { Evento } from 'src/app/modelo/evento';
import { Objeto } from 'src/app/modelo/objeto';
import { EventoServiceService } from 'src/app/shared/evento-service.service';
import { ObjetoServiceService } from 'src/app/shared/objeto-service.service';

@Component({
  selector: 'app-notificar',
  templateUrl: './notificar.component.html',
  styleUrls: ['./notificar.component.css']
})
export class NotificarComponent {
  constructor(private eventoservice: EventoServiceService, private objetoservice: ObjetoServiceService){}
  eventos: string[]=[];
  nuevoObjeto: Objeto = new Objeto (1,"","",new Evento(1,"",new Date('2023-11-23')))

  ngOnInit() {
    this.eventoservice.listar().subscribe(
      (tipos: Evento[]) => {
        this.eventos = tipos.map(tipo => tipo.descripcion);
        // Agrega un console.log para imprimir el contenido del arreglo
        console.log('Contenido del arreglo tiposDeVehiculo:', this.eventos);
      },
      error => {
        console.error('Error al obtener tipos de vehículo', error);
      }
    );
  }
  guardar() {
    console.log('Guardando:', this.nuevoObjeto);
    this.objetoservice.guardarobjeto(this.nuevoObjeto).subscribe();
  }
}
