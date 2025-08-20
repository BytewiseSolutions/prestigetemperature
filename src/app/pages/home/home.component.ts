import { Component } from '@angular/core';
import { AboutSectionComponent } from './about-section/about-section.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ServicesSectionComponent } from './services-section/services-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSectionComponent,
    ServicesSectionComponent,
    AboutSectionComponent
  ],
  template: `
    <app-hero-section></app-hero-section>
    <app-services-section></app-services-section>
    <app-about-section></app-about-section>
  `
})
export class HomeComponent {}
