import { TestBed } from '@angular/core/testing';

import { ApodServicesService } from './apod-services.service';

describe('ApodServicesService', () => {
  let service: ApodServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApodServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
