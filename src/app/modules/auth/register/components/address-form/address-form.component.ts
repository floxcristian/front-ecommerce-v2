// Angular
import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
  signal,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { environment } from '@env/environment';
// PrimeNG
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RippleModule } from 'primeng/ripple';
import { SkeletonModule } from 'primeng/skeleton';

const NG_MODULES = [ReactiveFormsModule, GoogleMapsModule];
const PRIME_MODULES = [
  InputTextModule,
  ButtonModule,
  RippleModule,
  InputTextareaModule,
  CheckboxModule,
  SkeletonModule,
];

@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [...NG_MODULES, ...PRIME_MODULES],
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressFormComponent {
  accountType = input.required<string>();
  steps = input.required<number>();
  onGoBack = output<void>();
  onSubmit = output<any>();

  addressForm!: FormGroup;
  //center!: google.maps.LatLngLiteral;

  isMapLoaded = signal<boolean>(false);
  options!: google.maps.MapOptions;

  constructor(private readonly fb: FormBuilder) {
    this.options = {
      center: environment.defaultMapCenter,
      zoom: 4,
    };
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
    //this.onSubmit.emit(value);
  }

  onMapReady() {
    this.isMapLoaded.set(true);
  }
}
