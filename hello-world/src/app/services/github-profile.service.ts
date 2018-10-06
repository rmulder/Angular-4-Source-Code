import { DataService } from './data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GithubProfileService extends DataService {

  constructor(http: Http) {
    super('https://api.github.com/users', http);
  }
}
