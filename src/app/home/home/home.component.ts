import {Component, OnInit} from '@angular/core';
import {CountryService} from '../../@core/services/country.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  countriesCases: Array<any>;
  totalCases: any;

  constructor(private countryService: CountryService) {
  }

  ngOnInit(): void {
    this.getCases();
  }

  getCases(): void {
    this.countryService.getSummary().subscribe(
      data => {
        this.countriesCases = data.Countries;
        this.totalCases = data.Global;
      },
      error => {
        console.log(error);
      }
    );
  }

}
