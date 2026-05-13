import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sts',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './fachtest-allround.component.html',
  styleUrl: './fachtest-allround.component.scss'
})
export class FachtestAllroundComponent {
    input: number | null = null;

    get result(): string {
      if (this.input === null) return '—';
      return ((this.input + 71) / 16.2).toFixed(2);
    }

    get resultMen(): string {
      if (this.input === null) return '—';
      return ((this.input + 33) / 16.2).toFixed(2);
    }

    get resultMixed2M1F(): string {
      if (this.input === null) return '—';
      //((1 * (this.input + 71) / 16.2) + (2 * (this.input + 33) / 16.2)) / (1 + 2)
      return (((1 * (this.input + 71) / 16.2) + (2 * (this.input + 33) / 16.2)) / (1 + 2)).toFixed(2);
    }

    get resultMixed1M2F(): string {
      if (this.input === null) return '—';
      //((1 * (this.input + 71) / 16.2) + (2 * (this.input + 33) / 16.2)) / (1 + 2)
      return (((2 * (this.input + 71) / 16.2) + (1 * (this.input + 33) / 16.2)) / (2 + 1)).toFixed(2);
    }
  }
