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
import { CostCenter } from './models/cost-center.interface';
import { InputTextModule } from 'primeng/inputtext';

const NG_MODULES = [ReactiveFormsModule, NgClass];
const PRIME_MODULES = [
  SidebarModule,
  ButtonModule,
  RadioButtonModule,
  InputTextModule,
];

@Component({
  selector: 'app-cost-center-sidebar',
  standalone: true,
  imports: [NG_MODULES, PRIME_MODULES],
  templateUrl: './cost-center-sidebar.component.html',
  styleUrl: './cost-center-sidebar.component.scss',
})
export class CostCenterSidebarComponent implements OnInit {
  selectedCostCenter = input.required<CostCenter | null>();
  onSelect = output<CostCenter>();

  costCenterForm!: FormGroup<ControlsOf<CostCenter>>;
  costCenters = signal<CostCenter[]>([]);
  newCostCenterForm!: FormGroup<ControlsOf<CostCenter>>;
  visible = signal<boolean>(false);
  step = signal<number>(1);

  get codeField() {
    return this.costCenterForm.get('code');
  }

  private readonly fb = inject(NonNullableFormBuilder);

  ngOnInit(): void {
    console.log('CostCenterSidebarComponent initialized');
    this.fetchCostCenters();
    this.buildForm(this.selectedCostCenter());
  }

  private buildForm(selectedCostCenter: CostCenter | null): void {
    this.costCenterForm = this.fb.group({
      name: selectedCostCenter?.name || '',
      code: selectedCostCenter?.code || '',
    });
    this.newCostCenterForm = this.fb.group({
      name: '',
      code: '',
    });
  }

  private fetchCostCenters(): void {
    let costCenters = [
      { name: 'San Bernardo', code: 'C020' },
      { name: 'San Francisco', code: 'C021' },
      { name: 'San Juan', code: 'C022' },
    ];
    const selectedCostCenter = this.selectedCostCenter();
    if (selectedCostCenter) {
      const index = costCenters.findIndex(
        (costCenter) => costCenter.code === selectedCostCenter.code
      );
      const selectedItem = costCenters[index];
      if (selectedItem) {
        costCenters = [
          selectedItem,
          ...costCenters.filter(
            (costCenter) => costCenter.code !== selectedItem.code
          ),
        ];
      }
    }
    this.costCenters.set(costCenters);
  }

  show(): void {
    this.visible.set(true);
  }

  onSelectItem(index: number) {
    const selectedItem = this.costCenters()[index];
    this.costCenterForm.setValue({
      code: selectedItem.code,
      name: selectedItem.name,
    });
  }

  submit(): void {
    this.visible.set(false);
    const formData = this.costCenterForm.getRawValue();
    if (validateNoNulls(formData)) {
      this.onSelect.emit(formData);
    }
  }

  saveAndSelectNewCostCenter(): void {
    const formData = this.newCostCenterForm.getRawValue();
    console.log('formData:  ', formData);
    if (validateNoNulls(formData)) {
      this.onSelect.emit(formData);
    }
    this.visible.set(false);
  }
}
