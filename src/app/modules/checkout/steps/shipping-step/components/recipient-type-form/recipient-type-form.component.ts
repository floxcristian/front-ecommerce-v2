// Angular
import { Component, effect, inject, output } from '@angular/core';
import { NgClass } from '@angular/common';
import {
  FormGroup,
  ReactiveFormsModule,
  NonNullableFormBuilder,
  FormControl,
} from '@angular/forms';
// Models
import { ShippingTypeAction } from '../../models/shipping-type-action.type';
import { RecipientTypeOption } from './models/recipient-type-option.interface';
import { RecipientType } from '../../models/recipient-type.type';
import { ControlsOf } from '@shared/models/controls.type';
// PrimeNG
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckoutService } from 'src/app/modules/checkout/services/checkout/checkout.service';

const NG_MODULES = [ReactiveFormsModule, NgClass];
const PRIME_MODULES = [RadioButtonModule];

/**
 * Componente para seleccionar la persona que recibe o retira el pedido.
 */
@Component({
  selector: 'app-recipient-type-form',
  standalone: true,
  imports: [NG_MODULES, PRIME_MODULES],
  templateUrl: './recipient-type-form.component.html',
  styleUrl: './recipient-type-form.component.scss',
  host: { class: 'w-full' },
})
export class RecipientTypeFormComponent {
  onChange = output<RecipientType>();

  recipientTypes: RecipientTypeOption[] = [];
  recipientTypeForm!: FormGroup<ControlsOf<{ recipientType: RecipientType }>>;

  get recipientTypeField() {
    return this.recipientTypeForm.get('recipientType');
  }

  public readonly checkoutService = inject(CheckoutService);
  private readonly fb = inject(NonNullableFormBuilder);

  constructor() {
    this.buildForm();
    this.setRecipientTypes();
  }

  private setRecipientTypes(): void {
    this.recipientTypes = this.formatRecipientType(
      this.checkoutService.shippingAction()
    );
    effect(() => {
      this.recipientTypes = this.formatRecipientType(
        this.checkoutService.shippingAction()
      );
    });
  }

  private buildForm(): void {
    this.recipientTypeForm = this.fb.group({
      recipientType: new FormControl<RecipientType>('SELF', {
        nonNullable: true,
      }),
    });
  }

  /**
   * Handle the recipient type selection.
   * @param value
   */
  onSelectRecipientType(value: RecipientType): void {
    this.recipientTypeForm.setValue({ recipientType: value });
    this.onChange.emit(value);
  }

  /**
   * Format the recipient type options based on the shipping action.
   * @param value
   * @returns
   */
  private formatRecipientType(
    value: ShippingTypeAction
  ): RecipientTypeOption[] {
    return [
      {
        title: `Yo voy a ${value} el pedido`,
        value: 'SELF',
      },
      {
        title: `Otra persona también puede ${value} el pedido`,
        value: 'ANOTHER',
      },
    ];
  }
}
