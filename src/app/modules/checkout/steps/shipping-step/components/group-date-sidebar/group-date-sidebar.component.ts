import {
  Component,
  EventEmitter,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';

const PRIME_MODULES = [ButtonModule];

@Component({
  selector: 'app-group-date-sidebar',
  standalone: true,
  imports: [PRIME_MODULES],
  templateUrl: './group-date-sidebar.component.html',
  styleUrl: './group-date-sidebar.component.scss',
})
export class GroupDateSidebarComponent {
  @ViewChild('headerTpl', { static: true }) headerTpl!: TemplateRef<any>;
  @ViewChild('contentTpl', { static: true }) contentTpl!: TemplateRef<any>;
  @ViewChild('footerTpl', { static: true }) footerTpl!: TemplateRef<any>;

  @Output() onClose = new EventEmitter<void>();
  @Output() onSave = new EventEmitter<void>();
}
