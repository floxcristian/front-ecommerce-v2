import { Component } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
  selector: 'app-main-header-1',
  standalone: true,
  imports: [StyleClassModule, RippleModule],
  templateUrl: './main-header-1.component.html',
  styleUrl: './main-header-1.component.scss',
})
export class MainHeader1Component {}
