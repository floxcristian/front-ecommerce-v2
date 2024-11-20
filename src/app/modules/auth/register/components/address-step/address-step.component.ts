// Angular
import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// Components
import { AddressFormComponent } from '../address-form/address-form.component';

const NG_MODULES = [ReactiveFormsModule];
const COMPONENTS = [AddressFormComponent];

@Component({
  selector: 'app-address-step',
  standalone: true,
  imports: [NG_MODULES, COMPONENTS],
  templateUrl: './address-step.component.html',
  styleUrl: './address-step.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressStepComponent {
  accountType = input.required<string>();
  steps = input.required<number>();
  onGoBack = output<void>();
  onSubmit = output<any>();

  submit(value: any): void {
    this.onSubmit.emit(value);
  }
}
