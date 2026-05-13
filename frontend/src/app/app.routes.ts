import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FachtestAllroundComponent } from './fachtest-allround/fachtest-allround.component';
import { FachtestUnihockeyComponent } from './fachtestUnihockey/fachtest-unihockey.component';
import { StsComponent } from './sts/sts.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'fachtest-allround', component: FachtestAllroundComponent },
    { path: 'fachtest-unihockey', component: FachtestUnihockeyComponent },
    { path: 'sts', component: StsComponent },
    { path: '**', redirectTo: '' }
  ];
