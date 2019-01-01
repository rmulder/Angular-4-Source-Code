import { OrderService } from './../shared/services/order.service';
import { AuthService } from './../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent {
  orders$;

  constructor(
    private authService: AuthService,
    private orderService: OrderService) {

    this.orders$ = authService.user$.switchMap(u =>
      orderService.getOrderByUser(u.uid)
    );
  }
}
