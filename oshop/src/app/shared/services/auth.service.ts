import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { AppUser } from 'shared/models/app-user';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { UserService } from 'shared/services/user.service';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';
@Injectable()
export class AuthService {

  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute,
  private userService: UserService) {
    this.user$ = afAuth.authState;
  }

 login() {
      const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
      localStorage.setItem('returnUrl', returnUrl);
      this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
      this.afAuth.auth.signOut();
  }

  get appUser$(): Observable<AppUser> {
    return this.user$.
      switchMap(user => {
        if (user) {
          return this.userService.get(user.uid).valueChanges();
        }
        return of(null);
      });
  }
}
