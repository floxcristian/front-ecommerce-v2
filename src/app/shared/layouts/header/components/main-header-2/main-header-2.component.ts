// Angular
import {
  Component,
  ElementRef,
  inject,
  OnDestroy,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
} from '@angular/core';
// PrimeNG
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { SplitButtonModule } from 'primeng/splitbutton';
import { StyleClassModule } from 'primeng/styleclass';
import { OverlayPanel, OverlayPanelModule } from 'primeng/overlaypanel';
import { environment } from '@env/environment';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ControlsOf } from '@shared/models/controls.type';
import { BlockUiService } from '@core/services/block-ui/block-ui.service';
import { isPlatformBrowser } from '@angular/common';

const PRIME_MODULES = [
  StyleClassModule,
  RippleModule,
  BadgeModule,
  ButtonModule,
  InputTextModule,
  InputGroupModule,
  DropdownModule,
  InputGroupAddonModule,
  SplitButtonModule,
  OverlayPanelModule,
];

const NG_MODULES = [ReactiveFormsModule];

export interface CurrencyOption {
  label: string;
  code: string;
  image: string;
}

@Component({
  selector: 'app-main-header-2',
  standalone: true,
  imports: [...PRIME_MODULES, ...NG_MODULES],
  templateUrl: './main-header-2.component.html',
  styleUrl: './main-header-2.component.scss',
})
export class MainHeader2Component implements OnDestroy {
  @ViewChild('op') overlayPanel!: OverlayPanel;
  @ViewChild('hoverElement', { read: ElementRef }) hoverElement!: ElementRef;

  private readonly fb = inject(FormBuilder);
  private readonly renderer = inject(Renderer2);
  private readonly blockUIService = inject(BlockUiService);
  private readonly platformId: Object = inject(PLATFORM_ID);

  currencyForm!: FormGroup<ControlsOf<{ currency: string }>>;
  options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];
  currencyOptions = [
    {
      label: 'PEN (Sol peruano)',
      code: 'PEN',
      image: 'assets/images/flags/peru.svg',
    },
    {
      label: 'USD (Dólar estadoudinense)',
      code: 'USD',
      image: 'assets/images/flags/usa.svg',
    },
    {
      label: 'CLP (Peso chileno)',
      code: 'CLP',
      image: 'assets/images/flags/chile.svg',
    },
  ];
  selectedCurrency = this.currencyOptions.find(
    (item) => item.code === environment.currencyCode
  ) as CurrencyOption;
  items = [
    {
      label: 'Update',
      command: () => {},
    },
    {
      label: 'Delete',
      command: () => {},
    },
    { label: 'Angular Website', url: 'http://angular.io' },
    { separator: true },
    { label: 'Upload', routerLink: ['/fileupload'] },
  ];

  constructor() {
    this.buildForm();
  }

  buildForm(): void {
    this.currencyForm = this.fb.nonNullable.group({
      currency: [this.selectedCurrency.code],
    });
  }

  submit(formValue: { currency: string }): void {
    this.selectedCurrency = this.currencyOptions.find(
      (item) => item.code === formValue.currency
    ) as CurrencyOption;
    this.overlayPanel.hide();
  }

  private hideTimer: ReturnType<typeof setTimeout> | null = null;
  private hideDelay = 200;
  private panelElement: HTMLElement | null = null;
  private readonly SCROLL_BLOCK_CLASS = 'no-overlay-scroll';

  showOverlay(event: MouseEvent): void {
    this.cancelHideTimer();
    this.overlayPanel.show(event, this.hoverElement.nativeElement);
    this.disableScroll();
    this.blockUIService.block();
  }

  startHideTimer(): void {
    this.cancelHideTimer();
    this.hideTimer = setTimeout(() => {
      this.overlayPanel.hide();
      this.enableScroll();
      this.hideOverlay();
    }, this.hideDelay);
  }

  hideOverlay() {
    this.overlayPanel.hide();
    // Usamos requestAnimationFrame para asegurarnos de que el DOM se ha actualizado
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.blockUIService.unblock();
        //this.cdr.detectChanges();
      });
    });
  }

  cancelHideTimer(): void {
    if (!this.hideTimer) return;
    clearTimeout(this.hideTimer);
    this.hideTimer = null;
  }

  onPanelShow(): void {
    setTimeout(() => {
      this.panelElement = document.querySelector(
        '.p-overlaypanel'
      ) as HTMLElement;
      if (!this.panelElement) return;
      this.panelElement.addEventListener(
        'mouseenter',
        this.cancelHideTimer.bind(this)
      );
      this.panelElement.addEventListener(
        'mouseleave',
        this.startHideTimer.bind(this)
      );
    }, 0);
  }

  onPanelHide(): void {
    if (!this.panelElement) return;
    this.panelElement.removeEventListener(
      'mouseenter',
      this.cancelHideTimer.bind(this)
    );
    this.panelElement.removeEventListener(
      'mouseleave',
      this.startHideTimer.bind(this)
    );
    this.panelElement = null;
  }

  private disableScroll(): void {
    this.renderer.addClass(document.body, this.SCROLL_BLOCK_CLASS);
  }

  private enableScroll(): void {
    this.renderer.removeClass(document.body, this.SCROLL_BLOCK_CLASS);
  }

  ngOnDestroy(): void {
    this.onPanelHide();
    this.cancelHideTimer();
    this.enableScroll();
  }
}
