import { Observable } from 'rxjs/Observable';
import { AppUser } from 'shared/models/app-user';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';

import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) {
  }

  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).
    update({
      name : user.displayName,
      email: user.email
    });
  }

  get(uid: string): AngularFireObject<AppUser> {
    console.log(this.db.object('/users/' + uid));
    return this.db.object('/users/' + uid);
  }
}
