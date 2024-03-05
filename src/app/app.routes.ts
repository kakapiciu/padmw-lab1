import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'calc',
        loadComponent: () => import('./components/calc/calc.component')
            .then(m => m.CalcComponent)
    },
    {
        path: 'country-list',
        loadComponent: () => import('./components/country-list/country-list.component')
            .then(m => m.CountryListComponent)
    },
];
