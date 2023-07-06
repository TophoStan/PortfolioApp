import { TestBed } from '@angular/core/testing';

import { ItemService } from './tutorial.service';

describe('TutorialService', () => {
  let service: ItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
