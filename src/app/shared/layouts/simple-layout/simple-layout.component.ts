import { Component } from '@angular/core';
import { ExternalHeaderComponent } from '../header/components/external-header/external-header.component';
import { RouterOutlet } from '@angular/router';

const NG_MODULES = [RouterOutlet];
const COMPONENTS = [ExternalHeaderComponent];
@Component({
  selector: 'app-simple-layout',
  standalone: true,
  imports: [...NG_MODULES, ...COMPONENTS],
  templateUrl: './simple-layout.component.html',
  styleUrl: './simple-layout.component.scss',
})
export class SimpleLayoutComponent {}
