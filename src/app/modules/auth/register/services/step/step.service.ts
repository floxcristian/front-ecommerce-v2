import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StepService {
  step = signal<number>(1);

  setNextStep(): void {
    this.step.update((value) => value + 1);
  }

  setPreviousStep(): void {
    this.step.update((value) => value - 1);
  }

  resetStep(): void {
    this.step.set(1);
  }
}
