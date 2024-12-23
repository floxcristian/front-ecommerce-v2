import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  forwardRef,
  Inject,
  inject,
  output,
  PLATFORM_ID,
  signal,
  ViewChild,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validator,
  Validators,
} from '@angular/forms';
import { ControlsOf } from '@shared/models/controls.type';
import { InputTextModule } from 'primeng/inputtext';
import {
  AutoCompleteCompleteEvent,
  AutoCompleteModule,
  AutoCompleteSelectEvent,
} from 'primeng/autocomplete';
import { CommonModule, isPlatformBrowser } from '@angular/common';

const NG_MODULES = [ReactiveFormsModule, CommonModule];
const PRIME_MODULES = [InputTextModule, AutoCompleteModule];

@Component({
  selector: 'app-address-input',
  standalone: true,
  imports: [NG_MODULES, PRIME_MODULES],
  templateUrl: './address-input.component.html',
  styleUrl: './address-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddressInputComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AddressInputComponent),
      multi: true,
    },
  ],
  host: { class: 'w-full' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressInputComponent
  implements AfterViewInit, ControlValueAccessor, Validator
{
  @ViewChild('searchAddress') searchRef!: ElementRef<HTMLInputElement>;
  onChangeAddress = output<string>();

  private onChange: (value: string) => void = () => {};
  private onTouch: () => void = () => {};

  get searchField(): FormControl<string> {
    return this.form.controls.search;
  }

  private readonly fb = inject(NonNullableFormBuilder);
  form!: FormGroup<ControlsOf<{ search: string }>>;
  autocompleteService!: google.maps.places.AutocompleteService;
  predictionList = signal<google.maps.places.AutocompletePrediction[]>([]);

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.buildForm();
  }

  async ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    await this.initGooglePlacesAutocomplete();
  }

  /**
   * Build the form group.
   * @private
   * @returns void
   **/
  private buildForm(): void {
    this.form = this.fb.group({
      search: [''],
    });
  }

  private async initGooglePlacesAutocomplete(): Promise<void> {
    const { AutocompleteService } = (await google.maps.importLibrary(
      'places'
    )) as google.maps.PlacesLibrary;
    this.autocompleteService = new AutocompleteService();
  }

  async search({ query }: AutoCompleteCompleteEvent): Promise<void> {
    const response = await this.autocompleteService.getPlacePredictions({
      input: query,
      types: ['address'],
      componentRestrictions: { country: 'cl' },
    });
    this.predictionList.set(response.predictions);
  }

  onSelectPrediction(prediction: AutoCompleteSelectEvent): void {
    const seletedPrediction =
      prediction.value as google.maps.places.AutocompletePrediction;
    const placeId = seletedPrediction.place_id;
    this.onChangeAddress.emit(placeId);
  }

  onSearchFieldBlur(): void {
    this.onTouch();
  }

  onSearchFieldInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const formattedValue = inputElement.value;
    this.searchField?.setValue(formattedValue);
    this.onChange(formattedValue);
  }

  writeValue(value: string): void {
    this.searchField.setValue(value);
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  /**
   * Validar el control síncronamente.
   * @returns The validation errors or null.
   * */
  validate(): ValidationErrors | null {
    return this.searchField.errors;
  }
}
