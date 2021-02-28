import {Component, OnDestroy, OnInit} from '@angular/core';
import {Detail} from '../../../models/detail.model';
import {OrderService} from '../../../services/order.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit, OnDestroy {
  public details: Detail[] = [];
  private id;
  private sub: any;

  constructor(private orderService: OrderService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params.id; // (+) converts string 'id' to a number

      this.orderService.getOrder(this.id).subscribe((details) => {
        this.details = details;
      });

    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
