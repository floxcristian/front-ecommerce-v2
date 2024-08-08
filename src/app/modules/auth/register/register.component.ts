// Angular
import { Component } from '@angular/core';
// Components
import { PersonalFormComponent } from './components/personal-form/personal-form.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { AccountTypeFormComponent } from './components/account-type-form/account-type-form.component';
import { EnterpriseFormComponent } from './components/enterprise-form/enterprise-form.component';

const COMPONENTS = [
  AccountTypeFormComponent,
  PersonalFormComponent,
  AddressFormComponent,
  EnterpriseFormComponent,
];

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [...COMPONENTS],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  step: number = 1;
  accountType: string = '';

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

  submitAddressForm(addressInfo: any): void {
    console.log('addressInfo: ', addressInfo);
    // this.step++;
  }

  goBack(): void {
    this.step--;
  }
}
