import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

const NG_MODULES = [NgClass];
@Component({
  selector: 'app-delivery-form',
  standalone: true,
  imports: [...NG_MODULES],
  templateUrl: './delivery-form.component.html',
  styleUrl: './delivery-form.component.scss',
  host: { class: 'w-full' },
})
export class DeliveryFormComponent {}
