import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSearchComponent } from '../../../../src/app/shared/components/input-search/input-search.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HeroesService } from 'src/app/heroes/services/heroes.service';

describe('InputSearchComponent', () => {
  let component: InputSearchComponent;
  let fixture: ComponentFixture<InputSearchComponent>;
  let compiled: HTMLElement;
  let service: HeroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      declarations: [InputSearchComponent]
    });
    fixture = TestBed.createComponent(InputSearchComponent);
    service = TestBed.inject(HeroesService);
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

  it('should filter heroes by name when input', (done) => {
    jest.spyOn(service, 'getAllHeroes');
    const inputTag = compiled.querySelector('input');
    expect(inputTag).toBeTruthy();

    const heroName = 'spider-man'
    inputTag!.value = heroName;
    inputTag!.dispatchEvent(new Event('input'));

    setTimeout(() => {
      expect(service.getAllHeroes).toHaveBeenCalledWith({ name: heroName});
      done();
    }, 600);
  });
});
