import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'nx-nf-header',
  template: `
    <nav
      class="relative flex w-full items-center justify-between bg-white py-2 shadow-sm shadow-neutral-700/10 lg:flex-wrap lg:justify-start"
    >
      <div class="flex w-full flex-wrap items-center justify-between px-6">
        <div class="flex-grow basis-[100%] items-center lg:!flex lg:basis-auto">
          <ul class="mr-auto lg:flex lg:flex-row">
            <li>
              <a
                class="block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 disabled:text-black/30 [&.active]:text-black/80"
                routerLink="/home"
                routerLinkActive="active"
                >Home</a
              >
            </li>
            <li>
              <a
                class="block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 disabled:text-black/30 lg:px-2 [&.active]:text-black/80"
                routerLink="/my-account"
                routerLinkActive="active"
                >My Account</a
              >
            </li>
          </ul>
        </div>

        <div class="my-1 flex items-center lg:my-0 lg:ml-auto">
          <a
            class="block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 disabled:text-black/30 lg:px-2 [&.active]:text-black/80"
            routerLink="/login"
            routerLinkActive="active"
            >Login</a
          >
        </div>
      </div>
    </nav>
  `,
  styles: ``,
})
export class HeaderComponent {}
