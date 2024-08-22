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
import {
  //ControlsOf,
  EnterpriseFormComponent,
} from './components/enterprise-form/enterprise-form.component';
// Services
import { ScrollService } from 'src/app/core/utils/scroll/scroll.service';
// import { StepService } from './services/step/step.service';
import { TitleHeaderMobileComponent } from '@shared/layouts/title-header-mobile/title-header-mobile.component';
import { Router } from '@angular/router';
//import { FormGroup } from '@angular/forms';
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
  // private readonly stepService = inject(StepService);
  enterpriseForm!: IEnterprise;

  features = [
    {
      title: ' Envío gratis en compras superiores a $60.000.',
      description: '',
      icon: 'fa-sharp-duotone fa-solid fa-address-book',
    },
  ];
  step = signal<number>(1);
  steps = signal<number>(2);
  //step = this.stepService.step;
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
    console.log('[setPreviousStep] this.step(): ', this.step());
    if (this.step() == 1) {
      this.router.navigate(['/']);
    } else {
      this.step.update((value) => value - 1);
    }
  }

  submitRoleForm(role: string): void {
    this.setNextStep();
    // this.stepService.setNextStep();
    console.log('role: ', role);
    this.accountType.set(role);
    const totalSteps = role === 'customer' ? 2 : 3;
    this.steps.set(totalSteps);
  }

  submitPersonalForm(personalInfo: any): void {
    console.log('personalInfo: ', personalInfo);
    //this.step.update((value) => value + 1);
    //this.stepService.setNextStep();
    this.setNextStep();
  }

  submitEnterpriseForm(enterpriseInfo: any): void {
    console.log('enterpriseInfo: ', enterpriseInfo);
    //this.step.update((value) => value + 1);
    //this.stepService.setNextStep();
    this.setNextStep();
  }

  submitAddressForm(addressInfo: any): void {
    console.log('addressInfo: ', addressInfo);
  }

  goBack(): void {
    //this.step.update((value) => value - 1);
    //this.stepService.setPreviousStep();
  }
}
