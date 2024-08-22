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
// Services
import { ScrollService } from 'src/app/core/utils/scroll/scroll.service';
// Models
import { IEnterprise } from './components/enterprise-form/enterprise.interface';

const COMPONENTS = [
  AccountTypeFormComponent,
  PersonalFormComponent,
  AddressFormComponent,
  EnterpriseFormComponent,
  TitleHeaderMobileComponent,
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
  private readonly router = inject(Router);
  enterpriseForm = signal<IEnterprise | null>(null);
  personalForm = signal<any | null>(null);

  features = [
    {
      title: ' Envío gratis en compras superiores a $60.000.',
      description: '',
      icon: 'fa-sharp-duotone fa-solid fa-address-book',
    },
  ];
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

  private setNextStep(): void {
    this.step.update((value) => value + 1);
  }

  setPreviousStep(): void {
    if (this.step() == 1) {
      this.router.navigate(['/']);
    } else {
      this.step.update((value) => value - 1);
    }
  }

  submitRoleForm(role: string): void {
    this.setNextStep();
    this.accountType.set(role);
    if (role === 'customer') {
      this.enterpriseForm.set(null);
    } else {
      this.personalForm.set(null);
    }
    const totalSteps = role === 'customer' ? 2 : 3;
    this.steps.set(totalSteps);
  }

  submitPersonalForm(personalInfo: any): void {
    this.personalForm.set(personalInfo);
    this.setNextStep();
  }

  submitEnterpriseForm(enterpriseInfo: IEnterprise): void {
    this.enterpriseForm.set(enterpriseInfo);
    this.setNextStep();
  }

  submitAddressForm(addressInfo: any): void {
    console.log('addressInfo: ', addressInfo);
  }
}
