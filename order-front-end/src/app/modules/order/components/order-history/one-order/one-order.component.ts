import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Order} from '../../../models/order.model';
import {OrderService} from '../../../services/order.service';
import {ActivatedRoute} from '@angular/router';
import {Detail} from '../../../models/detail.model';

@Component({
  selector: 'app-one-order',
  templateUrl: './one-order.component.html',
  styleUrls: ['./one-order.component.scss']
})
export class OneOrderComponent implements OnInit {
  @Input() order: Order;

  constructor() { }

  ngOnInit(): void {
  }


}
