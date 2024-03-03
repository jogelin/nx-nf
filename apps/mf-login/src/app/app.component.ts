import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'nx-nf-root',
  template: `login`,
  styles: ``,
})
export class AppComponent {
  title = 'mf-login';
}
