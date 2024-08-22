import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
    path: '',
    loadComponent: () => import('./components/pages/home/home.component').then(c => c.HomeComponent)
    },

    {
        path: 'calendario',
        canActivate: [authGuard],
        loadComponent: () =>import('./components/pages/calendar/calendar.component').then(c=>c.CalendarComponent)
    },

    {
        path: '**',
        redirectTo: ''
    }
   
];
