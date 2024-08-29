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
  private helperTextElement: HTMLElement | null = null;

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
    console.log('this.host', this.host);
    const helperTextId = this.host.id;
    console.log('helperTextId', helperTextId);
    if (helperTextId) {
      this.helperTextElement = document.getElementById(`${helperTextId}-help`);
      console.log('this.helperTextElement', this.helperTextElement);
    }

    const valueChanges$ = this.control?.valueChanges || EMPTY;

    const statusChanges$ =
      this.control?.statusChanges.pipe(distinctUntilChanged()) || EMPTY;
    const blur$ = fromEvent(this.host, 'focusout');
    const hasAsyncValidator = !!this.control?.asyncValidator;
    const changesOnAsync$ = hasAsyncValidator ? statusChanges$ : EMPTY;
    const changesOnBlur$ = blur$.pipe(
      switchMap(() => valueChanges$.pipe(startWith(true)))
    );
    merge(changesOnAsync$, changesOnBlur$, valueChanges$, this.submit$)
      .pipe(distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
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
      if (this.helperTextElement) {
        this.helperTextElement.style.display = 'none';
      }
      this.setError(text);
    }
  }

  private hideError(): void {
    if (this.ref) {
      this.setError(null);
    }
    if (this.helperTextElement) {
      this.helperTextElement.style.display = 'block';
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
