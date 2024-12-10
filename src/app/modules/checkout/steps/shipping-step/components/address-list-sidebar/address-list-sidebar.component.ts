// Angular
import { NgClass } from '@angular/common';
import { Component, inject, input, output, signal } from '@angular/core';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
// PrimeNG
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SidebarModule } from 'primeng/sidebar';
// Models
import { ControlsOf } from '@shared/models/controls.type';
// Services
import { validateNoNulls } from '@shared/services/form-utils';
// Components
import { AddressFormControlContainerV2Component } from 'src/app/modules/auth/register/components/address-form-control-container-v2/address-form-control-container-v2.component';

export interface IAddress {
  id: string;
  address: string;
  city: string;
}

const NG_MODULES = [ReactiveFormsModule, NgClass];
const PRIME_MODULES = [SidebarModule, ButtonModule, RadioButtonModule];
const COMPONENTS = [AddressFormControlContainerV2Component];

@Component({
  selector: 'app-address-list-sidebar',
  standalone: true,
  imports: [NG_MODULES, PRIME_MODULES, COMPONENTS],
  templateUrl: './address-list-sidebar.component.html',
  styleUrl: './address-list-sidebar.component.scss',
})
export class AddressListSidebarComponent {
  items = input.required<IAddress[]>();
  onSubmit = output<IAddress>();
  step = signal<number>(1);

  itemForm!: FormGroup<ControlsOf<IAddress>>;
  addressForm!: FormGroup;
  visible = signal<boolean>(false);

  get idField() {
    return this.itemForm.get('id');
  }

  private readonly fb = inject(NonNullableFormBuilder);

  constructor() {
    this.buildForm();
  }

  private buildForm(): void {
    this.itemForm = this.fb.group({
      id: '',
      address: '',
      city: '',
    });
    this.addressForm = this.fb.group({});
  }

  show(): void {
    this.visible.set(true);
  }

  onSelectItem(index: number): void {
    const selectedItem = this.items()[index];
    this.itemForm.setValue({
      id: selectedItem.id,
      address: selectedItem.address,
      city: selectedItem.city,
    });
  }

  saveAddress(): void {
    const formData = this.addressForm.getRawValue();
    console.log('addressForm value: ', this.addressForm);
    /*this.visible.set(false);
    const formData = this.addressForm.getRawValue();
    if (validateNoNulls(formData)) {
      this.onSubmit.emit(formData);
    }*/
  }

  submit(): void {
    this.visible.set(false);
    const formData = this.itemForm.getRawValue();
    if (validateNoNulls(formData)) {
      this.onSubmit.emit(formData);
    }
  }
}
