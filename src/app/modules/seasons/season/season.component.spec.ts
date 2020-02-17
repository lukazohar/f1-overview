import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonComponent } from './season.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SeasonsService } from '../services/seasons.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SeasonComponent', () => {
  let component: SeasonComponent;
  let fixture: ComponentFixture<SeasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SeasonComponent],
      imports: [RouterTestingModule, HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
