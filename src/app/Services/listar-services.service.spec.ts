import { TestBed } from '@angular/core/testing';

import { ListarServicesService } from './listar-services.service';

describe('ListarServicesService', () => {
  let service: ListarServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
