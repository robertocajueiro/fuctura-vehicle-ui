import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public appName = "Fuctura Veicular UI"

  public isAuthenticated: boolean = false

  constructor(private authenticationService: AuthenticationService) {
    this.isAuthenticated = this.authenticationService.getIsAuthenticated()
  }
}
