import { Component } from '@angular/core';
import { Objeto } from 'src/app/modelo/objeto';
import { ObjetoServiceService } from 'src/app/shared/objeto-service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})


export class ListarComponent {
  objetosPerdidos: any[] = [];
  constructor(private objetosPerdidosService: ObjetoServiceService) {}
  
  ngOnInit() {
    this.objetosPerdidosService.getObjetosPerdidos().subscribe(
      (objetos: Objeto[]) => {
        this.objetosPerdidos = objetos;
      },
      error => {
        console.error('Error al obtener objetos', error);
      }
    );
  }
}
