// Angular
import { NgClass } from '@angular/common';
import {
  Component,
  inject,
  input,
  OnInit,
  output,
  signal,
} from '@angular/core';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
// Models
import { ControlsOf } from '@shared/models/controls.type';
// Utils
import { validateNoNulls } from '@shared/services/form-utils';
// PrimeNG
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SidebarModule } from 'primeng/sidebar';

const NG_MODULES = [ReactiveFormsModule, NgClass];
const PRIME_MODULES = [SidebarModule, ButtonModule, RadioButtonModule];

export interface IStore {
  name: string;
  code: string;
  address: string;
}

@Component({
  selector: 'app-store-list-sidebar',
  standalone: true,
  imports: [NG_MODULES, PRIME_MODULES],
  templateUrl: './store-list-sidebar.component.html',
  styleUrl: './store-list-sidebar.component.scss',
})
export class StoreListSidebarComponent implements OnInit {
  stores = input.required<IStore[]>();
  onSubmit = output<IStore>();

  storeForm!: FormGroup<ControlsOf<IStore>>;
  visible = signal<boolean>(false);

  get codeField() {
    return this.storeForm.get('code');
  }

  private readonly fb = inject(NonNullableFormBuilder);

  constructor() {
    this.buildForm();
  }

  ngOnInit(): void {}

  private buildForm(): void {
    this.storeForm = this.fb.group({
      name: '',
      address: '',
      code: '',
    });
  }

  show(): void {
    this.visible.set(true);
  }

  onSelectItem(index: number) {
    const selectedItem = this.stores()[index];
    this.storeForm.setValue({
      code: selectedItem.code,
      name: selectedItem.name,
      address: selectedItem.address,
    });
  }

  submit(): void {
    this.visible.set(false);
    const formData = this.storeForm.getRawValue();
    if (validateNoNulls(formData)) {
      this.onSubmit.emit(formData);
    }
  }
}
