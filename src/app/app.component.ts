import { Component } from '@angular/core';
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [NavbarComponent, RouterOutlet]
})
export class AppComponent {
  title = 'prestigetemperature';
}
