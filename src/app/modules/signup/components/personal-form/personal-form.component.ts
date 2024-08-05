// Angular
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
// PrimeNG
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
// Validators
import { PasswordValidator } from '../../validators/password.validator';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { KeyFilterModule } from 'primeng/keyfilter';

const NG_MODULES = [ReactiveFormsModule];
const PRIME_MODULES = [
  PasswordModule,
  InputTextModule,
  DividerModule,
  ButtonModule,
  RippleModule,
  InputGroupModule,
  InputGroupAddonModule,
  KeyFilterModule,
];

@Component({
  selector: 'app-personal-form',
  standalone: true,
  imports: [...NG_MODULES, ...PRIME_MODULES],
  templateUrl: './personal-form.component.html',
  styleUrl: './personal-form.component.scss',
})
export class PersonalFormComponent {
  @Input() accountType: string = '';
  @Output() onGoBack: EventEmitter<void> = new EventEmitter();
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  personalForm!: FormGroup;
  constructor(private readonly fb: FormBuilder) {
    this.buildForm();
  }

  private buildForm(): void {
    this.personalForm = this.fb.group(
      {
        position: [null],
        name: [
          null,
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(50),
          ],
        ],
        lastname: [null, Validators.required],
        documentId: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        phone: [null, Validators.required],
        password: [
          null,
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(20),
            PasswordValidator.isValidPassword,
          ],
        ],
        confirmPassword: [null, [Validators.required]],
        /*newsletter: [false],
      disclaimer: [false, [Validators.requiredTrue]],*/
      },
      {
        validators: [PasswordValidator.matchPasswords],
      }
    );
  }

  submit(event: any): void {
    this.onSubmit.emit(event);
  }
}
