import { Component, Type } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { NgComponentOutlet, NgIf } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf, NgComponentOutlet],
  selector: 'nx-nf-header',
  template: `
    <header class="flex w-full items-center justify-between p-2 border border-black">
      <div class="flex-grow basis-[100%] items-center p-2">
        <a class="pr-4 text-neutral-500 hover:text-neutral-600 focus:text-neutral-600 [&.active]:text-black/80" routerLink="/home" routerLinkActive="active"
          >Home</a
        >
        <a class="text-neutral-500 hover:text-neutral-600 focus:text-neutral-600 [&.active]:text-black/80" routerLink="/admin" routerLinkActive="active"
          >Admin</a
        >
      </div>
      <div class="flex items-center bg-green-600 border border-black py-0.5 px-2">
        <ng-container *ngIf="LoginMenuComponent">
          <span class="text-white px-4 py-1 mr-6 bg-neutral-800 rounded">Parcel</span>
          <div *ngComponentOutlet="LoginMenuComponent"></div>
        </ng-container>
      </div>
    </header>
  `,
  styles: ``,
})
export class HeaderComponent {
  LoginMenuComponent?: Type<unknown>;
  async ngOnInit() {
    this.LoginMenuComponent = (await loadRemoteModule('mfLogin', 'loginMenuComponent')).LoginMenuComponent;
  }
}
