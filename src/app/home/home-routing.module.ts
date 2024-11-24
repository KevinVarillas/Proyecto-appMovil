import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'principal',
        loadComponent: () => import('../principal/principal.page').then(m => m.PrincipalPage),
      },
      {
        path: 'explorar',
        loadComponent: () => import('../explorar/explorar.page').then(m => m.ExplorarPage),
      },
      {
        path: 'rutas',
        loadComponent: () => import('../rutas/rutas.page').then(m => m.RutasPage),
      },
      {
        path: 'descargas',
        loadComponent: () => import('../descargas/descargas.page').then(m => m.DescargasPage),
      },
      {
        path: 'carrito',
        loadComponent: () => import('../carrito/carrito.page').then( m => m.CarritoPage)
      },
      {
        path: 'perfil',
        loadComponent: () => import('../perfil/perfil.page').then(m => m.PerfilPage),
      },
      {
        path: '',
        redirectTo: 'principal', // Redirige a 'principal' por defecto
        pathMatch: 'full'
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
