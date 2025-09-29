import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { DataService, Libro } from '../../services/data.service';

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent implements OnInit {
  libros: Libro[] = [];
  nuevoLibro: Libro = {
    titulo: '',
    autor: ''
  };

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.libros = this.dataService.getLibros();
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.dataService.addLibro({ ...this.nuevoLibro });
      this.resetForm();
    }
  }

  private resetForm(): void {
    this.nuevoLibro = {
      titulo: '',
      autor: ''
    };
  }
}
