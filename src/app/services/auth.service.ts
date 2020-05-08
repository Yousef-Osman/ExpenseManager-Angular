import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rootUrl: string = "http://localhost:44392/auth/"
  constructor(private http: HttpClient) { }

  register(user){
    return this.http.post(this.rootUrl + "register", user);
  }

  get getUserName(){
    return localStorage.getItem('userName');
  }

  get isAuthenticated(){
    return !!localStorage.getItem('token_value');

    // var exists = (localStorage.getItem('token_value') != null)? true :false;
    // return exists;
  }

  logout(){
    localStorage.removeItem('userName');
    localStorage.removeItem('token_value');
  }

  login(user){
    return this.http.post(this.rootUrl + 'login', user);
  }
}
