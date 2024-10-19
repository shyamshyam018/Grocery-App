// src/app/pages/admin/admin.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './dashboard/dashboard.component';
import { EditStockComponent } from './edit-stock/edit-stock.component';
import { GenerateBillComponent } from './generate-bill/generate-bill.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminComponent,
    AdminDashboardComponent,
    EditStockComponent,
    GenerateBillComponent
  ],
  declarations: [
    
  ]
})
export class AdminModule {}
