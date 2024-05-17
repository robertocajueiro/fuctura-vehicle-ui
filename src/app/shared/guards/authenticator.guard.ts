import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthenticationService } from '../services/authentication.service';

export const authenticatorGuard: CanActivateFn = (route, state) => {

  const router: Router = inject(Router);

  const authenticationService: AuthenticationService = inject(AuthenticationService);

  if (authenticationService.getIsAuthenticated()) {
    console.log('Usuário está autenticado na rota ' + route)
    return true;
  }


  Swal.fire('Sessão expirada', 'Favor realizar novo Login', 'error');

  // primeira implementacao
  // router.navigate(['/entrar'])
  // return false

  // segunda implementacao
  return router.createUrlTree(['/entrar']);

};
