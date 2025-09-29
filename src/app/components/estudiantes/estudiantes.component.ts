import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { DataService, Estudiante } from '../../services/data.service';

@Component({
  selector: 'app-estudiantes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './estudiantes.component.html',
  styleUrl: './estudiantes.component.css'
})
export class EstudiantesComponent implements OnInit {
  estudiantes: Estudiante[] = [];
  nuevoEstudiante: Estudiante = {
    nombre: '',
    correo: '',
    programa: '',
    telefono: ''
  };

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.estudiantes = this.dataService.getEstudiantes();
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.dataService.addEstudiante({ ...this.nuevoEstudiante });
      this.resetForm();
    }
  }

  private resetForm(): void {
    this.nuevoEstudiante = {
      nombre: '',
      correo: '',
      programa: '',
      telefono: ''
    };
  }
}
