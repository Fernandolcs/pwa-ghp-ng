import { Component, OnInit } from '@angular/core';
import { AuthService } from '../guard/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    title = 'pwa-ghp-ng';
    isAuthenticated$:  Observable<boolean>; 

    constructor(
        private authService: AuthService,
        private router: Router,
        ) {

    }

    ngOnInit() {
        this.isAuthenticated$ = this.authService.isAuthenticated();
    }

    async logout() {
      await this.authService.logout();
    }

    async goHome() {
        await this.router.navigate(['/login']);
      }

}
