import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent {
  constructor(private router: Router) { }
  name=new FormControl('', Validators.required);
  email=new FormControl('', [Validators.required,Validators.email]);
  password=new FormControl('', Validators.required);
  
  redirigir(){
    alert('Registro exitoso')
    this.router.navigate(['/ingreso']);
  }

}
