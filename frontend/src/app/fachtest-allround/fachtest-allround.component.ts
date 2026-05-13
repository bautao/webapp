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
    input2: number | null = null;

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
      return (((2 * (this.input + 71) / 16.2) + (1 * (this.input + 33) / 16.2)) / (2 + 1)).toFixed(2);
    }

    get result2(): string {
      if (this.input2 === null) return '—';
      return ((this.input2 - 46) / 10.6).toFixed(2);
    }

    get resultMen2(): string {
      if (this.input2 === null) return '—';
      return ((this.input2 - 75) / 10.9).toFixed(2);
    }

    get resultMixed2M1F2(): string {
      if (this.input2 === null) return '—';
      return (((1 * (this.input2 - 46) / 10.6) + (2 * (this.input2 - 75) / 10.9)) / (1 + 2)).toFixed(2);
    }

    get resultMixed1M2F2(): string {
      if (this.input2 === null) return '—';
      return (((2 * (this.input2 - 46) / 10.6) + (1 * (this.input2 - 75) / 10.9)) / (2 + 1)).toFixed(2);
    }
  }
