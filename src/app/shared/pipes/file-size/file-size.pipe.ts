import { Pipe, PipeTransform } from '@angular/core';

/**
 * Convierte un tamaño en bytes a una representación legible
 *
 * @description
 * Este pipe transforma un número de bytes en una cadena formateada con la unidad
 * de almacenamiento más apropiada (B, KB, MB, GB, TB).
 * El resultado se redondea a 2 decimales.
 * Si el valor es 0 o null, retorna '0B'.
 *
 * @example
 * ```html
 * {{ 1024 | fileSize }} // Output: '1 KB'
 * {{ 1048576 | fileSize }} // Output: '1 MB'
 * {{ 1073741824 | fileSize }} // Output: '1 GB'
 * {{ 0 | fileSize }} // Output: '0B'
 * ```
 */
@Pipe({
  name: 'fileSize',
  standalone: true,
})
export class FileSizePipe implements PipeTransform {
  /**
   * Transforma bytes en una representación legible
   * @param bytes - Cantidad de bytes a transformar
   * @returns Cadena formateada con el tamaño y su unidad correspondiente
   */
  transform(bytes: number): string {
    if (!bytes) return '0B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    // Obtenemos el exponente para determinar la unidad
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    // Calculamos el valor en la unidad correspondiente y redondeamos a 2 decimales
    const finalValue = parseFloat((bytes / Math.pow(k, i)).toFixed(2));
    return `${finalValue} ${sizes[i]}`;
  }
}
