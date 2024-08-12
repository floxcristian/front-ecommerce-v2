/*****************************************************************************************
 * Permite mostrar errores de validación en un formulario cuando se intenta enviar
 * un formulario inválido.
 * https://github.com/ngneat/error-tailor/blob/master/projects/ngneat/error-tailor/src/lib/control-error.directive.ts
 *****************************************************************************************/

import { Directive, ElementRef, inject } from '@angular/core';
import { fromEvent } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';

@Directive({
  selector: 'form',
  standalone: true,
})
export class FormSubmitDirective {
  submit$ = fromEvent(this.element, 'submit').pipe(
    tap(() => {
      if (this.element.classList.contains('submitted') === false) {
        this.element.classList.add('submitted');
      }
    }),
    shareReplay(1)
  );

  private host: ElementRef<HTMLFormElement> = inject(ElementRef);
  //constructor(private host: ElementRef<HTMLFormElement>) {}

  get element() {
    return this.host.nativeElement;
  }
}
