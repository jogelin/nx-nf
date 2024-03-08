import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  selector: 'nx-nf-root',
  template: `
    <div
      class="container mx-auto mt-1 divide-y-4 divide-black divide-dashed border-4 border-black border-dashed"
    >
      <nx-nf-header></nx-nf-header>
      <div class="p-1">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: ``,
})
export class AppComponent {
  title = 'host';
}
