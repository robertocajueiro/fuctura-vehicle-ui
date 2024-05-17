import { Injectable } from '@angular/core';
import { ApplicationState } from '../models/application-state';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  private applicationState: ApplicationState = {
    token: null
  };

  constructor() { }

  public getToken(): string | null {
    return this.applicationState.token
  }

  public setToken(token: string): void {
    localStorage.setItem("token", token)
    this.applicationState.token = token
  }

  public loadToken(): void {
    this.applicationState.token = localStorage.getItem("token")
  }
}

