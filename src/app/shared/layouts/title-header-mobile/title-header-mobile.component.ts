// Angular
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
// Service
import { StepService } from 'src/app/modules/auth/register/services/step/step.service';

@Component({
  selector: 'app-title-header-mobile',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './title-header-mobile.component.html',
  styleUrl: './title-header-mobile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleHeaderMobileComponent {
  stepService = inject(StepService);
  router = inject(Router);

  isRegisterPage = signal<boolean>(false);

  constructor() {
    console.log('holaaa');
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = event.urlAfterRedirects;
        console.log('currentRoute: ', currentRoute);
        const isRegisterPage = currentRoute === '/auth/register';
        this.isRegisterPage.set(isRegisterPage);
      }
    });
  }

  goBack(): void {
    console.log('this.isRegisterPage(): ', this.isRegisterPage());
    if (this.isRegisterPage()) {
      this.stepService.setPreviousStep();
    } else {
      // Ir a la página principal:
      // this.router.navigate(['/']);
      this.stepService.resetStep();
    }
  }
}
