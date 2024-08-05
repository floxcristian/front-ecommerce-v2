import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-enterprise-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CheckboxModule,
    InputTextModule,
    RippleModule,
    ButtonModule,
  ],
  templateUrl: './enterprise-form.component.html',
  styleUrl: './enterprise-form.component.scss',
})
export class EnterpriseFormComponent {
  enterpriseForm!: FormGroup;
  @Output() onGoBack: EventEmitter<void> = new EventEmitter();
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  constructor(private readonly fb: FormBuilder) {
    this.buildForm();
  }

  private buildForm(): void {
    this.enterpriseForm = this.fb.group({
      documentId: [null, [Validators.required]],
      businessName: [null, [Validators.required]],
      businessLine: [null, [Validators.required]],
    });
  }

  submit(value: any): void {
    this.onSubmit.emit(value);
  }
}
