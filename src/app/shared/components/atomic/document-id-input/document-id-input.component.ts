// Angular
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  forwardRef,
  inject,
  input,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  ValidationErrors,
  Validator,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
// Rxjs
import { pairwise } from 'rxjs';
// PrimeNG
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
// Models
import { Enterprise } from 'src/app/modules/auth/register/components/enterprise-form/enterprise.interface';
import { ControlsOf } from '@shared/models/controls.type';
// Services
import { DocumentIdService } from './services/document-id/document-id.service';
import { CheckUserService } from '@core/api/check-user/check-user.service';
// Validators
import { blurTriggeredAsyncValidator } from './validators/blur-triggered-async.validator';
import { EnterpriseValidator } from './validators/enterprise.validator';
import { DocumentIdValidator } from './validators/document-id.validator';

const NG_MODULES = [ReactiveFormsModule, CommonModule];
const PRIME_MODULES = [InputTextModule, IconFieldModule, InputIconModule];

@Component({
  selector: 'app-document-id-input',
  standalone: true,
  imports: [...PRIME_MODULES, ...NG_MODULES],
  templateUrl: './document-id-input.component.html',
  styleUrl: './document-id-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DocumentIdInputComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DocumentIdInputComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentIdInputComponent
  implements ControlValueAccessor, Validator, OnInit
{
  isEnterprise = input<boolean>(false);
  @ViewChild('documentInput') documentInput!: ElementRef;

  private readonly checkUserService = inject(CheckUserService);
  private readonly fb = inject(FormBuilder);

  form!: FormGroup<ControlsOf<Pick<Enterprise, 'documentId'>>>;
  canExecuteAsyncValidate = EnterpriseValidator.canExecuteAsyncValidate;
  isLoading = EnterpriseValidator.isLoading;
  lastValue = EnterpriseValidator.lastValue;

  private onChange!: (value: string) => void;
  private onTouch!: () => void;

  get documentIdField(): FormControl<string> {
    return this.form.controls.documentId;
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private onChangeDocumentId(): void {
    this.documentIdField.statusChanges
      .pipe(pairwise())
      .subscribe(([prevStatus]) => {
        if (prevStatus === 'PENDING') {
          this.onChange(
            DocumentIdService.getDocumentIdWithoutFormat(
              this.documentIdField.value
            )
          );
        }
      });
  }

  /**
   * Build the form group.
   * @private
   * @returns void
   **/
  private buildForm(): void {
    if (this.isEnterprise()) {
      this.form = this.fb.nonNullable.group({
        documentId: [
          '',
          {
            validators: [
              Validators.required,
              DocumentIdValidator.isValidDocumentId,
            ],
            asyncValidators: [
              blurTriggeredAsyncValidator(
                EnterpriseValidator.isValidEnterprise(this.checkUserService)
              ),
            ],
          },
        ],
      });
      this.onChangeDocumentId();
    } else {
      this.form = this.fb.nonNullable.group({
        documentId: [
          '',
          {
            validators: [
              Validators.required,
              DocumentIdValidator.isValidDocumentId,
            ],
          },
        ],
      });
    }
  }

  keyEnter(): void {
    this.documentInput.nativeElement.blur();
  }

  // #region Input events
  /**
   * Al salir del input, validar el valor.
   * @param value The value of the document id field.
   * @returns void
   * */
  onDocumentIdFieldBlur(value: string, event: Event): void {
    if (this.isEnterprise()) {
      if (event.target === document.activeElement) return;
      const documentIdWithoutFormat =
        DocumentIdService.getDocumentIdWithoutFormat(value);
      const lastValue = this.lastValue();
      if (lastValue !== documentIdWithoutFormat) {
        this.canExecuteAsyncValidate.set(true);
      }
      this.documentIdField.updateValueAndValidity();
    }
    this.onTouch();
  }

  /**
   * Al presionar una tecla en el input, formatear el valor.
   * Restringir el ingreso de solo caracteres permitidos.
   * @param event The input event.
   * @returns void
   * */
  onDocumentIdFieldInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const formattedDocumentId = DocumentIdService.getValidCharacters(
      inputElement.value
    );
    this.documentIdField.setValue(formattedDocumentId, { emitEvent: false }); // No quiero ejecutar un valueChanges o statusChanges.
    const documentIdWithoutFormat =
      DocumentIdService.getDocumentIdWithoutFormat(inputElement.value);
    this.onChange(documentIdWithoutFormat);
  }

  /**
   * Al entrar al input, mostrar solo los caracteres editables.
   * Mostrar solo los caracteres editables.
   * @param value The value of the document id field.
   * @returns void
   * */
  onDocumentIdFieldFocus(): void {
    if (!this.isEnterprise()) return;
    this.isLoading.set(false);
    this.canExecuteAsyncValidate.set(false);
  }
  // #endregion

  // #region ControlValueAccessor
  /**
   * Actualizar el valor del input cuando el formulario padre cambia.
   * + Angular lo invoca automáticamente cuando se actualiza el valor del FormControl asociado con el componente.
   * + Es invocado automáticamente por Angular y no necesitas llamarlo manualmente.
   * + Tu implementación debería actualizar el valor del input en la UI con el valor proporcionado.
   * @param value The new value for the control.
   * @returns void
   * @example
   * writeValue(value: any): void {
   *   if (value) {
   *     this.form.get('documentId')?.setValue(value);
   *   }
   * }
   **/
  writeValue(value: string): void {
    if (!value) return;
    this.documentIdField.setValue(value);
  }

  /**
   * Registrar una función que debe ser invocada cada vez que el valor del input cambie.
   * + Esta función se utiliza para notificar al formulario padre que el valor del input ha cambiado.
   * + No se invoca directamente.
   * + Debes guardar la referencia de la función fn proporcionada y llamarla cuando el valor del input cambie.
   * @param fn The callback function.
   * @returns void
   * @example
   * registerOnChange(fn: any): void {
   *   this.onChange = fn;
   * }
   * onInput(event: Event): void {
   *   const value = (event.target as HTMLInputElement).value;
   *   this.onChange(value);  // Notificar al formulario padre
   * }
   **/
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  /**
   * Registrar una función que debe ser invocada cuando el control es "tocado" (es decir, cuando el usuario interactúa con él).
   * + Se invoca cuando se necesita notificar que el control fue tocado, generalmente en eventos como blur.
   * @param fn The callback function.
   * @returns void
   * @example
   * registerOnTouched(fn: any): void {
   *   this.onTouched = fn;
   * }
   * onBlur(): void {
   *   this.onTouched();  // Notificar que el control fue tocado
   * }
   **/
  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }
  // #endregion

  // #region Validator
  /**
   * Validar el control síncronamente.
   * @returns The validation errors or null.
   * */
  validate(): ValidationErrors | null {
    return this.documentIdField.errors;
  }

  /**
   * Validar el control asíncronamente.
   * @param control The control to validate.
   * @returns The validation errors or null.
   * */
  /*validateAsync(
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return blurTriggeredAsyncValidator(
      EnterpriseValidator.isValidEnterprise(this.checkUserService)
    )(control);
  }*/
  // #endregion
}
