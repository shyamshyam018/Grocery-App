// src/app/pages/chef/chef.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChefRoutingModule } from './chef-routing.module';
import { ChefComponent } from './chef.component';
import { ChefDashboardComponent } from './dashboard/dashboard.component';
import { CreateListComponent } from './create-list/create-list.component';
import { GenerateReceiptComponent } from './generate-receipt/generate-receipt.component';

@NgModule({
  declarations: [
    ChefDashboardComponent,
  ],
  imports: [
    CommonModule,
    ChefRoutingModule,
    CreateListComponent,
    GenerateReceiptComponent,
    ChefComponent,
  ]
})
export class ChefModule {}
