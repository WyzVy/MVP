import { Component } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})


export class ListarComponent {
  // Boolean variable to determine whether to hide the div
  filter: boolean = false;

  checkFilter(cond:boolean){
    // If the filter is empty, hide the div

  }
}
