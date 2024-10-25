// Angular
import { Component, input, signal } from '@angular/core';
// Components
import {
  ShippingType,
  ShippingTypeFormComponent,
} from './components/shipping-type-form/shipping-type-form.component';

const COMPONENTS = [ShippingTypeFormComponent];

@Component({
  selector: 'app-shipping-step',
  standalone: true,
  imports: [...COMPONENTS],
  templateUrl: './shipping-step.component.html',
  styleUrl: './shipping-step.component.scss',
  host: { class: 'w-full' },
})
export class ShippingStepComponent {
  shippingType = input.required<ShippingType>();
}
