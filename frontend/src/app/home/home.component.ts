import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface AppCard {
  title: string;
  route: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  apps: AppCard[] = [
    { title: 'Fachtest Allround', route: '/fachtest-allround' },
    { title: 'Fachtest Unihockey', route: '/fachtest-unihockey' },
    { title: 'STS', route: '/sts' },
  ];
}
