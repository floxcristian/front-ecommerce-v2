import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  Host,
  Inject,
  Input,
  OnInit,
  Optional,
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

@Directive({
  selector: '[formControlName]',
  standalone: true,
})
export class ControlErrorsDirective implements OnInit {
  private submit$: Observable<Event>;
  private ref!: ComponentRef<ControlErrorComponent>;
  private destroy = new Subject<void>();

  container!: ViewContainerRef;
  @Input() customErrors = {};

  constructor(
    private readonly controlDir: NgControl,
    private readonly vcr: ViewContainerRef,
    @Optional() @Host() private form: FormSubmitDirective,
    //
    private resolver: ComponentFactoryResolver,
    @Optional() controlErrorContainer: ControlErrorContainerDirective,
    @Inject(FORM_ERRORS) private errors: any
  ) {
    this.submit$ = this.form ? this.form.submit$ : EMPTY;
    this.container = controlErrorContainer ? controlErrorContainer.vcr : vcr;
  }

  ngOnInit(): void {
    const valueChanges$ = this.control?.valueChanges;

    /*
    merge(this.submit$, this.control?.valueChanges)
      // Corregir esto usando lo de angular y no una librería externa:
      .pipe(untilDestroyed(this))
      .subscribe((v) => {
        const controlErrors = this.control?.errors;
        if (controlErrors) {
          const firstKey = Object.keys(controlErrors)[0];
          const getError = this.errors[firstKey];
          const text =
            this.customErrors[firstKey] || getError(controlErrors[firstKey]);
          this.setError(text);
        } else if (this.ref) {
          this.setError(null);
        }
      });*/
  }

  setError(text: string | null): void {
    if (!this.ref) {
      const factory = this.resolver.resolveComponentFactory(
        ControlErrorComponent
      );
      this.ref = this.vcr.createComponent(factory);
    }

    this.ref.instance.text = text;
  }

  get control() {
    return this.controlDir.control;
  }
}
