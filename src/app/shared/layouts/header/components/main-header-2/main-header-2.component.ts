// Angular
import { Component } from '@angular/core';
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
];

@Component({
  selector: 'app-main-header-2',
  standalone: true,
  imports: [...PRIME_MODULES],
  templateUrl: './main-header-2.component.html',
  styleUrl: './main-header-2.component.scss',
})
export class MainHeader2Component {
  options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];
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
}
