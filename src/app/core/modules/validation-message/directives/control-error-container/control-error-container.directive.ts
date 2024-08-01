import { Directive, Optional, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[controlErrorContainer]',
  standalone: true,
})
export class ControlErrorContainerDirective {
  container: ViewContainerRef;

  constructor(
    public readonly vcr: ViewContainerRef,
    @Optional() controlErrorContainer: ControlErrorContainerDirective
  ) {
    this.container = controlErrorContainer ? controlErrorContainer.vcr : vcr;
  }
}
