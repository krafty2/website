import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isLoggetIn: boolean = false;

  redirecturl!: string;

  login(name: string, password: string): Observable<boolean> {
    let isLoggetIn = false;
    if (name === 'gerant' && password === 'gerant')
      isLoggetIn = name == 'gerant' && password == 'gerant';

    if (name === 'distributeur' && password === 'distributeur')
      isLoggetIn = name == 'distributeur' && password == 'distributeur';

    localStorage.setItem('isLogged', this.isLoggetIn.toString());

    return of(isLoggetIn).pipe(
      delay(1000),
      tap((isLoggetIn: boolean) => (this.isLoggetIn = isLoggetIn))
    );
  }

  saveValue() {
    localStorage.setItem('isLogged', this.isLoggetIn.toString());
  }

  getValue() {
    localStorage.getItem('isLogged');
  }

  isLogged(): boolean {
    const token = localStorage.getItem('isLogged');
    return !!token;
  }

  logout() {
    localStorage.removeItem('isLogged');
    window.location.reload();
  }
}
