import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DettagliComponent } from './dettagli/dettagli.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'dettagli/:id',
        component:DettagliComponent
    }
];
