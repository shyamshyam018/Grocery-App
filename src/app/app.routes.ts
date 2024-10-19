import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterOutlet , RouterLink , RouterLinkActive  } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ChefComponent } from './pages/chef/chef.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'admin',
    component: AdminComponent, 
    loadChildren: () => import('./pages/admin/admin-routing.module').then(m => m.AdminRoutingModule)
  },
  {
    path: 'chef',
    component: ChefComponent,
    loadChildren: () => import('./pages/chef/chef-routing.module').then(m => m.ChefRoutingModule)
  },
  { path: '**', redirectTo: '' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule,RouterOutlet, RouterLink, RouterLinkActive],
  exports: [RouterModule]
})
export class AppRoutingModule { }
