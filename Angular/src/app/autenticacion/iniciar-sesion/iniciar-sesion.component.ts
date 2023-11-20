import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})

export class IniciarSesionComponent {

  constructor(private router: Router) { }

  redirigirAInicio() {
    const inputCorreo = document.getElementById('correo-electronico') as HTMLInputElement;
    let domain = this.extractDomain(inputCorreo.value);
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
