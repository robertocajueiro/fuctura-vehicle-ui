import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import Swal from 'sweetalert2';

export const authenticatorGuard: CanActivateFn = (route, state) => {

  const router: Router = inject(Router);

  const isAuthenticated = false;

  if (isAuthenticated) {
    return true;
  }

  Swal.fire('Sessão expirada', 'Favor realizar novo Login', 'error');

  // primeira implementacao
  // router.navigate(['/entrar'])
  // return false

  // segunda implementacao
  return router.createUrlTree(['/entrar']);
};
