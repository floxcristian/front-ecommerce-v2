import {
  Directive,
  Input,
  HostListener,
  ElementRef,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { NgControl, ValidationErrors } from '@angular/forms';
import { Subscription } from 'rxjs';
// import { ValidationMessageService } from './validation-message.service';

@Directive({
  selector: '[formControlName]',
  standalone: true,
})
export class ValidationLabelDirective {
  @Input('formControlName') formControlName!: string;
  errorSpanId = '';
  statusChangeSubscription!: Subscription;

  constructor(
    private elRef: ElementRef,
    private readonly controlDir: NgControl
  ) //private validationMsgService: ValidationMessageService
  {}

  ngOnInit(): void {
    this.errorSpanId = this.formControlName + '-error';
    /*this.statusChangeSubscription = this.control.statusChanges?.subscribe(
      (status) => {
        if (status === 'INVALID') {
          this.showError();
        } else {
          this.removeError();
        }
      }
    );*/
  }
}
