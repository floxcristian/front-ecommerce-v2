import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
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
  @ViewChild('detailsSection') detailsSection!: ElementRef;

  visible: boolean = true;
  isExpanded: boolean = false;
  private startY: number = 0;
  private currentY: number = 0;
  private isDragging: boolean = false;

  detalles: DetallesPrecio = {
    subtotal: 89.99,
    impuestos: 7.2,
    envio: 5.0,
  };

  constructor(private cdr: ChangeDetectorRef) {}

  get total(): number {
    return (
      this.detalles.subtotal + this.detalles.impuestos + this.detalles.envio
    );
  }

  ngAfterViewInit() {
    this.setupDragListeners();
  }

  setupDragListeners() {
    const handle = this.dragHandle.nativeElement;
    const details = this.detailsSection.nativeElement;

    handle.addEventListener(
      'touchstart',
      (e: TouchEvent) => {
        this.isDragging = true;
        this.startY = e.touches[0].clientY;
        e.preventDefault();
      },
      { passive: false }
    );

    handle.addEventListener(
      'touchmove',
      (e: TouchEvent) => {
        if (!this.isDragging) return;

        e.preventDefault();
        this.currentY = e.touches[0].clientY;
        const deltaY = this.currentY - this.startY;

        if (Math.abs(deltaY) > 30) {
          this.isExpanded = deltaY < 0;
          this.cdr.detectChanges();
        }
      },
      { passive: false }
    );

    const endDrag = () => {
      this.isDragging = false;
      this.cdr.detectChanges();
    };

    handle.addEventListener('touchend', endDrag);
    handle.addEventListener('touchcancel', endDrag);
  }

  toggleExpanded(): void {
    this.isExpanded = !this.isExpanded;
    this.cdr.detectChanges();
  }
}
