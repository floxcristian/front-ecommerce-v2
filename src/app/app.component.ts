// Angular
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// PrimeNg
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { PrimeNGConfig } from 'primeng/api';

const PRIME_MODULES = [
  RippleModule,
  StyleClassModule,
  InputTextModule,
  DividerModule,
  ButtonModule,
  InputGroupModule,
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ...PRIME_MODULES],
  template: '<router-outlet/>',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private primeConfig: PrimeNGConfig) {
    this.primeConfig.ripple = true;
  }
}
