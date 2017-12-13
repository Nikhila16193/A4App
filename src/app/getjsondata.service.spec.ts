import { TestBed, inject } from '@angular/core/testing';

import { GetjsondataService } from './getjsondata.service';

describe('GetjsondataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetjsondataService]
    });
  });

  it('should be created', inject([GetjsondataService], (service: GetjsondataService) => {
    expect(service).toBeTruthy();
  }));
});
