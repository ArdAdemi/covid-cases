import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Summary} from '../models/Summary';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  getSummary(): Observable<Summary>{
    return this.http.get<Summary>(environment.apiUrl +   '/summary');
  }
}
