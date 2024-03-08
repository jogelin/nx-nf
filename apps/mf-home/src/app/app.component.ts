import { Component } from '@angular/core';
import { HeroComponent } from './hero.component';

@Component({
  standalone: true,
  imports: [HeroComponent],
  selector: 'nx-nf-root',
  template: `
    <div class="border-4 border-primary border-dashed">
      <nx-nf-hero></nx-nf-hero>
    </div>
  `,
  styles: ``,
})
export class AppComponent {}
