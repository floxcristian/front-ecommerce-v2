import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
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

    if (isToday) return 'Hoy';
    const transformedDate = this.datePipe.transform(value, 'fullDate') || '';
    return transformedDate.charAt(0).toUpperCase() + transformedDate.slice(1);
  }
}
