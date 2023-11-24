import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent {
  constructor(private router: Router) { }
  email=new FormControl('', [Validators.required,Validators.email]);
  password=new FormControl('', Validators.required);

  redirigir(){
    this.router.navigate(['/ingreso']);
  }
}
