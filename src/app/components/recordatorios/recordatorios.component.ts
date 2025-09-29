import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Recordatorio {
  fecha: string;
  tipo: string;
  estudiante: string;
  mensaje: string;
}

@Component({
  selector: 'app-recordatorios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recordatorios.component.html',
  styleUrl: './recordatorios.component.css'
})
export class RecordatoriosComponent {
  recordatorios: Recordatorio[] = [
    {
      fecha: '2025-09-28 09:00',
      tipo: 'Recordatorio de Devolución',
      estudiante: 'Juan Pérez',
      mensaje: 'El libro "Cien años de soledad" debe ser devuelto en 3 días'
    }
  ];
}
