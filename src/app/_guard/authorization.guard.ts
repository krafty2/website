import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../_service/auth.service';
import { inject } from '@angular/core';

export const authorizationGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLogged()) {
    //let routeRoles = snapshot.data['roles'];
    //if (routeRoles == "*") return true;
    //let authorized: boolean = false;

    //console.log(routeRoles);
    
      //let hasRole: boolean = authService.hasRole(routeRoles);
    //   if (hasRole) {
    //     authorized = true;
        
    //   }
    
    // console.log("auth guard is called");
    // if (authorized == false) alert("Not Authorized");
    return true;
  } else{
    router.navigate(["/login"]);
    return false;
  }

};
