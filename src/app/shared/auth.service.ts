import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  endpoint: string = 'http://localhost:8080';

  constructor(private http: HttpClient, public router: Router) {}

  // register
  signUp(user: User): Observable<any> {
    return this.http.post(`${this.endpoint}/auth/register`, user);
  }

  // login
  signIn(user: User) {
    return this.http
      .post<any>(`${this.endpoint}/auth/login`, user)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.token);
        this.router.navigate(['user-profile']);
      });
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['log-in']);
    }
  }

  // User profile
  getUserProfile(): Observable<any> {
    return this.http.get(`${this.endpoint}/users/myprofil`)
  }
}
