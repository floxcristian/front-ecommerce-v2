// Angular
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RippleModule,
    StyleClassModule,
    InputTextModule,
    DividerModule,
    ButtonModule,
    InputGroupModule,
  ],
  template: '<router-outlet/>',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'front-ecommerce-v2';
}
