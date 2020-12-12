import {Component, Input, OnInit} from '@angular/core';

import {Label} from 'ng2-charts';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.scss']
})
export class ColumnChartComponent implements OnInit {
  @Input() updateChart: Subject<any>;

  public barChartOptions: ChartOptions = {
    responsive: true,
    title: {
      display: true,
      text: 'Covid Cases',
      fontSize: 22
    },
    // We use these empty structures as placeholders for dynamic theming.
    scales: {xAxes: [{}], yAxes: [{}]},

  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.updateChart.subscribe(chartData => {
      this.barChartLabels = chartData.countries;
      this.barChartData = [
        {data: chartData.deathCases, label: 'Deaths Cases'},
        {data: chartData.activeCases, label: 'Active Cases'},
        {data: chartData.recoveredCases, label: 'Recovered Cases'},
        {data: chartData.confirmedCases, label: 'Confirmed Cases'},
      ];
    });

  }
}
