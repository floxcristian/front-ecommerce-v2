// Angular
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { ButtonModule } from 'primeng/button';
// PrimeNG
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    GoogleMapsModule,
    InputTextareaModule,
  ],
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.scss',
})
export class AddressFormComponent {
  @Output() onGoBack: EventEmitter<void> = new EventEmitter();
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
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
    });
  }

  submit(value: any): void {
    console.log('OK');
  }
}
