import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeasonsComponent } from './seasons/seasons.component';
import { SeasonComponent } from './season/season.component';

const routes: Routes = [
  {
    path: '',
    component: SeasonsComponent,
    children: [
      {
        path: '',
        children: [{ path: ':season', component: SeasonComponent }]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeasonsRoutingModule {}
