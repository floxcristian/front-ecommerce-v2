// https://github.com/ngneat/error-tailor/blob/master/projects/ngneat/error-tailor/src/lib/control-error.directive.ts
import {
  ComponentRef,
  DestroyRef,
  Directive,
  ElementRef,
  inject,
  Inject,
  OnInit,
  Optional,
  Self,
  ViewContainerRef,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import {
  EMPTY,
  merge,
  Observable,
  distinctUntilChanged,
  fromEvent,
  switchMap,
  startWith,
} from 'rxjs';
import { FormSubmitDirective } from '../form-submit/form-submit.directive';
import { ControlErrorComponent } from '../../components/control-error/control-error.component';
import { ControlErrorContainerDirective } from '../control-error-container/control-error-container.directive';
import { FORM_ERRORS } from '../../form-errors';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Directive({
  selector: '[formControlName]',
  standalone: true,
})
export class ControlErrorsDirective implements OnInit {
  private readonly destroyRef: DestroyRef = inject(DestroyRef);
  //container!: ViewContainerRef;
  //@Input() customErrors = {};
  //errors = inject(FORM_ERRORS);
  private ref!: ComponentRef<ControlErrorComponent>;
  private submit$: Observable<Event | null>;
  private host: HTMLElement;

  constructor(
    @Self() private readonly controlDir: NgControl,
    @Inject(FORM_ERRORS) private errors: any,
    @Optional() private form: FormSubmitDirective,
    private vcr: ViewContainerRef,
    elementRef: ElementRef
  ) {
    this.host = elementRef.nativeElement as HTMLElement;
    this.submit$ = this.form ? this.form.submit$ : EMPTY;
  }

  ngOnInit(): void {
    const valueChanges$ = this.control?.valueChanges || EMPTY;
    const blur$ = fromEvent(this.host, 'focusout');
    const changesOnBlur$ = blur$.pipe(
      switchMap(() => valueChanges$.pipe(startWith(true)))
    );
    merge(changesOnBlur$, valueChanges$, this.submit$)
      .pipe(distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        /*console.log('merge: ', res);
        console.log('this.host: ', this.host);
        console.log('this.control: ', this.control);*/
        //const isTouched = ;
        // Mostrar error solo si esta en touched o dirty:

        const hasErrors = !!this.control?.errors;
        if (hasErrors && this.control?.touched) {
          this.showError();
        } else {
          this.hideError();
        }
      });
  }

  get control() {
    return this.controlDir.control;
  }

  /**
   * Explicit showing of a control error via some custom application code.
   */
  showError(): void {
    const controlErrors = this.control?.errors;
    if (controlErrors) {
      const [firstKey] = Object.keys(controlErrors);
      const getError = this.errors[firstKey];
      if (!getError) {
        console.warn(`Missing error message for ${firstKey}.`);
        return;
      }

      const text =
        typeof getError === 'function'
          ? getError(controlErrors[firstKey])
          : getError;
      this.setError(text);
    }
  }

  private hideError(): void {
    if (this.ref) {
      this.setError(null);
    }
  }

  private setError(text: string | null): void {
    if (!this.ref) {
      this.ref ??= this.vcr.createComponent<ControlErrorComponent>(
        ControlErrorComponent
      );
    }
    const instance = this.ref.instance;
    instance.text = text;
  }
}
