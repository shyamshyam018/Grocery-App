import { NgModule } from '@angular/core';
import { AdminDashboardComponent } from './dashboard/dashboard.component';
import { EditStockComponent } from './edit-stock/edit-stock.component';
import { GenerateBillComponent } from './generate-bill/generate-bill.component';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet , RouterLink , RouterLinkActive , Routes  } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', component: AdminDashboardComponent },
  { path: 'edit-stock', component: EditStockComponent },
  { path: 'generate-bill', component: GenerateBillComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule,RouterOutlet,RouterModule , RouterLink , RouterLinkActive],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
