import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  selector: 'nx-nf-login-menu',
  template: `
    <a class="text-neutral-500 hover:text-neutral-600 focus:text-neutral-600 [&.active]:text-black/80" routerLink="/login" routerLinkActive="active">Login</a>
  `,
  styles: ``,
})
export class LoginMenuComponent {}
