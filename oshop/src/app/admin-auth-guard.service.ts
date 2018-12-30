import { AppUser } from 'shared/models/app-user';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { UserService } from 'shared/models/user.service';
import { AuthService } from 'shared/models/auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AdminAuthGuardService implements CanActivate {

constructor(private auth: AuthService, private userService: UserService) { }

canActivate(): Observable<boolean> {
  return this.auth.user$.pipe(
  switchMap(user => this.userService.get(user.uid).valueChanges()),
  map(appUser => appUser.isAdmin));
}
}
