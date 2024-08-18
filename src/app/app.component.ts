// Angular
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// PrimeNg
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { PrimeNGConfig } from 'primeng/api';
import { GeolocationService } from './core/api/geolocation/geolocation.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { CheckUserService } from './core/api/check-user/check-user.service';

const PRIME_MODULES = [
  RippleModule,
  StyleClassModule,
  InputTextModule,
  DividerModule,
  ButtonModule,
  InputGroupModule,
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ...PRIME_MODULES],
  template: '<router-outlet/>',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private readonly geolocationService = inject(GeolocationService);
  private readonly checkUserService = inject(CheckUserService);
  stores = toSignal(this.geolocationService.getStores(), { initialValue: [] });

  constructor(private primeConfig: PrimeNGConfig) {
    this.primeConfig.ripple = true;
  }

  ngOnInit(): void {
    /*this.geolocationService.getStores().subscribe((stores) => {
      console.log('store: ', stores);
    });*/
  }
}
