// Angular
import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-title-header-mobile',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './title-header-mobile.component.html',
  styleUrl: './title-header-mobile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleHeaderMobileComponent {
  title = input.required<string>();
  showIcon = input<boolean>(true);
  onGoBack = output<void>();
}
