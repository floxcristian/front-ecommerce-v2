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
import { Router } from '@angular/router';
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
import { SummaryOrderComponent } from './components/summary-order/summary-order.component';
// Constants
import { BACK_BUTTON_LABELS, SUBMIT_BUTTON_LABEL } from './button-labels';
import { CartBottomSheetComponent } from 'src/app/components/cart-bottom-sheet/cart-bottom-sheet.component';

const PRIME_MODULES = [
  DropdownModule,
  InputNumberModule,
  ButtonModule,
  InputTextModule,
  CommonModule,
  DividerModule,
  RadioButtonModule,
  AccordionModule,
  RippleModule,
  CheckboxModule,
];
export const COMPONENTS = [
  ShippingStepComponent,
  PaymentStepComponent,
  ContactStepComponent,
  SummaryOrderComponent,
  CartBottomSheetComponent,
];

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [StyleClassModule, FormsModule, COMPONENTS, PRIME_MODULES],
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

  submit(): void {
    if (this.step() >= this.steps()) return;
    this.setNextStep();
  }

  goBack(): void {
    if (this.step() === 1) {
      this.router.navigate(['/cart']);
    } else if (this.step() < 1) return;
    this.step.update((value) => value - 1);
  }
}
