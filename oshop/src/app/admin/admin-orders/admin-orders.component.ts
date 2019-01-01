import { OrderService } from './../../shared/services/order.service';
import { Order } from 'shared/models/order';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent {
  orders;

  constructor(private orderService: OrderService) {
    orderService.getOrders().valueChanges()
    .subscribe(order => this.orders = order);
  }
}
