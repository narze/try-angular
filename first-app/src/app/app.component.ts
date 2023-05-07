import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [HomeComponent, CounterComponent, RouterModule],
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img
            class="brand-logo"
            src="/assets/logo.svg"
            alt="logo"
            aria-hidden="true"
          />
        </header>
      </a>
      <section class="content">
        <app-counter></app-counter>
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
