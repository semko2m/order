import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFormComponent } from './components/input-form/input-form.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import {OrderDetailsComponent} from './components/order-history/order-details/order-details.component';
import {ReactiveFormsModule} from '@angular/forms';
import { OneOrderComponent } from './components/order-history/one-order/one-order.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [InputFormComponent, OrderHistoryComponent, OrderDetailsComponent, OneOrderComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class OrderModule { }
