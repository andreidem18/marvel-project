import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from '../../../../src/app/shared/components/modal/modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;
  let compiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalComponent]
    });
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match with the snapshot', () => {
    expect(compiled.innerHTML).toMatchSnapshot();
  });

  it('should be active only if isOpen=true', () => {
    let modalTag = compiled.querySelector('.modal-container');
    expect(modalTag?.classList.contains('active')).toBeTruthy();

    component.isOpen = false;
    fixture.detectChanges();

    modalTag = compiled.querySelector('.modal-container');
    expect(modalTag?.classList.contains('active')).toBeFalsy();
  });

  it('should close when clicking the overlay', () => {
    const overlayTag = compiled.querySelector('.overlay');
    overlayTag?.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.isOpen).toBeFalsy();
  });
});
