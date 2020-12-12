import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisualizationRoutingModule } from './visualization-routing.module';
import { VizualizationComponent } from './vizualization/vizualization.component';
import { ColumnChartComponent } from './vizualization/column-chart/column-chart.component';
import {SharedModule} from '../@shared/shared.module';


@NgModule({
  declarations: [VizualizationComponent, ColumnChartComponent],
  imports: [
    CommonModule,
    VisualizationRoutingModule,
    SharedModule
  ]
})
export class VisualizationModule { }
