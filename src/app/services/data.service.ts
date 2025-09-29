import { Injectable } from '@angular/core';

export interface Estudiante {
  id?: string;
  nombre: string;
  correo: string;
  programa: string;
  telefono?: string;
}

export interface Libro {
  id?: string;
  titulo: string;
  autor: string;
}

export interface Prestamo {
  id?: string;
  estudiante: string;
  libro: string;
  fecha: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Datos simulados (mock)
  estudiantes: Estudiante[] = [
    { id: '1', nombre: 'Juan Pérez', correo: 'juan.perez@ucc.edu.co', programa: 'Ingeniería de Software' },
    { id: '2', nombre: 'María López', correo: 'maria.lopez@ucc.edu.co', programa: 'Medicina' }
  ];

  libros: Libro[] = [
    { id: '1', titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez' },
    { id: '2', titulo: 'El Quijote', autor: 'Miguel de Cervantes' },
    { id: '3', titulo: 'La Odisea', autor: 'Homero' }
  ];

  prestamos: Prestamo[] = [
    { id: '1', estudiante: 'Juan Pérez', libro: 'Cien años de soledad', fecha: '2025-09-25' }
  ];

  constructor() { }

  // Métodos para estudiantes
  getEstudiantes(): Estudiante[] {
    return this.estudiantes;
  }

  addEstudiante(estudiante: Estudiante): void {
    estudiante.id = Date.now().toString();
    this.estudiantes.push(estudiante);
  }

  // Métodos para libros
  getLibros(): Libro[] {
    return this.libros;
  }

  addLibro(libro: Libro): void {
    libro.id = Date.now().toString();
    this.libros.push(libro);
  }

  // Métodos para préstamos
  getPrestamos(): Prestamo[] {
    return this.prestamos;
  }

  addPrestamo(prestamo: Prestamo): void {
    prestamo.id = Date.now().toString();
    this.prestamos.push(prestamo);
  }
}
