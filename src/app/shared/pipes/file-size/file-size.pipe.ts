import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSize',
  standalone: true,
})
export class FileSizePipe implements PipeTransform {
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
