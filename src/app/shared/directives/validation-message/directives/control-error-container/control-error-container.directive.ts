// Angular
import { Directive, Optional, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[controlErrorContainer]',
  standalone: true,
})
export class ControlErrorContainerDirective {
  constructor(public readonly vcr: ViewContainerRef) {}
}
