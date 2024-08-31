import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

const NG_MODULES = [CommonModule];

@Component({
  selector: 'app-feature-panel',
  standalone: true,
  imports: [...NG_MODULES],
  templateUrl: './feature-panel.component.html',
  styleUrl: './feature-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class:
      'hidden md:block w-full lg:w-6 py-5 lg:py-7 px-4 lg:px-7 surface-card md:border-right-1 surface-border',
  },
})
export class FeaturePanelComponent {
  accountType = input.required<string>();

  //selected
  features = [
    {
      title: 'Despacho gratis',
      description:
        'Aprovecha despacho gratuito a domicilio por compras sobre $60.000 a todo Chile.',
      icon: 'fa-box-taped',
      //icon: 'fa-address-book',
    },
    {
      title: 'Paga seguro',
      description:
        'En 4 cuotas sin interés con tus tarjetas preferidas, también contamos con Mercado Pago y aceptamos transferencias.',
      icon: 'fa-credit-card',
    },
    {
      title: 'Comodidad 24/7',
      description:
        'Compra en cualquier momento del día en implementos.cl, ¡abierto las 24 horas!',
      icon: 'fa-gift',
    },
  ];
}
