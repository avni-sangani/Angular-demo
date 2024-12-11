import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent: () => import('./pages/home/home.component').then((c) => c.HomeComponent)
    },
    {
        path:'admin',
        loadComponent:()=>import('./pages/admin/admin.component').then((c) => c.AdminComponent)
    },
    {
        path:'courses',
        loadComponent:()=>import('./components/courses/courses.component').then((c) => c.CoursesComponent)
    },
    {
        path:'about',
        loadComponent:()=>import('./pages/about/about.component').then((c) => c.AboutComponent)
    }
];