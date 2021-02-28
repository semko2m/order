import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InputFormComponent} from './modules/order/components/input-form/input-form.component';
import {OrderHistoryComponent} from './modules/order/components/order-history/order-history.component';
import {OrderDetailsComponent} from './modules/order/components/order-history/order-details/order-details.component';

const routes: Routes = [
  {
    path: '',
    component: InputFormComponent
  },
  {
    path: 'orders/:email',
    component: OrderHistoryComponent
  },
  {
    path: 'order/:id',
    component: OrderDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
