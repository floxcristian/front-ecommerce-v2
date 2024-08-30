// Angular
import { Component, inject, ViewChild } from '@angular/core';
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
export class MainHeader2Component {
  @ViewChild('op') overlayPanel!: OverlayPanel;
  private readonly fb = inject(FormBuilder);
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
}
