import { Component } from '@angular/core';
import { ReniecService } from '../services/reniec.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './home-page.component.html',
  styles: ``
})
export default class HomePageComponent {
  form = {
    nuDniUsuario: '',
    nuDniConsulta: ''
  };

  resultado: any;

  // Predefinidos
  private password = 'claveActualizada';      // Cambia esto según tu acceso real
  private nuRucUsuario = '20123456789';       // Tu RUC institucional

  constructor(private reniecService: ReniecService) { }

  consultar() {
    this.reniecService.consultarDni({
      nuDniConsulta: this.form.nuDniConsulta,
      nuDniUsuario: this.form.nuDniUsuario,
      nuRucUsuario: this.nuRucUsuario,
      password: this.password
    }).subscribe({
      next: (data) => {
        this.resultado = data;
        console.log('Resultado:', data);
      },
      error: (err) => {
        console.error('Error al consultar:', err);
      }
    });
  }
}
