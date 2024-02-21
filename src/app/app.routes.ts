import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'lazy-loaded',
        loadChildren: () => 
            import ('./lazy-loaded/lazy-loaded.routes').then((m)=> m.routes)
    },
    {
        path: 'defer',
        loadChildren: () => 
            import ('./defer/defer.routes').then((m)=> m.routes)
    },
];
