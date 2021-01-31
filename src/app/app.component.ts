import { Component, OnInit } from '@angular/core';
import { AuthService } from './guard/auth.service';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pwa-ghp-ng';

    constructor(
        private authService: AuthService
) { }

  ngOnInit() {
  }
}
