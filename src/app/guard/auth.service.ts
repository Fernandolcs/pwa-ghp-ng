import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private authenticated = new BehaviorSubject<boolean>(false);

    constructor(
        private router: Router
    ) { }

    login() {
        this.authenticated.next(true);
        this.router.navigate(['/']);
    }

    isAuthenticated = () => this.authenticated.asObservable();

    async logout() {
      try {
        this.authenticated.next(false);
        this.router.navigate(['/login']);
      } catch (err) {
        console.error(err);
      }
    }
}
