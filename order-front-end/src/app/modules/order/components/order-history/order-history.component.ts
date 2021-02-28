import {Component, OnDestroy, OnInit} from '@angular/core';
import {Order} from '../../models/order.model';
import {OrderService} from '../../services/order.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit, OnDestroy {

  public orders: Order[] = [];
  public email;
  private sub: any;


  constructor(private orderService: OrderService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.email = params.email; // (+) converts string 'id' to a number
      console.log(this.email);

      this.orderService.getOrders(this.email).subscribe((orders) => {
        this.orders = orders;
      });

    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
