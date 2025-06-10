import { TestBed } from '@angular/core/testing';

import { CadastroServices } from './cadastro-services.service';

describe('CadastroServicesService', () => {
  let service: CadastroServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
