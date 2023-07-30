import { TestBed } from '@angular/core/testing';

import { ComicsService } from '../../../src/app/comics/services/comics.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { comicRes } from '../mocks-data/comics-res.mock';
import { environtment } from 'src/environments/environments';

describe('ComicsService', () => {
  const apiUrl = environtment.apiUrl;
  const comic = comicRes.data.results[0];

  let service: ComicsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(ComicsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a request when calling getComic', () => {
    service.getComic('10').subscribe();
    httpMock.expectOne(`${apiUrl}/comics/10`);
  });

  it('should add favorites', () => {
    service.addToFavorite(comic);
    expect(service.favoritesList).toHaveLength(1);
  });

  it('should remove favorites', () => {
    service.addToFavorite(comic);
    service.removeFavorite(comic.title);
    expect(service.favoritesList).toHaveLength(0);
  });

  it('addToFavorite() should not add repeated comics', () => {
    service.addToFavorite(comic);
    service.addToFavorite(comic);
    service.addToFavorite(comic);
    expect(service.favoritesList).toHaveLength(1);
  })

  it('getUniqueRandoms() should return an array of random numbers which not repeat', () => {
    const randoms = service.getUniqueRandoms(3, 3);
    const repeats = randoms.some((number, index) => randoms.indexOf(number) !== index);
    expect(repeats).toBe(false);
  });

});
