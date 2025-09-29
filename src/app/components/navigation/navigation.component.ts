import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  @Input() activeTab: string = 'estudiantes';
  @Output() tabChange = new EventEmitter<string>();

  onTabChange(tab: string): void {
    this.tabChange.emit(tab);
  }
}
