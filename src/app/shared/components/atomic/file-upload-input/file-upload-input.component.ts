// Angular
import { NgClass } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';
// PrimeNG
import { ButtonModule } from 'primeng/button';
// Pipes
import { FileSizePipe } from '@shared/pipes/file-size/file-size.pipe';
// Models
import { FileData } from './models/file-data.interface';

const NG_MODULES = [NgClass];
const PRIME_MODULES = [ButtonModule];
const PIPES = [FileSizePipe];

@Component({
  selector: 'app-file-upload-input',
  standalone: true,
  imports: [NG_MODULES, PRIME_MODULES, PIPES],
  templateUrl: './file-upload-input.component.html',
  styleUrl: './file-upload-input.component.scss',
})
export class FileUploadInputComponent {
  /**
   * Atributo `accept` del input de tipo `file`.
   * Este atributo especifica los tipos de archivos que el usuario puede seleccionar.
   * + Por defecto es `.pdf`.
   */
  accept = input<string>('.pdf');
  /**
   * Tamaño máximo de archivo permitido en bytes.
   * Por defecto es 1MB.
   */
  maxFileSize = input<number>(1024 * 1024 * 10);
  /**
   * Número máximo de archivos que se pueden cargar.
   * + Por defecto es 1.
   */
  fileLimit = input<number>(1);
  /**
   * Indica si se permite cargar varios archivos.
   */
  isMultiple = computed<boolean>(() => this.fileLimit() > 1);

  acceptLabel = computed<string>(() => {
    const accept = this.accept().split(',');
    if (accept.length === 1) return accept[0];
    return accept.slice(0, -1).join(', ') + ' o ' + accept.slice(-1);
  });

  files = signal<File[]>([]);
  detailedFiles = signal<FileData[]>([]);
  isDragging = signal<boolean>(false);

  /**
   * Maneja el evento de arrastrar sobre el componente.
   * @param event - El evento de arrastrar (DragEvent).
   * Este método previene el comportamiento predeterminado y la propagación del evento,
   * y establece el estado de arrastre a verdadero.
   */
  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging.set(true);
  }

  /**
   * Maneja el evento de arrastrar y soltar cuando el elemento arrastrado sale del área de destino.
   * @param event - El evento de arrastrar y soltar.
   * Este método previene el comportamiento predeterminado del evento y detiene su propagación.
   * Además, establece la propiedad `isDragging` a `false` para indicar que el elemento ya no está siendo arrastrado sobre el área de destino.
   */
  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging.set(false);
  }

  /**
   * Maneja el evento de soltar archivos en el área de carga.
   * @param event - El evento de arrastrar y soltar (DragEvent).
   * Este método previene el comportamiento predeterminado y la propagación del evento,
   * cambia el estado de arrastre a falso, y si hay archivos en el evento de transferencia de datos,
   * los añade a la lista de archivos.
   */
  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging.set(false);
    if (!event.dataTransfer) return;
    const files = event.dataTransfer.files;
    if (!files.length) return;
    this.addFiles(files);
  }

  /**
   * Maneja el evento cuando se selecciona un archivo en el input.
   * @param {Event} event - El evento de selección de archivo.
   * @returns {void}
   */
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;
    this.addFiles(input.files);
  }

  addFiles(fileList: FileList): void {
    const files = Array.from(fileList);
    if (!this.isMultiple() && files.length > 1) {
      // Añadir error de formulario.
      console.error('Solo se permite un archivo.');
      return;
    }

    const newDetailedFiles: FileData[] = [];

    files.forEach((file) => {
      const fileSize = file.size;
      const isValidFileType = this.isValidFileType(file);
      const isValidFileSize = fileSize <= this.maxFileSize();
      const fileIcon = this.getFileIcon(file.type);
      const fileData: FileData = {
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: file.lastModified,
        icon: fileIcon,
        messageError: null,
        hasError: false,
      };
      if (!isValidFileType || !isValidFileSize) fileData.hasError = true;
      if (!isValidFileType) {
        fileData.messageError = 'Tipo de archivo no permitido.';
      } else if (!isValidFileSize) {
        fileData.messageError = 'Tamaño de archivo excedido.';
      } else {
        this.files.update((prev) => [...prev, file]);
      }
      newDetailedFiles.push(fileData);
    });

    this.detailedFiles.update((prev) => [...prev, ...newDetailedFiles]);
  }

  removeFile(index: number): void {
    this.detailedFiles.update((prev) => {
      prev.splice(index, 1);
      return prev;
    });
    const detailedFile = this.detailedFiles()[index];
    if (detailedFile.hasError) return;
    const fileIndex = this.files().findIndex(
      (file) =>
        file.name === detailedFile.name &&
        file.size === detailedFile.size &&
        file.type === detailedFile.type &&
        file.lastModified === detailedFile.lastModified
    );

    if (fileIndex === -1) return;
    this.files.update((prev) => {
      prev.splice(fileIndex, 1);
      return prev;
    });
  }

  private isValidFileType(file: File): boolean {
    const acceptedTypes = this.accept()
      .split(',')
      .map((type) => type.trim());

    return acceptedTypes.some(
      (type) => file.name.endsWith(type) || file.type === type
    );
  }

  getFileIcon(fileType: string): string {
    if ('application/pdf' === fileType) {
      return 'fa-file-pdf';
    } else if (
      [
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      ].includes(fileType)
    ) {
      return 'fa-file-word';
    } else if (
      [
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      ].includes(fileType)
    ) {
      return 'fa-file-excel';
    } else if (['image/jpeg', 'image/png'].includes(fileType)) {
      return 'fa-file-image';
    }
    // Agrega más tipos de archivo y sus iconos correspondientes según sea necesario

    return 'fa-file'; // Icono por defecto
  }
}
