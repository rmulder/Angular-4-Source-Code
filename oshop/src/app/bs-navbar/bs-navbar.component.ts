import { Observable } from 'rxjs/Observable';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { ShoppingCartService } from 'shared/models/shopping-cart.service';
import { Router } from '@angular/router';
import { AppUser } from 'shared/models/app-user';
import { AuthService } from 'shared/models/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  appUser: AppUser;
  cart$: Observable<ShoppingCart>;
  shoppingCartItemCount: number;

  constructor(public auth: AuthService, private router: Router,
  private shoppingCartService: ShoppingCartService) {
  }

  async ngOnInit() {
    this.auth.appUser$.subscribe(appUser => {
      this.appUser = appUser;
    });
    this.cart$ = await this.shoppingCartService.getCart();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
