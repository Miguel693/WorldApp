import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapModule } from './map/map.module';
import { isAdminGuard } from './guards/is-admin.guard';
import { isAuthenticatedGuard } from './guards/is-authenticated.guard';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then( module => module.AuthModule) },
  { path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( module => module.DashboardModule),
    canActivate: [isAuthenticatedGuard],
  },
  { path: 'map', loadChildren: () => import('./map/map.module').then( module => module.MapModule) },
  { path: '**', redirectTo: 'auth' } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
