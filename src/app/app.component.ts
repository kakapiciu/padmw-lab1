import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { CalcComponent } from './components/calc/calc.component';
import { CountryComponent } from './components/country/country.component';
import { CountryListComponent } from './components/country-list/country-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TopBarComponent,
    CalcComponent,
    CountryComponent,
    CountryListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MyFirstAngularProject';
}
