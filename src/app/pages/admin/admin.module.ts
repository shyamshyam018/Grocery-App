import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './dashboard/dashboard.component'; 
import { EditStockComponent } from './edit-stock/edit-stock.component';
import { GenerateBillComponent } from './generate-bill/generate-bill.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'edit-stock', component: EditStockComponent },
      { path: 'generate-bill', component: GenerateBillComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' } // Default route
    ])
  ]
})
export class AdminModule { }
