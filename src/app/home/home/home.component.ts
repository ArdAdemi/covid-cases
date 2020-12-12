import {Component, OnInit} from '@angular/core';
import {CountryService} from '../../@core/services/country.service';
import {Country} from '../../@core/models/Country';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  countries: Array<any>;
  countriesCases: Array<Country>;
  searchedCountries: Array<Country>;
  totalActiveCases: number;
  totalDeaths: number;
  totalRecoveries: number;

  constructor(private countryService: CountryService) {
  }

  ngOnInit(): void {
    this.getCases();
  }

  getCases(): void {
    this.countryService.getSummary().subscribe(
      countries => {
        this.countriesCases = countries.Countries;
        this.searchedCountries = this.countriesCases;
        this.setActiveCases();
        this.countTotals();
      },
      error => {
        console.log(error);
      }
    );
  }

  setActiveCases(): void {
    this.countriesCases.map(country => {
      country.ActiveCases = country.TotalConfirmed - country.TotalDeaths - country.TotalRecovered;
    });
  }


  countTotals(): void {
    this.totalActiveCases = 0;
    this.totalDeaths = 0;
    this.totalRecoveries = 0;
    this.searchedCountries.map(country => {
      this.totalActiveCases += country.ActiveCases;
      this.totalDeaths += country.TotalDeaths;
      this.totalRecoveries += country.TotalRecovered;
    });
  }

  searchedCountry(searchWord): void{
    this.searchedCountries = this.countriesCases.filter(c => {
      return c['Country'].toLowerCase().includes(searchWord.toLocaleLowerCase());
    });
    this.countTotals();
  }

}
