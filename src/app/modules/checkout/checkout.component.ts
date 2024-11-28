// Angular
import {
  Component,
  computed,
  effect,
  inject,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';
// PrimeNG
import { StyleClassModule } from 'primeng/styleclass';
import { RippleModule } from 'primeng/ripple';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AccordionModule } from 'primeng/accordion';
// Services
import { ScrollService } from '@core/utils/scroll/scroll.service';
// Components
import { ShippingStepComponent } from './steps/shipping-step/shipping-step.component';
import { PaymentStepComponent } from './steps/payment-step/payment-step.component';
import { ContactStepComponent } from './steps/contact-step/contact-step.component';
// Constants
import { BACK_BUTTON_LABELS, SUBMIT_BUTTON_LABEL } from './button-labels';
import { Router } from '@angular/router';

export const COMPONENTS = [
  ShippingStepComponent,
  PaymentStepComponent,
  ContactStepComponent,
];

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
    AccordionModule,
    ...COMPONENTS,
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {
  private readonly scrollService = inject(ScrollService);
  private readonly platformId: Object = inject(PLATFORM_ID);
  private readonly router = inject(Router);

  step = signal<number>(1);
  steps = signal<number>(3);
  backButtonLabel = computed(
    () => BACK_BUTTON_LABELS[this.step() as keyof typeof BACK_BUTTON_LABELS]
  );
  submitButtonLabel = computed(
    () => SUBMIT_BUTTON_LABEL[this.step() as keyof typeof SUBMIT_BUTTON_LABEL]
  );

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
    if (this.step() >= this.steps()) return;
    this.setNextStep();
  }

  goBack() {
    if (this.step() === 1) {
      this.router.navigate(['/cart']);
    } else if (this.step() < 1) return;
    this.step.update((value) => value - 1);
  }

  showPriceDetails: boolean = false;
  togglePriceDetails() {}
}
