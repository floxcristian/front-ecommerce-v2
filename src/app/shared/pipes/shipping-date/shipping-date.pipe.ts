// Angular
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
// Environment
import { environment } from '@env/environment';

/**
 * Transforma una fecha en un formato legible para fechas de envío
 *
 * @description
 * Este pipe convierte fechas en textos formateados para mostrar fechas de envío.
 * Si la fecha es hoy, retorna 'hoy'.
 * Para otras fechas, retorna el formato 'día de mes' (ej: 'lunes 15 de enero')
 *
 * @example
 * ```html
 * <!-- Si value es la fecha actual -->
 * {{ value | shippingDate }} // Output: 'hoy'
 *
 * <!-- Si value es otra fecha -->
 * {{ value | shippingDate }} // Output: 'lunes 15 de enero'
 * ```
 */
@Pipe({
  name: 'shippingDate',
  standalone: true,
})
export class ShippingDatePipe implements PipeTransform {
  private datePipe = new DatePipe(environment.localeId);

  /**
   * Transforma una fecha en un formato legible
   * @param value - Fecha a transformar
   * @returns Una cadena formateada con la fecha de envío
   */
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
