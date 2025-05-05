import { Routes } from '@angular/router';

export default [
    {
        path: '',
        loadComponent: () => import('./home-page/home-page.component'),
    },

] as Routes;