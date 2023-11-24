import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})

export class IniciarSesionComponent {

  constructor(private router: Router) { }

  email=new FormControl('', [Validators.required,Validators.email]);
  password=new FormControl('', Validators.required);

  redirigirAInicio() {
    const inputCorreo = document.getElementById('correo-electronico') as HTMLInputElement;
    let domain = this.extractDomain(inputCorreo.value);
    this.email.markAsTouched;
    this.password.markAsTouched;
    if (domain === "admin.com") {
      this.router.navigate(['/administradorevent'])
    } else if (domain === "user.com") {
      this.router.navigate(['/userin'])
    } else if (domain === "staff.com") {
      this.router.navigate(['/personalin'])
    }
  }

  extractDomain(email: string): string {
    const parts = email.split('@');
    if (parts.length === 2) {
      return parts[1];
    } else {
      console.error('Invalid email format');
      return '';
    }
  }

  redirigirARegistro() {
    this.router.navigate(['/registro']);
  }
}
