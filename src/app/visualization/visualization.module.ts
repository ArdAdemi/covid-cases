import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisualizationRoutingModule } from './visualization-routing.module';
import { VisualizationComponent } from './vizualization/visualization.component';
import { ColumnChartComponent } from './vizualization/column-chart/column-chart.component';
import {SharedModule} from '../@shared/shared.module';


@NgModule({
  declarations: [VisualizationComponent, ColumnChartComponent],
  imports: [
    CommonModule,
    VisualizationRoutingModule,
    SharedModule
  ]
})
export class VisualizationModule { }
