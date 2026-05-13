import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sts',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './sts.component.html',
  styleUrl: './sts.component.scss'
})
export class StsComponent {
  input: number | null = null;

  get result(): string {
    if (this.input === null) return '—';
    return ((this.input + 71) / 16.2).toFixed(2);
  }
}
