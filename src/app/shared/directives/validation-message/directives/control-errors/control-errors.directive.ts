// https://github.com/ngneat/error-tailor/blob/master/projects/ngneat/error-tailor/src/lib/control-error.directive.ts
import {
  ComponentFactoryResolver,
  ComponentRef,
  DestroyRef,
  Directive,
  ElementRef,
  Host,
  inject,
  Inject,
  Input,
  OnInit,
  Optional,
  Self,
  ViewContainerRef,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import {
  EMPTY,
  merge,
  mergeWith,
  Observable,
  distinctUntilChanged,
  takeUntil,
  Subject,
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
  private submit$: Observable<Event | null>;

  constructor(
    @Self() private readonly controlDir: NgControl,
    @Inject(FORM_ERRORS) private errors: any,
    @Optional() private form: FormSubmitDirective
  ) {
    this.submit$ = this.form ? this.form.submit$ : EMPTY;
  }

  ngOnInit(): void {
    console.log('pass');
    this.control?.valueChanges
      .pipe(distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
      .subscribe((res) => {
        console.log('res: ', res);
        const hasErrors = !!this.control?.errors;
        console.log('hasErrors: ', hasErrors);
        if (hasErrors) {
          this.showError();
        } else {
          //this.hideError();
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
      console.log('error message: ', text);
      /*this.addCustomClass();
      this.setError(text, controlErrors);*/
    }
  }
}
