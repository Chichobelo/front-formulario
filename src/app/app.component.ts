import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importar los componentes
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { LibrosComponent } from './components/libros/libros.component';
import { PrestamosComponent } from './components/prestamos/prestamos.component';
import { RecordatoriosComponent } from './components/recordatorios/recordatorios.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    NavigationComponent,
    EstudiantesComponent,
    LibrosComponent,
    PrestamosComponent,
    RecordatoriosComponent
  ],
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
}
