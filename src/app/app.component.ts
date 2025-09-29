import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule], // habilita *ngIf, *ngFor, *ngSwitch
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formulario-app';

  // pestaña activa por defecto
  activeTab: string = 'estudiantes';

  // cambiar pestaña
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  // 🔹 Datos simulados (mock)
  estudiantes = [
    { nombre: 'Juan Pérez', correo: 'juan.perez@ucc.edu.co', programa: 'Ingeniería de Software' },
    { nombre: 'María López', correo: 'maria.lopez@ucc.edu.co', programa: 'Medicina' }
  ];

  libros = [
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez' },
    { titulo: 'El Quijote', autor: 'Miguel de Cervantes' },
    { titulo: 'La Odisea', autor: 'Homero' }
  ];

  prestamos = [
    { estudiante: 'Juan Pérez', libro: 'Cien años de soledad', fecha: '2025-09-25' }
  ];
}
