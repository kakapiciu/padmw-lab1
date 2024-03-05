import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Country } from '../../models/country';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-country',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './country.component.html',
  styleUrl: './country.component.scss'
})

// Other code
export class CountryComponent {
  @Input() country?: Country;
  @Output() onclick = new EventEmitter<Country>();

  show() {
    this.onclick.emit(this.country);
  }
}