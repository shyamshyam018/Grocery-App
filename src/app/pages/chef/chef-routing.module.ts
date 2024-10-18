import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChefDashboardComponent } from './dashboard/dashboard.component';
import { CreateListComponent } from './create-list/create-list.component';
import { GenerateReceiptComponent } from './generate-receipt/generate-receipt.component';

const routes: Routes = [
  { path: 'dashboard', component: ChefDashboardComponent },
  { path: 'create-list', component: CreateListComponent },
  { path: 'generate-receipt', component: GenerateReceiptComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChefRoutingModule { }
