// Angular
import { Component, DestroyRef, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
// Rxjs
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
// Components
import { HeaderComponent } from '../header/header.component';
import { FooterMobileComponent } from '../footer-mobile/footer-mobile.component';
import { TitleHeaderMobileComponent } from '../title-header-mobile/title-header-mobile.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterMobileComponent,
    TitleHeaderMobileComponent,
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {
  private breakpointObserver = inject(BreakpointObserver);
  private destroyRef = inject(DestroyRef);
  private isSmallScreen$ = this.breakpointObserver
    .observe(['(max-width: 991px)'])
    .pipe(
      takeUntilDestroyed(this.destroyRef),
      map((result) => result.matches)
    );
  isSmallScreen = toSignal(this.isSmallScreen$, { initialValue: false });

  currentRoute: string = '';
  isMainPage = signal<boolean>(false);

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = event.urlAfterRedirects;
        const isMainPage = currentRoute === '/';
        this.isMainPage.set(isMainPage);
      }
    });
  }
}
