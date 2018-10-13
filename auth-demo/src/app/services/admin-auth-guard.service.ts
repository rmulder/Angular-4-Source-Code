import { AuthService } from './auth.service';
import { Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AdminAuthGuardService implements CanActivate{

  constructor(
    private router : Router,
    private authService : AuthService
  ) { }

  canActivate(){
    let user = this.authService.userDetails;
      if(user && user.admin) return true;
    this.router.navigate(['/no-access']);
  }
}
