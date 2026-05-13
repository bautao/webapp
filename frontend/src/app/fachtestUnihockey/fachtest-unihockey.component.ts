import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fachtest-unihockey',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './fachtest-unihockey.component.html',
  styleUrl: './fachtest-unihockey.component.scss'
})

export class FachtestUnihockeyComponent {

      input: number | null = null;
      input2: number | null = null;

      get result(): string {
        if (this.input === null) return '—';
        return ((this.input - 12) / 6.2).toFixed(2);
      }

      get resultMen(): string {
        if (this.input === null) return '—';
        return ((this.input - 20) / 7.5).toFixed(2);
      }

      get resultMixed2M1F(): string {
        if (this.input === null) return '—';
        return (((1 * (this.input - 12) / 6.2) + (2 * (this.input - 20) / 7.5)) / (3)).toFixed(2);
      }

      get resultMixed1M2F(): string {
        if (this.input === null) return '—';
        return (((2 * (this.input - 12) / 6.2) + (1 * (this.input - 20) / 7.5)) / (3)).toFixed(2);
      }

      get result2(): string {
        if (this.input2 === null) return '—';
        return ((this.input2 - 18) / 13.8).toFixed(2);
      }

      get resultMen2(): string {
        if (this.input2 === null) return '—';
        return ((this.input2 - 7) / 19.1).toFixed(2);
      }

      get resultMixed5M1F2(): string {
        if (this.input2 === null) return '—';
        return (((1 * (this.input2 - 18) / 13.8) + (5 * (this.input2 - 7) / 19.1)) / (6)).toFixed(2);
      }

      get resultMixed4M2F2(): string {
        if (this.input2 === null) return '—';
        return (((2 * (this.input2 - 18) / 13.8) + (4 * (this.input2 - 7) / 19.1)) / (6)).toFixed(2);
      }

      get resultMixed3M3F2(): string {
        if (this.input2 === null) return '—';
        return (((3 * (this.input2 - 18) / 13.8) + (3 * (this.input2 - 7) / 19.1)) / (6)).toFixed(2);
      }

      get resultMixed2M4F2(): string {
        if (this.input2 === null) return '—';
        return (((4 * (this.input2 - 18) / 13.8) + (2 * (this.input2 - 7) / 19.1)) / (6)).toFixed(2);
      }

      get resultMixed1M5F2(): string {
        if (this.input2 === null) return '—';
        return (((5 * (this.input2 - 18) / 13.8) + (1 * (this.input2 - 7) / 19.1)) / (6)).toFixed(2);
    }
  }
