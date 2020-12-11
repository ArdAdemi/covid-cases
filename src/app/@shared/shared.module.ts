import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ActiveCasesPipe } from './pipes/active-cases.pipe';
import {ChartsModule} from 'ng2-charts';
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [NavbarComponent, FooterComponent, ActiveCasesPipe, SearchComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ActiveCasesPipe,
    ChartsModule
  ]
})
export class SharedModule { }
