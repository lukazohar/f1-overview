import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeasonsRoutingModule } from './seasons-routing.module';
import { SeasonsComponent } from './seasons/seasons.component';
import { SeasonComponent } from './season/season.component';


@NgModule({
  declarations: [SeasonsComponent, SeasonComponent],
  imports: [
    CommonModule,
    SeasonsRoutingModule
  ]
})
export class SeasonsModule { }
