import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesListComponent } from '../../../../src/app/comics/components/favorites-list/favorites-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComicsService } from 'src/app/comics/services/comics.service';
import { comicRes } from '../../mocks-data/comics-res.mock';
import { FavoriteItemComponent } from 'src/app/comics/components/favorite-item/favorite-item.component';
import { ComicDetailComponent } from 'src/app/comics/components/comic-detail/comic-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('FavoritesListComponent', () => {
  let component: FavoritesListComponent;
  let fixture: ComponentFixture<FavoritesListComponent>;
  let service: ComicsService;
  let compiled: HTMLElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, SharedModule ],
      declarations: [FavoritesListComponent, FavoriteItemComponent, ComicDetailComponent]
    });
    fixture = TestBed.createComponent(FavoritesListComponent);
    service = TestBed.inject(ComicsService);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display favorites title', () => {
    const favoriteTitleTag = compiled.querySelector('.favorites-title');
    expect(favoriteTitleTag).not.toBeNull();
  });

  it('should display no comics message if there is no favorites', () => {
    const noComicsTag = compiled.querySelector('.no-comics');
    expect(noComicsTag).not.toBeNull();
  });

  it('should add three randoms comics when clicking button', () => {
    jest.spyOn(service, 'pickRandomFavorites');
    const button = compiled.querySelector('[data-test="random-comics-button"]');
    button?.dispatchEvent(new Event('click'));
    expect(service.pickRandomFavorites).toHaveBeenCalled();
  });

  it('should display comics if there is favorites', () => {
    service.addToFavorite(comicRes.data.results[0]);
    fixture.detectChanges();

    const favoritesListTag = compiled.querySelector('.favorites-list');
    expect(favoritesListTag).toBeTruthy();

    const noComicsTag = compiled.querySelector('.no-comics');
    expect(noComicsTag).toBeFalsy();

    const favoriteItemTags = compiled.querySelectorAll('[data-test=favorite-item]');
    expect(favoriteItemTags).toHaveLength(1);
  });
});
