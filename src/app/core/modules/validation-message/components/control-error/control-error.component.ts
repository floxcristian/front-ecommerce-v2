/*****************************************************************
 * Toma un texto y lo muestra con los estilos de error adecuados.
 * Aplica una regla display none si el texto de error es null.
 *****************************************************************/

import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
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
  template: `<p class="control-error" [class.hide-control]="hideError">
    {{ errorText }}
  </p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './control-error.component.scss',
})
export class ControlErrorComponent {
  errorText: string | null = null;
  hideError = true;

  @Input() set text(value: string | null) {
    if (value !== this.errorText) {
      this.errorText = value;
      this.hideError = !value;
      this.cdr.detectChanges();
    }
  }

  constructor(private cdr: ChangeDetectorRef) {}
}
