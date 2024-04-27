import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../_service/auth.service';
import { inject } from '@angular/core';

export const hasRoleGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLogged()) {
    let routeRoles = route.data['roles'];
    console.log(routeRoles);
    if (routeRoles == "*") return true;
    let authorized: boolean = false;

    console.log("c'est moi"+routeRoles);
    
      let hasRole: boolean = authService.hasRole(routeRoles);
      if (hasRole) {
         authorized = true;
      }
    
    console.log("auth guard is called");
    if (authorized == false) alert("Not Authorized");
    return authorized;
  } else{
    router.navigate(["/login"]);
    return false;
  }
};
