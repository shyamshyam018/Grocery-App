import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importing components
import { LandingComponent } from './pages/landing/landing.component';
import { AdminDashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { EditStockComponent } from './pages/admin/edit-stock/edit-stock.component';
import { GenerateBillComponent } from './pages/admin/generate-bill/generate-bill.component';
import { ChefDashboardComponent } from './pages/chef/dashboard/dashboard.component';
import { CreateListComponent } from './pages/chef/create-list/create-list.component';
import { GenerateReceiptComponent } from './pages/chef/generate-receipt/generate-receipt.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
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
  { path: '**', redirectTo: '' } // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
