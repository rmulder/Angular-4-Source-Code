import { AuthService } from './auth.service';
import { Router, RouterStateSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(
    private route: Router,
    private authService: AuthService,
  ) { }

  canActivate(route, state : RouterStateSnapshot){
    if(this.authService.isLoggedIn() && this.authService.userDetails.admin === true) return true;
    this.route.navigate(["/login"], { queryParams : { returnUrl : state.url }});
    return false;
  }

}
