import { TestBed } from '@angular/core/testing';

import { WebSocketServicesService } from './web-socket-services.service';

describe('WebSocketServicesService', () => {
  let service: WebSocketServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebSocketServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
