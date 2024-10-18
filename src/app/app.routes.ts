import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterOutlet , RouterLink , RouterLinkActive  } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { AdminDashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { EditStockComponent } from './pages/admin/edit-stock/edit-stock.component';
import { GenerateBillComponent } from './pages/admin/generate-bill/generate-bill.component';
import { ChefDashboardComponent } from './pages/chef/dashboard/dashboard.component';
import { CreateListComponent } from './pages/chef/create-list/create-list.component';
import { GenerateReceiptComponent } from './pages/chef/generate-receipt/generate-receipt.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'admin',
    children: [
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'edit-stock', component: EditStockComponent },
      { path: 'generate-bill', component: GenerateBillComponent },
    ]
  },
  {
    path: 'chef',
    children: [
      { path: 'dashboard', component: ChefDashboardComponent },
      { path: 'create-list', component: CreateListComponent },
      { path: 'generate-receipt', component: GenerateReceiptComponent },
    ]
  },
  { path: '**', redirectTo: '' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule,RouterOutlet, RouterLink, RouterLinkActive],
  exports: [RouterModule]
})
export class AppRoutingModule { }
