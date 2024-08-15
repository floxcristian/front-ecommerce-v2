import { Component } from '@angular/core';
import { TitleHeaderMobileComponent } from '../title-header-mobile/title-header-mobile.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mobile-layout',
  standalone: true,
  imports: [RouterOutlet, TitleHeaderMobileComponent],
  templateUrl: './mobile-layout.component.html',
  styleUrl: './mobile-layout.component.scss',
})
export class MobileLayoutComponent {}
