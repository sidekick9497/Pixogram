import { TestBed } from '@angular/core/testing';

import { MediaDaoService } from './media-dao.service';

describe('MediaDaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MediaDaoService = TestBed.get(MediaDaoService);
    expect(service).toBeTruthy();
  });
});
