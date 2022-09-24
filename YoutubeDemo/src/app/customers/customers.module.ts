import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';



@NgModule({
  declarations: [
    CustomersComponent,
    AddCustomerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomersModule { }
