import {Component, Input, OnInit, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';
import {Country} from '../../../@core/models/Country';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  showAutoComplete = false;
  searchCountry = '';
  @Input() countries: Array<Country>;
  @Output() search = new EventEmitter<string>();
  searchedCountries: Array<Country>;

  constructor() {
  }

  ngOnInit(): void {
    this.searchedCountries = this.countries;
  }

  onSearch(searchWord): void {
    this.searchedCountries = this.countries.filter(country => {
      return country['Country'].toLowerCase().includes(searchWord.toLocaleLowerCase());
    });
    this.search.emit(searchWord);
  }

}
