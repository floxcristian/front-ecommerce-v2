import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RippleModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  active5: number = 0;
}
