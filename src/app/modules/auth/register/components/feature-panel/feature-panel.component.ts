import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-feature-panel',
  standalone: true,
  imports: [],
  templateUrl: './feature-panel.component.html',
  styleUrl: './feature-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturePanelComponent {
  features = [
    {
      title: ' Envío gratis en compras superiores a $60.000.',
      description: '',
      icon: 'fa-sharp-duotone fa-solid fa-address-book',
    },
  ];
}
