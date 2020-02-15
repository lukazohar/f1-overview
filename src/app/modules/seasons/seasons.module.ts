import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeasonsRoutingModule } from './seasons-routing.module';
import { SeasonsComponent } from './seasons/seasons.component';
import { SeasonComponent } from './season/season.component';
import { HttpClientModule } from '@angular/common/http';
import { SeasonsService } from './services/seasons.service';

@NgModule({
  declarations: [SeasonsComponent, SeasonComponent],
  imports: [CommonModule, SeasonsRoutingModule, HttpClientModule],
  providers: [SeasonsService]
})
export class SeasonsModule {}
