import { Component } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
  selector: 'app-main-header-2',
  standalone: true,
  imports: [StyleClassModule, RippleModule],
  templateUrl: './main-header-2.component.html',
  styleUrl: './main-header-2.component.scss',
})
export class MainHeader2Component {}
