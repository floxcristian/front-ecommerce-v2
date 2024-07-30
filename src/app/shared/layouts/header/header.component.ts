// Angular
import { Component } from '@angular/core';
// Components
import { PromoHeaderComponent } from './components/promo-header/promo-header.component';
import { AccountHeaderComponent } from './components/account-header/account-header.component';
import { MainHeader1Component } from './components/main-header-1/main-header-1.component';
import { MainHeader2Component } from './components/main-header-2/main-header-2.component';
import { PromoHeader2Component } from './components/promo-header-2/promo-header-2.component';
import { ShippingHeaderComponent } from './components/shipping-header/shipping-header.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    PromoHeaderComponent,
    PromoHeader2Component,
    AccountHeaderComponent,
    MainHeader1Component,
    MainHeader2Component,
    ShippingHeaderComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
