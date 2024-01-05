import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistroComponent } from './components/registro/registro.component';
import { IniciosesionComponent } from './components/iniciosesion/iniciosesion.component';
import { LibrosComponent } from './components/libros/libros.component';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ActividadesComponent } from './components/actividades/actividades.component';


export const routes: Routes = [
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path: 'inicio', component: InicioComponent},
    {path: 'navbar', component: NavbarComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'iniciosesion', component: IniciosesionComponent},
    {path: 'libros', component: LibrosComponent},
    {path: 'ayuda', component: AyudaComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'actividades', component: ActividadesComponent},
];
