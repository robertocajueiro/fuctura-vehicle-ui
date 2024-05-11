import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  private emailFormControl: FormControl = new FormControl('', [
    Validators.email,
    Validators.required
  ]);


  public loginForm: FormGroup = new FormGroup({
    email: this.emailFormControl,
    password: new FormControl('', Validators.minLength(6)),
  });

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
}
