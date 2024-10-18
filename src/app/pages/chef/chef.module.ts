import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChefDashboardComponent } from './dashboard/dashboard.component'; // Ensure this path is correct
import { CreateListComponent } from './create-list/create-list.component';
import { GenerateReceiptComponent } from './generate-receipt/generate-receipt.component';

@NgModule({
  declarations: [
    ChefDashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'dashboard', component: ChefDashboardComponent },
      { path: 'create-list', component: CreateListComponent },
      { path: 'generate-receipt', component: GenerateReceiptComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' } // Default route
    ])
  ]
})
export class ChefModule { }
