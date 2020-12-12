import {Component, OnInit} from '@angular/core';
import {Country} from '../../@core/models/Country';
import {CountryService} from '../../@core/services/country.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-vizualization',
  templateUrl: './vizualization.component.html',
  styleUrls: ['./vizualization.component.scss']
})
export class VizualizationComponent implements OnInit {
  updateChart: Subject<any> = new Subject();
  countriesCases: Array<Country>;

  recoveredCases: Array<number>;
  deathCases: Array<number>;
  activeCases: Array<number>;
  totalCases: Array<number>;
  countries: Array<string>;
  confirmedCases: Array<number>;

  constructor(private countryService: CountryService) {
  }

  ngOnInit(): void {
    this.getCases();
  }

  getCases(): void {
    this.countryService.getSummary().subscribe(
      countries => {
        this.countriesCases = countries.Countries;
        this.setActiveCases();
        this.prepareDataForTable('');
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

  prepareDataForTable(selectedCountry): any {
    this.recoveredCases = [];
    this.deathCases = [];
    this.activeCases = [];
    this.countries = [];
    this.confirmedCases = [];
    if (selectedCountry && selectedCountry.length !== 0) {
      this.countriesCases.map(country => {
        if (country.Country === selectedCountry) {
          this.countries.push(country.Country);
          this.deathCases.push(country.TotalDeaths);
          this.activeCases.push(country.ActiveCases);
          this.recoveredCases.push(country.TotalRecovered);
          this.confirmedCases.push(country.TotalConfirmed);
        }
      });
    } else {
      this.countriesCases.map(country => {
        this.countries.push(country.Country);
        this.deathCases.push(country.TotalDeaths);
        this.activeCases.push(country.ActiveCases);
        this.recoveredCases.push(country.TotalRecovered);
        this.confirmedCases.push(country.TotalConfirmed);
      });
    }

    this.updateChart.next({
      recoveredCases: this.recoveredCases,
      deathCases: this.deathCases,
      activeCases: this.activeCases,
      countries: this.countries,
      confirmedCases: this.totalCases,
    });
  }

}
