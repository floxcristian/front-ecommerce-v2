// Angular
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// PrimeNG
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
// Models
import { IFooterItem } from './footer-item.interface';

const NG_MODULES = [CommonModule, RouterModule];
const PRIME_MODULES = [BadgeModule, RippleModule];

/**
 * Componente `FooterMobileComponent` que representa el pie de página para la versión móvil de la aplicación.
 *
 * @selector `app-footer-mobile`
 * @standalone `true`
 * @imports `CommonModule`, `RouterModule`, `BadgeModule`, `RippleModule`
 * @templateUrl `./footer-mobile.component.html`
 * @styleUrl `./footer-mobile.component.scss`
 * @changeDetection `ChangeDetectionStrategy.OnPush`
 *
 * @description
 * Este componente muestra un pie de página con varios elementos de navegación para la versión móvil de la aplicación.
 * Utiliza módulos de Angular y PrimeNG para su funcionalidad y estilo.
 *
 * @property {IFooterItem[]} items - Lista de elementos del pie de página, cada uno con una etiqueta, un ícono y un enlace de enrutamiento.
 */
@Component({
  selector: 'app-footer-mobile',
  standalone: true,
  imports: [...NG_MODULES, ...PRIME_MODULES],
  templateUrl: './footer-mobile.component.html',
  styleUrl: './footer-mobile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterMobileComponent {
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
      routerLink: 'cart',
    },
  ];
}
