import { Component, OnInit } from '@angular/core';
import { IStage } from 'src/app/models';
import { SeasonsService } from '../services/seasons.service';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss']
})
export class SeasonsComponent implements OnInit {
  seasons: Array<IStage>;
  constructor(private seasonsService: SeasonsService) {}

  ngOnInit() {
    this.seasonsService.getSeasons().subscribe((seasons: Array<IStage>) => (this.seasons = seasons));
  }
}
