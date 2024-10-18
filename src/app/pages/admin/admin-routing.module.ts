import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './dashboard/dashboard.component';
import { EditStockComponent } from './edit-stock/edit-stock.component';
import { GenerateBillComponent } from './generate-bill/generate-bill.component';

const routes: Routes = [
  { path: 'dashboard', component: AdminDashboardComponent },
  { path: 'edit-stock', component: EditStockComponent },
  { path: 'generate-bill', component: GenerateBillComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
