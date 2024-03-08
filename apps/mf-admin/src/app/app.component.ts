import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'nx-nf-root',
  template: ` <div class="border-4 border-primary border-dashed">Admin Micro Frontend</div> `,
  styles: ``,
})
export class AppComponent {
  email = 'admin@nx-nf.com';
  password = 'qwerty';
}
