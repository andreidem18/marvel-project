import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from '../../../src/app/standalone/navbar/navbar.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environtment } from 'src/environments/environments';

describe('NavbarComponent', () => {
  const apiUrl = environtment.apiUrl;

  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let httpMock: HttpTestingController;
  let compiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NavbarComponent, HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(NavbarComponent);
    httpMock = TestBed.inject(HttpTestingController);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all heroes when clicking the logo', () => {
    const img = compiled.querySelector('img');
    img?.dispatchEvent(new Event('click'));
    httpMock.match(`${apiUrl}/characters?offset=0&limit=10`);
  });

  it('sidebar should be hidden', () => {
    const sidebar = compiled.querySelector('.sidebar-container');
    expect(sidebar?.classList.contains('open')).toBeFalsy();
  });

  it('sidebar should open only if the button is clicked', () => {
    const hamburguerButton = compiled.querySelector('.hamburguer-button');
    hamburguerButton?.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    const sidebar = compiled.querySelector('.sidebar-container');
    expect(sidebar?.classList.contains('open')).toBeTruthy();
  })
});
