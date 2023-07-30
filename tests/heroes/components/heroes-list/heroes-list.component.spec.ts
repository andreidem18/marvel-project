import { ComponentFixture, TestBed } from '@angular/core/testing';
import { heroesResMock } from '../../mocks-data/heroes-res.mock';

import { HeroesListComponent } from '../../../../src/app/heroes/components/heroes-list/heroes-list.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HeroesService } from 'src/app/heroes/services/heroes.service';
import { environtment } from 'src/environments/environments';
import { httpInterceptorProviders } from 'src/app/http-interceptors';
import { ComicsModule } from 'src/app/comics/comics.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HeroeCardComponent } from 'src/app/heroes/components/heroe-card/heroe-card.component';

describe('HeroesListComponent', () => {
  let apiUrl = environtment.apiUrl;

  let component: HeroesListComponent;
  let fixture: ComponentFixture<HeroesListComponent>;
  let compiled: HTMLElement;
  let service: HeroesService;
  let httpMock: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroesListComponent, HeroeCardComponent],
      imports: [HttpClientTestingModule, ComicsModule, SharedModule, ReactiveFormsModule],
    });
    fixture = TestBed.createComponent(HeroesListComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(HeroesService);
    httpMock = TestBed.inject(HttpTestingController);
    
    const request = httpMock.expectOne(`${apiUrl}/characters?offset=0&limit=10`);
    request.flush(heroesResMock);

    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match with the snapshot', () => {
    expect(compiled.innerHTML).toMatchSnapshot();
  });


  it('should load a list of heroes', () => {

    const heroesCards = compiled.querySelectorAll('.heroe-item');

    expect(heroesCards).toHaveLength(heroesResMock.data.results.length);
  });

  it('should call a request when changing order by', () => {
    const select = compiled.querySelector('select');

    
    expect(select).not.toBeNull();

    select!.value = 'modified';
    select!.dispatchEvent(new Event('change'));
    httpMock.match(`${apiUrl}/characters?offset=0&limit=10&orderBy=modified`);
  });

  it('should call a request when executing setPagination', () => {
    component.setPagination({limit: 10, offset: 30});
    httpMock.expectOne(`${apiUrl}/characters?offset=30&limit=10`)
  })

  
  
});
