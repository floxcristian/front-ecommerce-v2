// Angular
import { Component, inject, input, output } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
// PrimeNG
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { DocumentIdValidator } from '../../validators/document-id.validator';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DropdownModule } from 'primeng/dropdown';
// Services
import { DocumentIdService } from '../../services/document-id/document-id.service';
// Models
import { IEnterprise } from './enterprise.interface';
import { ControlErrorsDirective } from '@shared/directives/validation-message/directives/control-errors/control-errors.directive';
import { FormSubmitDirective } from '@shared/directives/validation-message/directives/form-submit/form-submit.directive';
import { CheckUserService } from 'src/app/core/api/check-user/check-user.service';
import { EnterpriseValidator } from '../../validators/enterprise.validator';
import { CommonModule } from '@angular/common';
import { distinctUntilChanged, of } from 'rxjs';

export type ControlsOf<T extends Record<string, any>> = {
  [K in keyof T]: T[K] extends Record<any, any>
    ? FormGroup<ControlsOf<T[K]>>
    : FormControl<T[K]>;
};

export function blurTriggeredAsyncValidator(
  asyncValidator: AsyncValidatorFn
): AsyncValidatorFn {
  console.log('[+] blurTriggeredAsyncValidator');
  return (control: AbstractControl) => {
    if (!EnterpriseValidator.blurred()) {
      return of(null);
    }
    return asyncValidator(control);
  };
}

const NG_MODULES = [ReactiveFormsModule];
const PRIME_MODULES = [
  CheckboxModule,
  InputTextModule,
  RippleModule,
  ButtonModule,
  CommonModule,
  IconFieldModule,
  InputIconModule,
  DropdownModule,
];
const DIRECTIVES = [FormSubmitDirective, ControlErrorsDirective];

@Component({
  selector: 'app-enterprise-form',
  standalone: true,
  imports: [...NG_MODULES, ...PRIME_MODULES, ...DIRECTIVES],
  templateUrl: './enterprise-form.component.html',
  styleUrl: './enterprise-form.component.scss',
})
export class EnterpriseFormComponent {
  onGoBack = output<void>();
  onSubmit = output<IEnterprise>();
  data = input.required<IEnterprise>();
  enterpriseForm!: FormGroup<ControlsOf<IEnterprise>>;
  blurred = EnterpriseValidator.blurred;
  businessName = EnterpriseValidator.businessName;
  businessLines = EnterpriseValidator.businessLines;
  isLoading = EnterpriseValidator.isLoading;
  lastValue = EnterpriseValidator.lastValue;

  private readonly checkUserService = inject(CheckUserService);

  get documentIdField() {
    return this.enterpriseForm.controls.documentId;
  }

  get businessNameField() {
    return this.enterpriseForm.controls.businessName;
  }

  get businessLineField() {
    return this.enterpriseForm.controls.businessLineCode;
  }

  constructor(private readonly fb: FormBuilder) {
    this.buildForm(); /*if (this.businessLines().length) {

    /*effect(() => {
      console.log('effect businessName================');
      this.businessNameField.setValue(this.businessName(), {
        emitEvent: false,
      });
    }); */
    /*effect(
      () => {
        console.log('effect businessLines============');
        const businessLines = this.businessLines();*/
    //this.businessLineField.setValue('');
    //console.log('businessLines: ', businessLines);
    /*this.businessLineField.setValue(businessLines[0]?.code, {
          emitEvent: false,
        });*/
    /*      if (businessLines.length) {
          console.log('businessLines: ', businessLines[0].code);
          const businessLineCode: number = businessLines[0].code;
          this.businessLineField.setValue(businessLineCode.toString(), {
            emitEvent: false,
          });
        }
*/
    /*this.businessLineField.setValue(this.businessLines()[0].code);
      }*/
    /* },
      { allowSignalWrites: true }
    );*/
  }

  private buildForm(): void {
    this.enterpriseForm = this.fb.nonNullable.group({
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
      businessName: [{ value: '', disabled: true }, [Validators.required]],
      businessLineCode: [{ value: '', disabled: true }, [Validators.required]],
      businessLineName: ['', [Validators.required]],
    });
    this.onDocumentIdChange();
    /*this.onBusinessNameChange();*/
    this.onBusinessLineChange();
  }

