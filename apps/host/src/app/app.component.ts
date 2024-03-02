import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'nx-nf-root',
  template: `
    <header class="bg-white">
      <nav
        class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div class="hidden lg:flex lg:gap-x-12">
          <a
            routerLink="/home"
            class="text-sm font-semibold leading-6 text-gray-900"
            >Home</a
          >
          <a
            routerLink="/my-account"
            class="text-sm font-semibold leading-6 text-gray-900"
            >My Account</a
          >
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            routerLink="/login"
            class="text-sm font-semibold leading-6 text-gray-900"
            >Log in <span aria-hidden="true">&rarr;</span></a
          >
        </div>
      </nav>
    </header>

    <router-outlet></router-outlet>
  `,
  styles: ``,
})
export class AppComponent {
  title = 'host';
}
