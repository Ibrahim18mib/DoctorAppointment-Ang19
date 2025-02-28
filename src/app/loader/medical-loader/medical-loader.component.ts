import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-medical-loader',
  imports: [CommonModule],
  templateUrl: './medical-loader.component.html',
  styleUrl: './medical-loader.component.css',
})
export class MedicalLoaderComponent {
  @Input() show: boolean = false;
}
