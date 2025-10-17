import { Routes } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Mainsito } from './views/mainsito/mainsito';

export const routes: Routes = [
    { path: 'navbar', component: Navbar},
    { path: '', component: Mainsito},
];
