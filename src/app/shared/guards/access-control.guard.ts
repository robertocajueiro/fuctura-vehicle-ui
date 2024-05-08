import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import Swal from "sweetalert2";


//@Injectable()
@Injectable({
  providedIn: 'root'
}
)
export class AccessControlGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const hasAccess = true;
    if ( hasAccess) {
      return true;
    }
    Swal.fire('Sessão Expirada', 'Favor realizar novo Login', 'info');
    return this.router.createUrlTree(['/entrar']);
  }
}
