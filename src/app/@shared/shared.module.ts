import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ActiveCasesPipe } from './pipes/active-cases.pipe';
import {ChartsModule} from 'ng2-charts';
import { SearchComponent } from './components/search/search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [NavbarComponent, ActiveCasesPipe, SearchComponent],
  imports: [
    CommonModule,
    ChartsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    ActiveCasesPipe,
    ChartsModule,
    SearchComponent
  ]
})
export class SharedModule { }
