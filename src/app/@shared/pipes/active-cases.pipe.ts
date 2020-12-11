import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activeCases'
})
export class ActiveCasesPipe implements PipeTransform {

  transform(value: unknown): unknown {
    if (value){
      return value['TotalConfirmed'] - value['TotalRecovered'] - value['TotalDeaths'];
    }else{
      return 'No Data';
    }

  }

}
