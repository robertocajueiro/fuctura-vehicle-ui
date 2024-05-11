import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  public email: FormControl = new FormControl('',
  [ Validators.email,
    Validators.required
  ]);

  public password: FormControl = new FormControl('', Validators.minLength(6));

  getEmailErrorMessage(): string {
    if(this.email.hasError('required')) {
      return "E-mail obrigatório!"
    }

    if(this.email.hasError('email')) {
      return "Precisa ser do tipo E-mail no formato pat@localhost.com"
    }

    return ""
  }
  getPasswordErrorMessage(): string {

    if(this.password.hasError('required')) {
      return "Senha obrigatório!"
    }

    if(this.password.hasError('minlength')) {
      return "Tamanho mínimo de 6 caracteres"
    }

    return ""
  }

  public isFormDisabled(): boolean {
    return this.email.invalid || this.password.invalid

  }
}
