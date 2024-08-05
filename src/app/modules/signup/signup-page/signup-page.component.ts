// Angular
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
// Prime
import { RippleModule } from 'primeng/ripple';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { KeyFilterModule } from 'primeng/keyfilter';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { CarouselModule } from 'primeng/carousel';
import { PasswordValidator } from '../validators/password.validator';
import { SelectButtonModule } from 'primeng/selectbutton';
import { StepsModule } from 'primeng/steps';
// Services
import { ScriptService } from '../../../core/services/script/script.service';
import { AccountTypeFormComponent } from '../components/account-type-form/account-type-form.component';
import { PersonalFormComponent } from '../components/personal-form/personal-form.component';
import { AddressFormComponent } from '../components/address-form/address-form.component';
import { EnterpriseFormComponent } from '../components/enterprise-form/enterprise-form.component';

const NG_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  GoogleMapsModule,
];
const PRIME_MODULES = [
  InputTextareaModule,
  FileUploadModule,
  DropdownModule,
  InputSwitchModule,
  InputTextModule,
  InputGroupModule,
  InputGroupAddonModule,
  KeyFilterModule,
  PasswordModule,
  DividerModule,
  InputMaskModule,
  InputNumberModule,
  RippleModule,
  CheckboxModule,
  CarouselModule,
  SelectButtonModule,
  StepsModule,
];
const COMPONENTS = [
  AccountTypeFormComponent,
  PersonalFormComponent,
  AddressFormComponent,
  EnterpriseFormComponent,
];

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [...NG_MODULES, ...PRIME_MODULES, ...COMPONENTS],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.scss',
})
export class SignupPageComponent implements OnInit {
  step: number = 1;

  signupForm!: FormGroup;
  roleOptions = [
    {
      label: 'Empresa',
      value: 'enterprise',
      icon: 'fa-sharp-duotone fa-solid fa-building',
    },
    {
      label: 'Persona',
      value: 'customer',
      icon: 'fa-sharp-duotone fa-solid fa-user',
    },
  ];

  isMapLoaded: boolean = false;
  options: google.maps.MapOptions = {
    mapId: 'DEMO_MAP_ID',
    center: { lat: -31, lng: 147 },
    zoom: 4,
  };

  accountType: string = '';

  constructor(private readonly fb: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {}

  private buildForm(): void {
    this.signupForm = this.fb.group(
      {
        role: ['enterprise', Validators.required],
        enterprise: this.fb.group({
          documentId: [null, [Validators.required]],
          businessName: [null, [Validators.required]],
          businessLine: [null, [Validators.required]],
        }),
        customer: this.fb.group({
          position: [null],
          name: [
            null,
            [
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(50),
            ],
          ],
          lastname: [null, Validators.required],
          documentId: [null, Validators.required],
          email: [null, [Validators.required, Validators.email]],
          phone: [null, Validators.required],
          password: [
            null,
            [
              Validators.required,
              Validators.minLength(8),
              Validators.maxLength(20),
              PasswordValidator.isValidPassword,
            ],
          ],
          confirmPassword: [null, [Validators.required]],
          newsletter: [false],
          disclaimer: [false, [Validators.requiredTrue]],
        }),

        address: this.fb.group({
          street: [null, Validators.required],
          number: [null, Validators.required],
          department: [null],
          city: [null, Validators.required],
          region: [null, Validators.required],
          reference: [null],
        }),
      },
      {
        validators: [PasswordValidator.matchPasswords],
      }
    );

    /*
    this.roleFiled.valueChanges.subscribe((value) => {
      if (value === 'company') {
        this.companyNameField.setValidators([Validators.required]);
      } else {
        this.companyNameField.clearValidators();
      }
      this.companyNameField.updateValueAndValidity();
    }
  );*/
  }

  register($event: any) {
    //console.log('register: ', $event);
    this.step++;
    if (this.signupForm.valid) {
      //console.log('Formulario válido');
    } else {
      // Nicolas molina. 2021-09-29. Se agrega el método markAllAsTouched para marcar todos los campos como tocados y mostrar errores.
      //console.log('Formulario inválido');
      this.signupForm.markAllAsTouched();
    }
  }

  /**
   * Establecer role y setear paso actual.
   * @param role
   */
  submitRoleForm(role: string): void {
    this.step++;
    this.accountType = role;
  }

  submitPersonalForm(personalInfo: any): void {
    console.log('personalInfo: ', personalInfo);
    this.step++;
  }

  submitEnterpriseForm(enterpriseInfo: any): void {
    console.log('enterpriseInfo: ', enterpriseInfo);
    this.step++;
  }

  goBack(): void {
    this.step--;
  }

  goNext(): void {
    this.step++;
  }
}
