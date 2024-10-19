import { NgModule } from '@angular/core';
import { AdminDashboardComponent } from './dashboard/dashboard.component'; 
import { EditStockComponent } from './edit-stock/edit-stock.component';
import { GenerateBillComponent } from './generate-bill/generate-bill.component';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet , RouterLink , RouterLinkActive  } from '@angular/router';

@NgModule({
  declarations: [
    
  ],
  imports: [
    AdminDashboardComponent,RouterOutlet,RouterModule , RouterLink , RouterLinkActive , CommonModule,
    RouterModule.forChild([
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'edit-stock', component: EditStockComponent },
      { path: 'generate-bill', component: GenerateBillComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' } // Default route
    ])
  ]
})
export class AdminModule { }
