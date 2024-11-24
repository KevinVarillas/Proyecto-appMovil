import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


export const  routes: Routes = [
  {
    path: '',
    redirectTo: 'home', // Asegúrate de redirigir a 'home'
    pathMatch: 'full'
  },
  {
    path: 'home', // Tu ruta de inicio
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'main',
    loadComponent: () => import('./main/main.page').then(m => m.MainPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./perfil/perfil.page').then(m => m.PerfilPage)
  },
  {
    path: 'suscripcion',
    loadComponent: () => import('./suscripcion/suscripcion.page').then(m => m.SuscripcionPage)
  },
  {
    path: 'signup',
    loadComponent: () => import('./signup/signup.page').then(m => m.SignupPage)
  },
  {
    path: 'reset-password',
    loadComponent: () => import('./reset-password/reset-password.page').then(m => m.ResetPasswordPage)
  },
  {
    path: 'infoescu',
    loadComponent: () => import('./infoescu/infoescu.page').then( m => m.InfoescuPage)
  },
  {
    path: 'desarrolloweb',
    loadComponent: () => import('./desarrolloweb/desarrolloweb.page').then( m => m.DesarrollowebPage)
  },
  {
    path: 'appmovil',
    loadComponent: () => import('./appmovil/appmovil.page').then( m => m.AppmovilPage)
  },
  {
    path: 'tarjeta',
    loadComponent: () => import('./tarjeta/tarjeta.page').then( m => m.TarjetaPage)
  },
  {
    path: 'carrito',
    loadComponent: () => import('./carrito/carrito.page').then( m => m.CarritoPage)
  },
  {
    path: 'metodopago',
    loadComponent: () => import('./metodopago/metodopago.page').then( m => m.MetodopagoPage)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
