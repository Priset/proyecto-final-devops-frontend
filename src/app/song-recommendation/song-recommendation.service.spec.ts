import { TestBed } from '@angular/core/testing';

import { SongRecommendationService } from './song-recommendation.service';

describe('SongRecommendationService', () => {
  let service: SongRecommendationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SongRecommendationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
