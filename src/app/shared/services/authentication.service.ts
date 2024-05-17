import { ApplicationHttpService } from './application-http.service';
import { AuthenticationLogin } from './../models/authentication-login';
import { Injectable } from '@angular/core';
import { ApplicationService } from './application.service';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private isAuthenticated: boolean = false

  constructor(
    private applicationService: ApplicationService,
    private applicationHttpService: ApplicationHttpService,
    private router: Router

  ) {
    if (this.applicationService.getToken()) {
      this.isAuthenticated = true
    }
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated
  }

  public login(authenticationLogin: AuthenticationLogin): void {
    this.applicationHttpService.post<{ accessToken: string}> (
      '/login',
      authenticationLogin
    ).pipe(
      map(HttpResponse => HttpResponse.body)
    ).subscribe(bodyResponse => {
    console.log(bodyResponse)
  })
 }
}
