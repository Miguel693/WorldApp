import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapModule } from './map/map.module';
import { isAdminGuard } from './guards/is-admin.guard';
import { isAuthenticatedGuard } from './guards/is-authenticated.guard';
import { isNotAuthenticatedGuard } from './guards/is-not-authenticated.guard';

const routes: Routes = [
  { path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( module => module.AuthModule),
    canActivate: [isNotAuthenticatedGuard],
  },
  { path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( module => module.DashboardModule),
    canActivate: [isAdminGuard],
  },
  { path: 'map',
    loadChildren: () => import('./map/map.module').then( module => module.MapModule),
    canActivate: [isAuthenticatedGuard],
  },
  { path: '**', redirectTo: 'auth' } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
