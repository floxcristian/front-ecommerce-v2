import { Component } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
  selector: 'app-shipping-header',
  standalone: true,
  imports: [StyleClassModule, RippleModule],
  templateUrl: './shipping-header.component.html',
  styleUrl: './shipping-header.component.scss',
})
export class ShippingHeaderComponent {}
