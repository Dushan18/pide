import { Routes } from '@angular/router';

export default [
    {
        path: '',
        loadComponent: () => import('./sign-in/sign-in.component'),
    },

] as Routes;