// Angular
import { Component, computed, inject, input, output } from '@angular/core';
import { NgClass } from '@angular/common';
import {
  FormGroup,
  ReactiveFormsModule,
  NonNullableFormBuilder,
  FormControl,
} from '@angular/forms';
// Models
import { ShippingType } from '../../models/shipping-type.type';
import { ShippingTypeAction } from '../../models/shipping-type-action.type';
import { RecipientTypeOption } from './models/recipient-type-option.interface';
import { RecipientType } from '../../models/recipient-type.type';
import { ControlsOf } from '@shared/models/controls.type';
// PrimeNG
import { RadioButtonModule } from 'primeng/radiobutton';

const NG_MODULES = [ReactiveFormsModule, NgClass];
const PRIME_MODULES = [RadioButtonModule];

/**
 * Componente para seleccionar la persona que recibe o retira el pedido.
 */
@Component({
  selector: 'app-recipient-type-form',
  standalone: true,
  imports: [...NG_MODULES, ...PRIME_MODULES],
  templateUrl: './recipient-type-form.component.html',
  styleUrl: './recipient-type-form.component.scss',
  host: { class: 'w-full' },
})
export class RecipientTypeFormComponent {
  shippingType = input.required<ShippingType>();
  shippingAction = input.required<ShippingTypeAction>();
  onChange = output<RecipientType>();

  recipientTypes = computed<RecipientTypeOption[]>(() => {
    return this.formatRecipientType(this.shippingAction());
  });

  recipientTypeForm!: FormGroup<ControlsOf<{ recipientType: RecipientType }>>;

  get recipientTypeField() {
    return this.recipientTypeForm.get('recipientType');
  }

  private readonly fb = inject(NonNullableFormBuilder);

  constructor() {
    this.buildForm();
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
