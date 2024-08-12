/*****************************************************************
 * Toma un texto y lo muestra con los estilos de error adecuados.
 * Aplica una regla display none si el texto de error es null.
 *****************************************************************/

import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  Input,
} from '@angular/core';

/*
export interface ControlErrorComponent {
  customClass: string | string[];
  text: string | null;
  createTemplate?(tpl: ErrorComponentTemplate, error: ValidationErrors, text: string): void;
}
*/

@Component({
  selector: 'control-error',
  standalone: true,
  imports: [CommonModule],
  template: `
    <small class="text-red-500" [class.hide-control]="hideError">
      {{ errorText }}
    </small>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './control-error.component.scss',
})
export class ControlErrorComponent {
  errorText: string | null = null;
  hideError = true;

  private cdr = inject(ChangeDetectorRef);

  @Input() set text(value: string | null) {
    if (value !== this.errorText) {
      this.errorText = value;
      this.hideError = !value;
      /*if (this.hideError) {
        this.host.nativeElement.classList.remove(...this._addClasses);
      }*/
      this.cdr.markForCheck();
      this.cdr.detectChanges();
    }
  }
}
