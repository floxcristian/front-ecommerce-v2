// Angular
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
// Components
import { PersonalFormComponent } from './components/personal-form/personal-form.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { AccountTypeFormComponent } from './components/account-type-form/account-type-form.component';
import { EnterpriseFormComponent } from './components/enterprise-form/enterprise-form.component';
import { TitleHeaderMobileComponent } from '@shared/layouts/title-header-mobile/title-header-mobile.component';
import { FeaturePanelComponent } from './components/feature-panel/feature-panel.component';
// Services
import { ScrollService } from 'src/app/core/utils/scroll/scroll.service';
// Models
import { Enterprise } from './components/enterprise-form/enterprise.interface';
import { CustomerService } from '@core/api/customer/customer.service';
import { environment } from '@env/environment';

const COMPONENTS = [
  AccountTypeFormComponent,
  PersonalFormComponent,
  AddressFormComponent,
  EnterpriseFormComponent,
  TitleHeaderMobileComponent,
  FeaturePanelComponent,
];

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [...COMPONENTS],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  private readonly scrollService = inject(ScrollService);
  private readonly customerService = inject(CustomerService);
  private readonly platformId: Object = inject(PLATFORM_ID);
  private readonly router = inject(Router);
  enterpriseForm = signal<Enterprise | null>(null);
  personalForm = signal<any | null>(null);
  addressForm = signal<any | null>(null);

  step = signal<number>(1);
  steps = signal<number>(2);
  accountType = signal<string>('');

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      effect(() => {
        this.step();
        this.scrollService.scrollToTop();
      });
    }
  }

  // #region Step navigation
  /**
   * Set the next step in the registration process.
   */
  private setNextStep(): void {
    this.step.update((value) => value + 1);
  }

  /**
   * Set the previous step in the registration process.
   */
  setPreviousStep(): void {
    if (this.step() == 1) {
      this.router.navigate(['/']);
    } else {
      this.step.update((value) => value - 1);
    }
  }
  // #endregion

  // #region Form submissions
  submitRoleForm(role: string): void {
    this.setNextStep();
    this.accountType.set(role);
    if (role === 'personal') {
      this.enterpriseForm.set(null);
    } else {
      this.personalForm.set(null);
    }
    const totalSteps = role === 'personal' ? 2 : 3;
    this.steps.set(totalSteps);
  }

  submitPersonalForm(personalInfo: any): void {
    console.log('personalInfo: ', personalInfo);
    this.personalForm.set(personalInfo);
    this.setNextStep();
  }

  /**
   * Submit the enterprise form.
   * @param enterpriseInfo The enterprise information.
   * @returns void
   * @example
   * submitEnterpriseForm({
   *  documentId: '123456789',
   *  businessName: 'My business',
   *  businessLineName: 'My business line',
   *  businessLineCode: '1234'
   * });
   */
  submitEnterpriseForm(enterpriseInfo: Enterprise): void {
    this.enterpriseForm.set(enterpriseInfo);
    this.setNextStep();
  }

  submitAddressForm(addressInfo: any): void {
    this.addressForm.set(addressInfo);
    console.log('addressInfo: ', addressInfo);
    this.createUser();
  }
  // #endregion

  // TODO: para crear el usuario solo se debería pasar el código de localidad.

  private createUser(): void {
    console.log('Creando usuario...');
    console.log('accountType: ', this.accountType());
    console.log('personalInfo: ', this.personalForm());
    console.log('enterpriseInfo: ', this.enterpriseForm());
    console.log('addressInfo: ', this.addressForm());
    const [formattedCity, province, region] =
      this.addressForm().commune.split('@');

    const isBusiness = this.accountType() === 'business';
    const params = {
      documentId: isBusiness
        ? this.enterpriseForm()?.documentId
        : this.personalForm().documentId,
      documentType: 'CL',
      userType: 0,
      customerType: isBusiness ? 2 : 1,
      businessLine: String(this.enterpriseForm()?.businessLineCode) || '',
      businessLineName: String(this.enterpriseForm()?.businessLineCode) || '',
      email: this.personalForm().email,
      password: this.personalForm().password,
      firstName: isBusiness
        ? this.enterpriseForm()?.businessName
        : this.personalForm().name,
      lastName: this.personalForm().lastname,
      contact: {
        documentId: isBusiness
          ? this.enterpriseForm()?.documentId
          : this.personalForm().documentId,
        name: this.personalForm().name,
        lastName: this.personalForm().lastname,
        phone: `${environment.phoneCode}${this.personalForm().phone}`,
        position: isBusiness ? this.personalForm().position : 'FACTURACION',
        email: this.personalForm().email,
      },
      address: {
        city: formattedCity,
        street: this.addressForm().street,
        number: this.addressForm().number,
        departmentOrHouse: this.addressForm().department,
        reference: this.addressForm().reference,
        latitude: this.addressForm().latitude,
        longitude: this.addressForm().longitude,
        location: this.addressForm().locality,
        region: region,
        province: province,
      },
    };
    console.log('params: ', params);
    /*this.customerService.createUser({
      documentId: this.personalForm().documentId,
      documentType: this.personalForm().documentType,
      userType: 0,
      customerType: isBusiness ? 2 : 1,
      businessLine: this.enterpriseForm()?.businessLineCode || '',
      businessLineName: this.enterpriseForm()?.businessLineName || '',
      email: this.personalForm().email,
      firstName: isBusiness
        ? this.enterpriseForm()?.businessName
        : this.personalForm().firstName,
      lastName: this.personalForm().lastName,
      contact: {
        documentId: isBusiness ? '' : this.personalForm().documentId,
        name: this.personalForm().firstName,
        lastName: this.personalForm().lastName,
        phone: this.personalForm().phone,
        position: isBusiness ? this.personalForm().position : 'FACTURACION',
        email: this.personalForm().email,
      },
      address: {
        city: this.addressForm().commune,
        street: this.addressForm().street,
        number: this.addressForm().number,
        departmentOrHouse: this.addressForm().department,
        reference: this.addressForm().reference,
        latitude: '',
        longitude: '',
        location: this.addressForm().location,
        region: this.addressForm().region,
        province: '', //this.addressForm().province,
      },
    });*/
  }
}
