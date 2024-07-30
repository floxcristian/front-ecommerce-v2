import { Component } from '@angular/core';
import { HeroComponent } from '../../../shared/components/blocks/hero/hero.component';
import { FeatureSectionComponent } from '../sections/feature-section/feature-section.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeroComponent, FeatureSectionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
