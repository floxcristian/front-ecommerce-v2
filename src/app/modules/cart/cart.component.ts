import { Component, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { LoginSidebarComponent } from './components/login-sidebar/login-sidebar.component';

const PRIME_MODULES = [ButtonModule];
const COMPONENTS = [LoginSidebarComponent];

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [PRIME_MODULES, COMPONENTS],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  @ViewChild('sidebar') sidebar!: LoginSidebarComponent;
}
