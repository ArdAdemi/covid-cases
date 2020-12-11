import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VizualizationComponent} from './vizualization/vizualization.component';

const routes: Routes = [
  {
    path: '',
    component: VizualizationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisualizationRoutingModule { }
