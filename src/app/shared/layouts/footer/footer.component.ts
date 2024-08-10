// Angular
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// PrimeNG
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';

const NG_MODULES = [CommonModule, RouterModule];
const PRIME_MODULES = [BadgeModule, RippleModule];

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [...NG_MODULES, ...PRIME_MODULES],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  active5: number = 0;
}
