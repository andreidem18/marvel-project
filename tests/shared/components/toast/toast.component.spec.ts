import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastComponent } from '../../../../src/app/shared/components/toast/toast.component';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { toastsMock } from '../../mock-data/toasts-mock';

describe('ToastComponent', () => {
  let component: ToastComponent;
  let fixture: ComponentFixture<ToastComponent>;
  let service: ToastService;
  let compiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToastComponent]
    });
    fixture = TestBed.createComponent(ToastComponent);
    service = TestBed.inject(ToastService);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the toasts of the service', () => {
    service.addToast(toastsMock[0]);
    service.addToast(toastsMock[1]);
    fixture.detectChanges();
    const toastsTags = compiled.querySelectorAll('.toast-item');
    expect(toastsTags).toHaveLength(2);
  });
});
