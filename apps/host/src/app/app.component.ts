import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'nx-nf-root',
  template: `<nx-nf-nx-welcome></nx-nf-nx-welcome>
    <router-outlet></router-outlet>`,
  styles: ``,
})
export class AppComponent {
  title = 'host';
}
