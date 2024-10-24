import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { CreateListComponent } from './create-list/create-list.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [

  ],
  imports: [
    CartComponent,
    CommonModule,
    FormsModule,
    CreateListComponent 
  ],
  exports: [
    CreateListComponent
  ],
  schemas: [NO_ERRORS_SCHEMA] 
})
export class ChefModule {}
