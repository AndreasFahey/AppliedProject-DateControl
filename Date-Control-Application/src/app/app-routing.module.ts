import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'confectionery-crisps',
    loadChildren: () => import('./confectionery-crisps/confectionery-crisps.module').then( m => m.ConfectioneryCrispsPageModule)
  },
  {
    path: 'minerals',
    loadChildren: () => import('./minerals/minerals.module').then( m => m.MineralsPageModule)
  },
  {
    path: 'biscuits-cakes',
    loadChildren: () => import('./biscuits-cakes/biscuits-cakes.module').then( m => m.BiscuitsCakesPageModule)
  },
  {
    path: 'deli-stock',
    loadChildren: () => import('./deli-stock/deli-stock.module').then( m => m.DeliStockPageModule)
  },
  {
    path: 'meats',
    loadChildren: () => import('./meats/meats.module').then( m => m.MeatsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
