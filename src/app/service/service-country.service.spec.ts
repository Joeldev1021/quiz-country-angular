import { TestBed } from '@angular/core/testing';

import { ServiceCountryService } from './service-country.service';

describe('ServiceCountryService', () => {
  let service: ServiceCountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCountryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
