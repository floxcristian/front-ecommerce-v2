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
  private readonly platformId: Object = inject(PLATFORM_ID);
  private readonly router = inject(Router);
  enterpriseForm = signal<Enterprise | null>(null);
  personalForm = signal<any | null>(null);

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
    if (role === 'customer') {
      this.enterpriseForm.set(null);
    } else {
      this.personalForm.set(null);
    }
    const totalSteps = role === 'customer' ? 2 : 3;
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
    console.log('addressInfo: ', addressInfo);
  }
  // #endregion
}
