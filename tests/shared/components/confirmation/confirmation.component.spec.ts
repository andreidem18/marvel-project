import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationComponent } from '../../../../src/app/shared/components/confirmation/confirmation.component';
import { ConfirmationService } from 'src/app/shared/services/confirmation/confirmation.service';
import { confirmationMock } from '../../mock-data/confirmation-mock';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

describe('ConfirmationComponent', () => {
  let component: ConfirmationComponent;
  let fixture: ComponentFixture<ConfirmationComponent>;
  let service: ConfirmationService;
  let compiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmationComponent, ModalComponent],
    });
    fixture = TestBed.createComponent(ConfirmationComponent);
    service = TestBed.inject(ConfirmationService);
    compiled = fixture.nativeElement;
    
    service.display(confirmationMock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match with the snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  it('should trigger the confirmation action when clicking yes button', () => {
    jest.spyOn(component, 'fireAction');

    const buttonTag = compiled.querySelector('.yes');
    expect(buttonTag).toBeTruthy();
    buttonTag!.dispatchEvent(new Event('click'));

    expect(component.fireAction).toHaveBeenCalled();
  });

  it('should close when clicking the no button', () => {
    const buttonTag = compiled.querySelector('.no');
    buttonTag?.dispatchEvent(new Event('click'));
    expect(service.isOpen).toBeFalsy();
  });

  it('should close when clicking the yes button', () => {
    const buttonTag = compiled.querySelector('.yes');
    buttonTag?.dispatchEvent(new Event('click'));
    expect(service.isOpen).toBeFalsy();
  });
});
