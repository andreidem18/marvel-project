import { TestBed } from '@angular/core/testing';

import { ToastService } from '../../../../src/app/shared/services/toast/toast.service';
import { toastsMock } from '../../mock-data/toasts-mock';

describe('ToastService', () => {

  let service: ToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastService);
    service.removeAllToasts();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('addToast() should add one toast', () => {
    service.addToast(toastsMock[0]);
    service.addToast(toastsMock[1]);
    service.addToast(toastsMock[2]);
    expect(service.toastsList).toHaveLength(3);
  });

  it('removeToast() should remove the toast', () => {
    const toast = service.addToast(toastsMock[0]);
    expect(service.toastsList).toHaveLength(1);

    service.removeToast(toast.id);
    expect(service.toastsList).toHaveLength(0);
  });

  it('toasts should remove after duration', (done) => {
    service.addToast(toastsMock[0]);
    setTimeout(() => {
      expect(service.toastsList).toHaveLength(0);
      done();
    }, (toastsMock[0].duration * 1000) + 100);
  });
});
