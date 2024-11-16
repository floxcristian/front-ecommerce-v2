// Angular
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
// Environment
import { environment } from '@env/environment';

@Pipe({
  name: 'shippingDate',
  standalone: true,
})
export class ShippingDatePipe implements PipeTransform {
  private datePipe = new DatePipe(environment.localeId);

  transform(value: Date | null): string {
    if (!value) return '';
    const today = new Date();
    const inputDate = new Date(value);

    const isToday =
      this.datePipe.transform(today, 'yyyy-MM-dd') ===
      this.datePipe.transform(inputDate, 'yyyy-MM-dd');

    if (isToday) return 'hoy';
    return this.datePipe.transform(value, "EEEE d 'de' MMMM") || '';
  }
}
