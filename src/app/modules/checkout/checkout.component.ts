// Angular
import {
  Component,
  computed,
  effect,
  inject,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
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
import { CartBottomSheetComponent } from 'src/app/components/cart-bottom-sheet/cart-bottom-sheet.component';
// Constants
import { BACK_BUTTON_LABELS, SUBMIT_BUTTON_LABEL } from './button-labels';
import { ShippingType } from './steps/shipping-step/models/shipping-type.type';
import { CheckoutService } from './services/checkout/checkout.service';

const NG_MODULES = [ReactiveFormsModule];
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
  imports: [
    NG_MODULES,
    StyleClassModule,
    FormsModule,
    COMPONENTS,
    PRIME_MODULES,
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {
  //shippingType!: ShippingType;

  //private readonly checkoutService = inject(CheckoutService);
  private readonly scrollService = inject(ScrollService);
  private readonly platformId: Object = inject(PLATFORM_ID);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);

  step = signal<number>(1);
  steps = signal<number>(3);
  backButtonLabel = computed(
    () => BACK_BUTTON_LABELS[this.step() as keyof typeof BACK_BUTTON_LABELS]
  );
  submitButtonLabel = computed(
    () => SUBMIT_BUTTON_LABEL[this.step() as keyof typeof SUBMIT_BUTTON_LABEL]
  );

  constructor() {
    this.buildForm();
    if (isPlatformBrowser(this.platformId)) {
      effect(() => {
        this.step();
        this.scrollService.scrollToTop();
      });
    }
    //this.getShippingType();
  }

  /*getShippingType() {
    this.shippingType = this.checkoutService.shippingType();
    effect(() => {
      this.shippingType = this.checkoutService.shippingType();
    });
  }*/

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

  formGroup!: FormGroup;
  products = [
    {
      name: 'Bateria 150 amp 900 cca borne estandar',
      quantity: 2,
      price: 137990,
      image: 'https://images.implementos.cl/img/150/POWBAT0036-1.jpg',
    },
    {
      name: 'Llanta disco 8.25x22.5 pulg europea aluminio',
      quantity: 3,
      price: 137990,
      image: 'https://images.implementos.cl/img/150/BETLLA0001-1.jpg',
    },
    {
      name: 'Aceite hidraulico indiana iso 68 19 lts',
      quantity: 4,
      price: 137990,
      image: 'https://images.implementos.cl/img/150/LUBIND0003-1.jpg',
    },
  ];

  private buildForm(): void {
    this.formGroup = this.fb.group({
      disclaimer: [],
    });
  }
}
