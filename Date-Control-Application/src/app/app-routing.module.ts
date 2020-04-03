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
  },
  {
    path: 'dairy',
    loadChildren: () => import('./dairy/dairy.module').then( m => m.DairyPageModule)
  },
  {
    path: 'cereal-muesli',
    loadChildren: () => import('./cereal-muesli/cereal-muesli.module').then( m => m.CerealMuesliPageModule)
  },
  {
    path: 'medicines',
    loadChildren: () => import('./medicines/medicines.module').then( m => m.MedicinesPageModule)
  },
  {
    path: 'frozen',
    loadChildren: () => import('./frozen/frozen.module').then( m => m.FrozenPageModule)
  },
  {
    path: 'misc-other',
    loadChildren: () => import('./misc-other/misc-other.module').then( m => m.MiscOtherPageModule)
  },
  {
    path: 'update-bc/:id',
    loadChildren: () => import('./update-pages/update-bc/update-bc.module').then( m => m.UpdateBcPageModule)
  },
  {
    path: 'update-cm/:id',
    loadChildren: () => import('./update-pages/update-cm/update-cm.module').then( m => m.UpdateCmPageModule)
  },
  {
    path: 'update-cc/:id',
    loadChildren: () => import('./update-pages/update-cc/update-cc.module').then( m => m.UpdateCcPageModule)
  },
  {
    path: 'update-dairy/:id',
    loadChildren: () => import('./update-pages/update-dairy/update-dairy.module').then( m => m.UpdateDairyPageModule)
  },
  {
    path: 'update-ds/:id',
    loadChildren: () => import('./update-pages/update-ds/update-ds.module').then( m => m.UpdateDsPageModule)
  },
  {
    path: 'update-frozen/:id',
    loadChildren: () => import('./update-pages/update-frozen/update-frozen.module').then( m => m.UpdateFrozenPageModule)
  },
  {
    path: 'update-meats/:id',
    loadChildren: () => import('./update-pages/update-meats/update-meats.module').then( m => m.UpdateMeatsPageModule)
  },
  {
    path: 'update-med/:id',
    loadChildren: () => import('./update-pages/update-med/update-med.module').then( m => m.UpdateMedPageModule)
  },
  {
    path: 'update-minerals/:id',
    loadChildren: () => import('./update-pages/update-minerals/update-minerals.module').then( m => m.UpdateMineralsPageModule)
  },
  {
    path: 'update-misc/:id',
    loadChildren: () => import('./update-pages/update-misc/update-misc.module').then( m => m.UpdateMiscPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
