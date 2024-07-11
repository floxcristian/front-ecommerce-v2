import { Component } from '@angular/core';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
  selector: 'app-main-header-2',
  standalone: true,
  imports: [StyleClassModule, RippleModule, BadgeModule, ButtonModule],
  templateUrl: './main-header-2.component.html',
  styleUrl: './main-header-2.component.scss',
})
export class MainHeader2Component {}
