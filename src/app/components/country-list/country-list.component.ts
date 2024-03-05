import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../../models/country';
import { NgFor, NgIf } from '@angular/common';
import { CountryComponent } from '../country/country.component';


@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [
    NgFor,
    CountryComponent,
    HttpClientModule
  ],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.scss'
})

// Other code
export class CountryListComponent implements OnInit {
  countriesUrl = "https://restcountries.com/v3.1/all";
  countries: Country[];

  constructor(private http: HttpClient) {
    this.countries = [];
  }

  ngOnInit(): void {
    this.getCountries().subscribe({
      next: (countries) => {
        this.countries = countries;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countriesUrl)
  }
  
  showDetails(country: Country) {
    alert(country.name.official);
  }
}