// Angular
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// PrimeNG
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
// Models
import { IFooterItem } from './footer-item.interface';

const NG_MODULES = [CommonModule, RouterModule];
const PRIME_MODULES = [BadgeModule, RippleModule];

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [...NG_MODULES, ...PRIME_MODULES],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  items: IFooterItem[] = [
    {
      label: 'Inicio',
      icon: 'fa-sharp fa-house',
      routerLink: '/',
    },
    {
      label: 'Categorías',
      icon: 'fa-sharp fa-objects-column',
      routerLink: '/1',
    },
    {
      label: 'Mi cuenta',
      icon: 'fa-sharp fa-user',
      routerLink: 'auth/register',
    },
    {
      label: 'Menú',
      icon: 'fa-sharp fa-bars',
      routerLink: '/2',
    },
    {
      label: 'Carro',
      icon: 'fa-sharp fa-cart-shopping ',
      routerLink: '/3',
    },
  ];
}
