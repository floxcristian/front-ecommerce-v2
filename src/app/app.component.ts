import { Component } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { HeaderComponent } from './modules/shared/layout/header/header.component';
import { FooterComponent } from './modules/shared/layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RippleModule,
    StyleClassModule,
    InputTextModule,
    DividerModule,
    ButtonModule,
    InputGroupModule,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'front-ecommerce-v2';
}
