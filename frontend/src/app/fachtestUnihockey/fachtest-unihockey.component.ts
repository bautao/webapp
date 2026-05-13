import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fachtest-unihockey',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div style="padding:2rem">
      <a routerLink="/">← Back</a>
      <h1>Fachtest Unihockey</h1>
      <p>Coming soon.</p>
    </div>
  `
})
export class FachtestUnihockeyComponent {}
