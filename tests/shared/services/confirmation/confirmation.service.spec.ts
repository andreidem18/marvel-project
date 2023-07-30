import { TestBed } from '@angular/core/testing';

import { ConfirmationService } from '../../../../src/app/shared/services/confirmation/confirmation.service';
import { confirmationMock } from '../../mock-data/confirmation-mock';

describe('ConfirmationService', () => {
  let service: ConfirmationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmationService);
    service.close();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('trigger display should open the confirmation', () => {
    service.display(confirmationMock);
    expect(service.isOpen).toBeTruthy();
  });

  it('when trigger action should close the confirmation', () => {
    jest.spyOn(service, 'close');
    service.display(confirmationMock);
    service.confirmationInfo.action();

    expect(service.close).toHaveBeenCalled();
  });
});
