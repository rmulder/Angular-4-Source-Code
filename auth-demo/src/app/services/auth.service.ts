import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  constructor(public http: Http) {
  }

  login(credentials) { 
   return this.http.post('/api/authenticate', 
      JSON.stringify(credentials))
      .map( response =>{
        // console.log(response.json());
        let result = response.json();
        if(result && result.token){
          localStorage.setItem('token',result.token);
          return true;
        }
        return false;
      });
  }

  logout() { 
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    // let jwtHelper  = new JwtHelper;
    // let token = localStorage.getItem('token');

    // if(!token)
    //   return false;
    // let isExpired = jwtHelper.isTokenExpired(token);
    //   return !isExpired;

    // Instead of this we can use gloabal function

    return tokenNotExpired();
  }

  get userDetails(){
    let token = localStorage.getItem('token');
    if (!token) return null;
    return new JwtHelper().decodeToken(token);
  }
}

