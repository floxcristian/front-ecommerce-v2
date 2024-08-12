/*****************************************************************************************
 * Permite mostrar errores de validación en un formulario cuando se intenta enviar
 * un formulario inválido.
 * https://github.com/ngneat/error-tailor/blob/master/projects/ngneat/error-tailor/src/lib/control-error.directive.ts
 *****************************************************************************************/

import {
  DestroyRef,
  Directive,
  ElementRef,
  inject,
  OnInit,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent, Subject } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';

@Directive({
  selector: 'form',
  standalone: true,
})
export class FormSubmitDirective implements OnInit {
  private submit = new Subject<Event | null>();
  private readonly destroyRef: DestroyRef = inject(DestroyRef);
  /*submit$ = fromEvent(this.element, 'submit').pipe(
    tap(() => {
      if (this.element.classList.contains('submitted') === false) {
        this.element.classList.add('submitted');
      }
    }),
    shareReplay(1)
  );*/

  private host: ElementRef<HTMLFormElement> = inject(ElementRef);
  element = this.host.nativeElement;
  submit$ = this.submit.asObservable();

  ngOnInit() {
    fromEvent(this.element, 'submit')
      .pipe(shareReplay(1), takeUntilDestroyed(this.destroyRef))
      .subscribe(this.submit);
  }
}
