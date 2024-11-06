import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

interface DetallesPrecio {
  subtotal: number;
  impuestos: number;
  envio: number;
}

@Component({
  selector: 'app-cart-bottom-sheet',
  standalone: true,
  imports: [CommonModule, ButtonModule, SidebarModule, DragDropModule],
  templateUrl: './cart-bottom-sheet.component.html',
  styleUrl: './cart-bottom-sheet.component.scss',
})
export class CartBottomSheetComponent implements AfterViewInit {
  @ViewChild('dragHandle') dragHandle!: ElementRef;

  visible: boolean = true;
  isExpanded: boolean = false;
  dragPosition = { x: 0, y: 0 };
  private startY: number = 0;
  private currentY: number = 0;

  detalles: DetallesPrecio = {
    subtotal: 89.99,
    impuestos: 7.2,
    envio: 5.0,
  };

  get total(): number {
    return (
      this.detalles.subtotal + this.detalles.impuestos + this.detalles.envio
    );
  }

  ngAfterViewInit() {
    this.setupDragListeners();
  }

  setupDragListeners() {
    const element = this.dragHandle.nativeElement;
    let isDragging = false;

    element.addEventListener('touchstart', (e: TouchEvent) => {
      isDragging = true;
      this.startY = e.touches[0].clientY;
      this.currentY = this.startY;
    });

    element.addEventListener('touchmove', (e: TouchEvent) => {
      if (!isDragging) return;

      this.currentY = e.touches[0].clientY;
      const deltaY = this.currentY - this.startY;

      // Si el deltaY es positivo, el usuario está deslizando hacia abajo
      // Si es negativo, está deslizando hacia arriba
      if (Math.abs(deltaY) > 50) {
        // Umbral de 50px para el swipe
        this.isExpanded = deltaY < 0;
      }
    });

    const endDrag = () => {
      isDragging = false;
      this.startY = 0;
      this.currentY = 0;
    };

    element.addEventListener('touchend', endDrag);
    element.addEventListener('touchcancel', endDrag);
  }

  toggleExpanded(): void {
    this.isExpanded = !this.isExpanded;
  }
}
