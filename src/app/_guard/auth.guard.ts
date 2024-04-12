import { inject, Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../_service/auth.service';

@Injectable({
  providedIn: 'root',
})
class PermissionsService {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(): boolean {
    if (this.authService.isLogged() === true) return true;

    this.router.navigate([`login`]);
    return false;
  }
}

export const authGuard: CanActivateFn = (route, state) => {
  console.log('Le guard a bien ete appele');
  return inject(PermissionsService).canActivate();
};
