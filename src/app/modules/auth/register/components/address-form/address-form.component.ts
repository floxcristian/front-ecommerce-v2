// Angular
import { Component, input, output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
// PrimeNG
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RippleModule } from 'primeng/ripple';

const NG_MODULES = [ReactiveFormsModule, GoogleMapsModule];
const PRIME_MODULES = [
  InputTextModule,
  ButtonModule,
  RippleModule,
  InputTextareaModule,
  CheckboxModule,
];

@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [...NG_MODULES, ...PRIME_MODULES],
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.scss',
})
export class AddressFormComponent {
  accountType = input.required<string>();
  onGoBack = output<void>();
  onSubmit = output<any>();

  addressForm!: FormGroup;

  isMapLoaded: boolean = false;
  options: google.maps.MapOptions = {
    mapId: 'DEMO_MAP_ID',
    center: { lat: -31, lng: 147 },
    zoom: 4,
  };

  constructor(private readonly fb: FormBuilder) {
    this.buildForm();
  }

  private buildForm(): void {
    this.addressForm = this.fb.group({
      street: [null, Validators.required],
      number: [null, Validators.required],
      department: [null],
      city: [null, Validators.required],
      region: [null, Validators.required],
      reference: [null],
      newsletter: [false],
      disclaimer: [false, [Validators.requiredTrue]],
    });
  }

  submit(value: any): void {
    console.log('OK');
    this.onSubmit.emit(value);
  }
}