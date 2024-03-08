import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  selector: 'nx-nf-root',
  template: `
    <div class="container mx-auto p-4 border-x border-black bg-yellow-300 h-screen">
      <div class="text-center mb-4">
        <span class="text-white px-4 py-1 text-2xl bg-neutral-800 rounded">Host</span>
      </div>
      <nx-nf-header></nx-nf-header>
      <div class="mt-4 h-5/6 border border-black bg-blue-500">
        <div class="text-center mt-4">
          <span class="text-white px-4 py-1 text-2xl bg-neutral-800 rounded">Micro Frontend</span>
        </div>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: ``,
})
export class AppComponent {
  title = 'host';
}
