import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISeason } from 'src/app/models';
import { Router, ActivatedRoute } from '@angular/router';
import { SeasonsService } from '../services/seasons.service';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss']
})
export class SeasonComponent implements OnInit {
  season: ISeason;

  constructor(private seasonsService: SeasonsService, private router: ActivatedRoute) {}

  ngOnInit() {
    let seasonId: string;
    this.router.params.subscribe(params => (seasonId = params.season));
    this.seasonsService.getSeason(seasonId).subscribe((seasons: ISeason) => (this.season = seasons));
  }
}
