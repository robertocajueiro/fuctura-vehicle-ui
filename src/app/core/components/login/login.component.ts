import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationLogin } from 'src/app/shared/models/authentication-login';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  private emailFormControl: FormControl = new FormControl('', [
    Validators.email,
    Validators.required
  ]);

  public loginForm: FormGroup = new FormGroup({
    email: this.emailFormControl,
    password: new FormControl('', [Validators.minLength(6), Validators.required]),
  });

  constructor(private authenticationService: AuthenticationService) {

  }

  public getEmailErrorMessage(): string {

    if (this.loginForm.controls['email'].hasError('required')) {
      return "E-mail é obrigatorio"
    }

    if (this.loginForm.controls['email'].hasError('email')) {
      return "Precisa ser do tipo E-mail no formato xpto@provider.com"
    }

    return ""
  }
  public getPasswordErrorMessage(): string {
    if (this.loginForm.controls['password'].hasError('required')) {
      return "Senha é obrigatoria"
    }

    if (this.loginForm.controls['password'].hasError('minlength')) {
      return "Tamanho de 6 caracteres minimos"
    }

    return ""
  }

  public isFormDisabled(): boolean {
    return this.loginForm.invalid
  }

  public submitForm(): void {
    const authenticationLogin: AuthenticationLogin = this.loginForm.value
    this.authenticationService.login(authenticationLogin)
  }


  // PRIMEIRA IMPLEMENTACAO
  // public getEmailErrorMessage(): string {
  //   if (this.email.hasError('required')) {
  //     return "E-mail é obrigatorio"
  //   }

  //   if (this.email.hasError('email')) {
  //     return "Precisa ser do tipo E-mail no formato xpto@provider.com"
  //   }

  //   return ""
  // }
  // public getPasswordErrorMessage(): string {
  //   if (this.password.hasError('required')) {
  //     return "Senha é obrigatoria"
  //   }

  //   if (this.password.hasError('minlength')) {
  //     return "Tamanho de 6 caracteres minimos"
  //   }

  //   return ""
  // }

  // public isFormDisabled(): boolean {
  //   return this.email.invalid || this.password.invalid
  // }
}

