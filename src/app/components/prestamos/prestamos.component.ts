import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { DataService, Prestamo, Libro } from '../../services/data.service';

@Component({
  selector: 'app-prestamos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './prestamos.component.html',
  styleUrl: './prestamos.component.css'
})
export class PrestamosComponent implements OnInit {
  prestamos: Prestamo[] = [];
  libros: Libro[] = [];
  nuevoPrestamo: Prestamo = {
    estudiante: '',
    libro: '',
    fecha: ''
  };

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.prestamos = this.dataService.getPrestamos();
    this.libros = this.dataService.getLibros();
    // Establecer fecha actual por defecto
    this.nuevoPrestamo.fecha = new Date().toISOString().split('T')[0];
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.dataService.addPrestamo({ ...this.nuevoPrestamo });
      this.resetForm();
    }
  }

  private resetForm(): void {
    this.nuevoPrestamo = {
      estudiante: '',
      libro: '',
      fecha: new Date().toISOString().split('T')[0]
    };
  }
}
