import { map } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {
  constructor(private db: AngularFireDatabase) { }

  getCategories() {
    return this.db.list('/categories', ref => ref.orderByChild('name')).snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => ({ key: a.key, ...a.payload.val() }))
        )
      );
  }
}