  /**
   * Mostrar solo los caracteres editables.
   * @param value
   */
  onDocumentIdFieldFocus(value: string): void {
    this.isLoading.set(false);
    const formattedDocumentId = DocumentIdService.getEditableValue(value);
    this.documentIdField.setValue(formattedDocumentId, { emitEvent: false });
    this.blurred.set(false);
  }

  /**
   * Restringir el ingreso de solo caracteres permitidos.
   * @param value
   */
  onDocumentIdFieldInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const formattedDocumentId = DocumentIdService.getValidCharacters(
      inputElement.value
    );
    /*const formattedDocumentId = DocumentIdService.getValidCharacters(value);
    console.log('setValueOnDocumentIdFieldInputEvent: ', formattedDocumentId);*/
    this.documentIdField.setValue(formattedDocumentId, { emitEvent: false });
    // Ejecutar el validador asíncrono manualmente
  }

  /**
   * Al salir del input, formatear el valor.
   * @param value
   */
  onDocumentIdFieldBlur(value: string): void {
    const formattedDocumentId = DocumentIdService.getFormattedDocumentId(value);
    this.blurred.set(true);
    this.documentIdField.setValue(formattedDocumentId, { emitEvent: true });
    /*this.documentIdField.updateValueAndValidity();*/
  }

  submit(value: IEnterprise): void {
    if (this.enterpriseForm.valid) {
      this.enterpriseForm.getRawValue();
      this.onSubmit.emit(value);
    } else {
      // Nicolas molina. 2021-09-29. Se agrega el método markAllAsTouched para marcar todos los campos como tocados y mostrar errores.
      this.enterpriseForm.markAllAsTouched();
    }
  }

  /***************************
   * SOLO PARA PRUEBAS UNITARIAS
   ***************************/
  onDocumentIdChange() {
    this.documentIdField.valueChanges.subscribe((value) => {
      console.log('====================================');
      console.log('onDocumentIdChange: ', value);
      console.log('lastValue: ', this.lastValue());
      if (this.lastValue() && this.lastValue() !== value) {
        console.log('entro al reset');
        // this.businessNameField.setValue('');
        this.businessName.set('');
        this.businessLines.set([]);
        // this.businessLineField.setValue('', { emitEvent: false });
        this.enterpriseForm.patchValue(
          {
            businessName: '',
            businessLineCode: '',
            businessLineName: '',
          },
          { emitEvent: false }
        );
        // Setear el campo de businessline como untouched:
        this.businessLineField.markAsUntouched();
        this.businessLineField.markAsPristine();
        this.businessLineField.updateValueAndValidity();
      }
      // Si el formcontrol es válido, se limpia el businessName y businessLine:
      /*if (!this.documentIdField.valid) {
      }*/
    });

    this.documentIdField.statusChanges.subscribe((status) => {
      console.log('statusChanges: ', status);
      if (status === 'INVALID') {
        //this.businessNameField.disable();
        this.enterpriseForm.patchValue({
          businessName: '',
          businessLineCode: '',
          businessLineName: '',
        });
        this.businessLineField.disable();
      } else if (status === 'VALID') {
        //this.businessNameField.enable();
        /*this.businessLineField.setValue(this.businessLines()[0].code, {
          emitEvent: false,
        });*/
        this.enterpriseForm.patchValue({
          businessName: this.businessName(),
          businessLineCode: this.businessLines()[0].code,
          businessLineName: this.businessLines()[0].name,
        });
        this.businessLineField.enable();
      }
    });
  }
  /*
  onBusinessNameChange() {
    this.businessNameField.valueChanges.subscribe((value) => {
      console.log('onBusinessNameChange: ', value);
    });
  }*/

  onBusinessLineChange() {
    this.businessLineField.valueChanges
      .pipe(distinctUntilChanged())
      .subscribe((value) => {
        console.log('<onBusinessLineChange: ', value);
        this.enterpriseForm.patchValue({
          businessLineName: this.businessLines().find(
            (line) => line.code === Number(value)
          )?.name,
        });
      });
  }
}
