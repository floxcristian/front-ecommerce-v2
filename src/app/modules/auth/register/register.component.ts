// Angular
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
// Components
import { PersonalFormComponent } from './components/personal-form/personal-form.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { AccountTypeFormComponent } from './components/account-type-form/account-type-form.component';
import { EnterpriseFormComponent } from './components/enterprise-form/enterprise-form.component';
// Services
import { ScrollService } from 'src/app/core/utils/scroll/scroll.service';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  private readonly scrollService = inject(ScrollService);
  private readonly platformId: Object = inject(PLATFORM_ID);
  step = signal<number>(1);
  accountType = signal<string>('');

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      effect(() => {
        this.step();
        this.scrollService.scrollToTop();
      });
    }
  }

  submitRoleForm(role: string): void {
    this.step.update((value) => value + 1);
    this.accountType.set(role);
  }

  submitPersonalForm(personalInfo: any): void {
    console.log('personalInfo: ', personalInfo);
    this.step.update((value) => value + 1);
  }

  submitEnterpriseForm(enterpriseInfo: any): void {
    console.log('enterpriseInfo: ', enterpriseInfo);
    this.step.update((value) => value + 1);
  }

  submitAddressForm(addressInfo: any): void {
    console.log('addressInfo: ', addressInfo);
  }

  goBack(): void {
    this.step.update((value) => value - 1);
  }
}
