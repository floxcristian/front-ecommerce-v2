import { Component, effect, inject, PLATFORM_ID, signal } from '@angular/core';
import { StyleClassModule } from 'primeng/styleclass';
import { RippleModule } from 'primeng/ripple';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DocumentIdInputComponent } from '@shared/components/atomic/document-id-input/document-id-input.component';
import { PhoneInputComponent } from '@shared/components/atomic/phone-input/phone-input.component';
import { ShippingStepComponent } from './steps/shipping-step/shipping-step.component';
import { PaymentStepComponent } from './steps/payment-step/payment-step.component';
import { ScrollService } from '@core/utils/scroll/scroll.service';

export const COMPONENTS = [ShippingStepComponent, PaymentStepComponent];

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    StyleClassModule,
    RippleModule,
    CheckboxModule,
    FormsModule,
    DropdownModule,
    InputNumberModule,
    ButtonModule,
    InputTextModule,
    CommonModule,
    DividerModule,
    RadioButtonModule,
    DocumentIdInputComponent,
    PhoneInputComponent,
    ...COMPONENTS,
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {
  private readonly scrollService = inject(ScrollService);
  private readonly platformId: Object = inject(PLATFORM_ID);

  step = signal<number>(2);
  steps = signal<number>(2);
  products = [
    {
      name: 'Bateria 150 amp 900 cca borne estandar',
      price: 137990,
      image: 'https://images.implementos.cl/img/150/POWBAT0036-1.jpg',
    },
    {
      name: 'Bateria 150 amp 900 cca borne estandar',
      price: 137990,
      image: 'https://images.implementos.cl/img/150/POWBAT0036-1.jpg',
    },
    {
      name: 'Bateria 150 amp 900 cca borne estandar',
      price: 137990,
      image: 'https://images.implementos.cl/img/150/POWBAT0036-1.jpg',
    },
  ];
  retira!: string;
  tier2!: string;
  tier1!: string;
  quantities: number[] = [1, 1, 1];
  animal: number = 0;

  value1!: string;

  checked1: boolean = true;

  checked2: boolean = false;
  selectedValue: string = '';
  selectedValue2: string = '';
  selectedCity!: string;

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      effect(() => {
        this.step();
        this.scrollService.scrollToTop();
      });
    }
  }

  /**
   * Incrementa el valor del paso actual en uno.
   *
   * Este método actualiza el valor del paso actual llamando a la función `update`
   * y aumentando el valor en uno.
   *
   * @private
   */
  private setNextStep(): void {
    this.step.update((value) => value + 1);
  }

  submit() {
    if (this.step() < 3) {
      this.setNextStep();
    }
  }
}
