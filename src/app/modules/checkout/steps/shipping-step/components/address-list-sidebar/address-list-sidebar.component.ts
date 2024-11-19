import { NgClass } from '@angular/common';
import { Component, inject, input, output, signal } from '@angular/core';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { ControlsOf } from '@shared/models/controls.type';
import { validateNoNulls } from '@shared/services/form-utils';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SidebarModule } from 'primeng/sidebar';
import { AddressFormComponent } from '../address-form/address-form.component';

export interface IAddress {
  id: string;
  address: string;
  city: string;
}

const NG_MODULES = [ReactiveFormsModule, NgClass];
const PRIME_MODULES = [SidebarModule, ButtonModule, RadioButtonModule];
const COMPONENTS = [AddressFormComponent];

@Component({
  selector: 'app-address-list-sidebar',
  standalone: true,
  imports: [NG_MODULES, PRIME_MODULES, COMPONENTS],
  templateUrl: './address-list-sidebar.component.html',
  styleUrl: './address-list-sidebar.component.scss',
})
export class AddressListSidebarComponent {
  step = signal<number>(1);
  items = input.required<IAddress[]>();
  onSubmit = output<IAddress>();

  itemForm!: FormGroup<ControlsOf<IAddress>>;
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

  submit(): void {
    this.visible.set(false);
    const formData = this.itemForm.getRawValue();
    if (validateNoNulls(formData)) {
      this.onSubmit.emit(formData);
    }
  }
}
