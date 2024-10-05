// Angular
import {
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
// Rxjs
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
// Components
import { HeaderComponent } from '../header/header.component';
import { FooterMobileComponent } from '../footer-mobile/footer-mobile.component';
import { TitleHeaderMobileComponent } from '../title-header-mobile/title-header-mobile.component';
import { BlockUiService } from '@core/services/block-ui/block-ui.service';
import { BlockUIModule } from 'primeng/blockui';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterMobileComponent,
    TitleHeaderMobileComponent,
    BlockUIModule,
    PanelModule,
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  private breakpointObserver = inject(BreakpointObserver);
  private destroyRef = inject(DestroyRef);
  private blockUIService = inject(BlockUiService);
  blocked$ = this.blockUIService.blocked$;
  blockedPanel: boolean = true;
  isBlocked: boolean = false;

  private isSmallScreen$ = this.breakpointObserver
    .observe(['(max-width: 991px)'])
    .pipe(
      takeUntilDestroyed(this.destroyRef),
      map((result) => result.matches)
    );
  isSmallScreen = toSignal(this.isSmallScreen$, { initialValue: false });

  currentRoute: string = '';
  isMainPage = signal<boolean>(false);
  private subscription: Subscription | null = null;

  constructor(private router: Router, private cdr: ChangeDetectorRef) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = event.urlAfterRedirects;
        const isMainPage = currentRoute === '/';
        this.isMainPage.set(isMainPage);
      }
    });
  }

  ngOnInit() {
    this.subscription = this.blockUIService.blocked$.subscribe(
      (blocked: boolean) => {
        console.log('blocked', blocked);
        this.isBlocked = blocked;
        this.cdr.detectChanges();
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
