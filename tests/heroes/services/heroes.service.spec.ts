import { TestBed } from '@angular/core/testing';

import { HeroesService } from '../../../src/app/heroes/services/heroes.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environtment } from 'src/environments/environments';

describe('HeroesService', () => {
  const baseUrl = environtment.apiUrl;

  let service: HeroesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
    });
    service = TestBed.inject(HeroesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all heroes', () => {
    service.getAllHeroes().subscribe();
    httpMock.match(`${baseUrl}/characters?offset=0&limit=10`);
  });

  it('should set name spider-man in the params', () => {
    const params = service.getParams({ name: "spider-man" });
    expect(params.get('nameStartsWith')).toBe("spider-man");
  });
  
  it('should set limit and offset', () => {
    const params = service.getParams({ limit: 10, offset: 20});
    expect(params.get('limit')).toBe("10");
    expect(params.get('offset')).toBe("20");
  });
});
